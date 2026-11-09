import { Footer, PageHero } from "../components/shared";
export const metadata = { title: "Clientes" };
const clients = ["CLIENTE 01", "CLIENTE 02", "CLIENTE 03", "CLIENTE 04", "CLIENTE 05", "CLIENTE 06", "CLIENTE 07", "CLIENTE 08", "CLIENTE 09", "CLIENTE 10", "CLIENTE 11", "CLIENTE 12"];
export default function Clientes(){return <main><PageHero index="04" title="Marcas diferentes. Relações de verdade." lead="Este espaço está pronto para receber os logos oficiais em SVG, mantendo proporção, contraste e acessibilidade." dark />
  <section className="client-wall">{clients.map((c,i)=><div key={c}><small>{String(i+1).padStart(2,"0")}</small><span>{c}</span></div>)}</section>
  <section className="client-note"><h2>O trabalho aparece.<br/>A relação permanece.</h2><p>Os nomes acima são marcadores técnicos e devem ser substituídos no arquivo de conteúdo.</p></section><Footer /></main>}
