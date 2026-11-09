#!/usr/bin/env bash
# Instala e publica o site COM\C numa VPS Ubuntu/Debian (rode como root).
# Uso:   bash setup-vps.sh                  -> site no IP da VPS (porta 80)
#        bash setup-vps.sh meudominio.com.br -> site no domínio, com HTTPS
set -euo pipefail

DOMAIN="${1:-}"
REPO="https://github.com/Carriel-maker/SITE-COM-C.git"
APP_DIR="/var/www/site-com-c"
PORT=3000

[ "$(id -u)" -eq 0 ] || { echo "Rode como root (ou com sudo)."; exit 1; }

echo "==> Pacotes base"
apt-get update -y
apt-get install -y curl git nginx ca-certificates

echo "==> Node.js 22"
if ! command -v node >/dev/null || [ "$(node -p 'process.versions.node.split(".")[0]')" -lt 22 ]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi
npm install -g pnpm pm2

echo "==> Código do site"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" pull --ff-only
else
  git clone "$REPO" "$APP_DIR"
fi
cd "$APP_DIR"
pnpm install --frozen-lockfile
pnpm build

echo "==> Iniciando com PM2"
pm2 delete site-com-c >/dev/null 2>&1 || true
pm2 start "npx vinext start --port $PORT" --name site-com-c
pm2 save
pm2 startup systemd -u root --hp /root >/dev/null 2>&1 || true

echo "==> Nginx"
cat > /etc/nginx/sites-available/site-com-c <<NGINX
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name ${DOMAIN:-_};

    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
NGINX
rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/site-com-c /etc/nginx/sites-enabled/site-com-c
nginx -t
systemctl enable --now nginx
systemctl reload nginx

if [ -n "$DOMAIN" ]; then
  echo "==> HTTPS (Let's Encrypt) para $DOMAIN"
  apt-get install -y certbot python3-certbot-nginx
  certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos --register-unsafely-without-email --redirect \
    || echo "Aviso: HTTPS falhou. Confira se o domínio já aponta (registro A) para o IP desta VPS e rode o script de novo."
fi

echo
echo "Pronto! Site no ar em: ${DOMAIN:+https://$DOMAIN}${DOMAIN:-http://$(curl -s ifconfig.me)}"
echo "Para atualizar depois de mudanças no GitHub: bash $APP_DIR/deploy/setup-vps.sh $DOMAIN"
