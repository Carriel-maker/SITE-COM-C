import { Footer, MediaPlaceholder } from "../../components/shared";
export const metadata = { title: "Case — Portfólio" };
export default async function CasePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <main><section className="case-hero"><p>PORTFÓLIO \ 2026</p><h1>Nome do<br/>projeto.</h1><div>Cliente a inserir <span>\</span> Serviço a inserir</div></section>
  <MediaPlaceholder label={`${slug}-hero.mp4`} />
  <section className="case-copy"><h2>Uma ideia clara para um desafio real.</h2><div><small>O DESAFIO</small><p>Insira aqui o contexto do cliente, o problema identificado e o objetivo estratégico do projeto.</p><small>A RESPOSTA</small><p>Apresente o conceito criado, o processo de desenvolvimento e as principais entregas realizadas pela COM\C.</p></div></section>
  <section className="case-media"><MediaPlaceholder label={`${slug}-01.jpg`} ratio="square"/><MediaPlaceholder label={`${slug}-02.mp4`} ratio="portrait" dark/></section>
  <section className="case-result"><small>RESULTADO</small><h2>O que mudou depois que a ideia ganhou forma.</h2><p>Espaço reservado para números, impacto, alcance, reconhecimento ou transformação percebida pelo cliente.</p></section><Footer /></main>}
