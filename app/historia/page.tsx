import { Footer, MediaPlaceholder, PageHero } from "../components/shared";
export const metadata = { title: "Nossa história" };
const chapters = [
  ["01", "Uma vontade sincera de ver algo bonito acontecer.", "A COM\\C nasceu de um jeito orgânico — e ao mesmo tempo poderoso. Não foi por ambição ou estratégia. Foi por entrega."],
  ["02", "Do primeiro projeto, vieram dois.", "Depois, cinco. Dez. Cinquenta. Quando percebemos, nossa comunicação já estava nas ruas, nos stories, nas marcas, nas conversas."],
  ["03", "A agência secreta mais presente da cidade.", "Sem site, sem rede social ativa, sem prospecção. Só conexões. Só trabalho bem-feito."],
  ["04", "Construir por dentro antes de aparecer por fora.", "Estruturamos equipe, processos e cultura. Firmamos nossos pés para, agora sim, alçar novos voos."],
];
export default function Historia(){return <main><PageHero index="02" title="Nossa história foi construída antes de ser contada." dark />
  <section className="history-intro"><p>Relações viram projetos. Projetos viram marcas. Marcas viram histórias.</p><MediaPlaceholder label="historia-abertura.mp4" /></section>
  <section className="chapters">{chapters.map(([n,t,p])=><article key={n}><small>{n}\04</small><h2>{t}</h2><p>{p}</p></article>)}</section>
  <section className="number-stage"><span>2</span><span>5</span><span>10</span><span>50</span><p>projetos viraram presença.</p></section>
  <section className="closing-copy"><h2>Mas, antes de tudo,<br/>é sobre gente.</h2><p>E gente que acredita na força de estar junto.</p></section><Footer /></main>}
