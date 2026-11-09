import { Footer, PageHero } from "../components/shared";
export const metadata = { title: "Serviços" };
const services = [
  ["Branding", "Marcas não nascem prontas — são construídas.", "Identidade, posicionamento e narrativa. Do naming ao manifesto, tudo com intenção."],
  ["Design", "Estética que comunica. Função que encanta.", "Peças gráficas, identidades visuais e materiais institucionais com coerência e criatividade."],
  ["Campanhas", "Da ideia ao impacto.", "Conceito, execução e pontos de contato pensados para gerar resultado, engajamento e presença."],
  ["Gerenciamento de Redes Sociais", "Presença digital com propósito.", "Planejamento, criação, monitoramento e análise com estratégia e consistência."],
  ["Performance", "Resultados que fazem sentido.", "Mídia paga, tráfego e otimização guiados por dados, análises e inteligência."],
  ["Relações Públicas & Live Marketing", "Conectar pessoas, marcas e experiências.", "Estratégias e ativações que aproximam, encantam e fortalecem vínculos."],
  ["Audiovisual", "Algumas mensagens precisam ser sentidas.", "Roteiro, captação e edição para histórias com cara — e alma — de marca."],
  ["Consultorias", "Visão externa, soluções sob medida.", "Direção estratégica para destravar processos, organizar ideias e orientar decisões."],
];
export default function Servicos(){return <main><PageHero index="03" title="Tudo começa com uma ideia. O resto é construção." />
  <section className="service-list">{services.map(([name,line,body],i)=><article key={name}><small>{String(i+1).padStart(2,"0")}</small><div><h2>{name}</h2><h3>{line}</h3><p>{body}</p></div><span aria-hidden="true">\</span></article>)}</section><Footer /></main>}
