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

- A família é Poppins. Para produção, prefira hospedar os arquivos `.woff2` localmente em `public/fonts/` e substituir o `@import` do Google Fonts em `app/globals.css` por regras `@font-face`.
- Cores e espaçamentos globais ficam no início de `app/globals.css`.
- O pattern recebido está em `public/media/comc-pattern.jpg`.
- A aplicação escura está em `public/media/comc-dark-mark.png`.

## Dados ainda provisórios

Buscar por `provisório`, `Atualizar` e `CLIENTE` para localizar e substituir e-mail, Instagram, logos e nomes de cases.
