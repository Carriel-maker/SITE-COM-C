# COM\C — guia de substituição de conteúdo

O site foi preparado para receber os arquivos finais sem alterar a estrutura visual.

## Vídeo de abertura

Coloque em `public/media/`:

- `home-hero.webm` — versão principal otimizada;
- `home-hero.mp4` — fallback;
- formato 16:9, mínimo 1920×1080, 10–20 segundos, loop sem corte perceptível, sem faixa de áudio obrigatória.

## História

- `historia-abertura.mp4` ou altere o componente marcado em `app/historia/page.tsx`.

## Portfólio

Os marcadores exibem o nome esperado do arquivo. Para cada case, substitua `MediaPlaceholder` por `<video>` ou `<img>` mantendo a classe e a proporção do container.

## Identidade

- A família é Inter (substituta livre das grotescas das referências: BaseGrotesk e Aeonik). Para produção, prefira hospedar os arquivos `.woff2` localmente em `public/fonts/` e substituir o `@import` do Google Fonts em `app/globals.css` por regras `@font-face`.
- Paleta: preto `#000`, branco `#fff`, cinza `#ababab`/`#666`; sem vermelho: logo, menu e rótulos herdam preto ou branco conforme o fundo; verde `#0fa64b` só no selo giratório; azul `#007bff` só em contornos e hover. Botões são sempre pílula com contorno, nunca preenchidos. Seções alternam preto e branco, sem gradientes nem sombras.
- Cases do portfólio ficam em `app/data/works.ts`; um slug que não esteja lá retorna 404.
- Cores e espaçamentos globais ficam no início de `app/globals.css` (variáveis `--green`, `--blue`, `--fog`, `--pill`).
- O pattern recebido está em `public/media/comc-pattern.jpg`.
- A aplicação escura está em `public/media/comc-dark-mark.png`.

## Dados ainda provisórios

Buscar por `provisório`, `Atualizar` e `CLIENTE` para localizar e substituir e-mail, Instagram, logos e nomes de cases.
