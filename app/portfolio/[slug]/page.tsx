import { notFound } from "next/navigation";
import { Footer, MediaPlaceholder } from "../../components/shared";
import { findWork, works } from "../../data/works";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => works.map(({ slug }) => ({ slug }));
export async function generateMetadata({ params }: Props) { const work = findWork((await params).slug); return { title: work ? work.title : "Case" }; }

export default async function CasePage({params}:Props){const {slug}=await params;const work=findWork(slug);if(!work)notFound();return <main><section className="case-hero"><p>PORTFÓLIO \ 2026</p><h1>{work.title}</h1><div>{work.categories}</div></section>
  <MediaPlaceholder label={`${slug}-hero.mp4`} />
  <section className="case-copy"><h2>Uma ideia clara para um desafio real.</h2><div><small>O DESAFIO</small><p>Insira aqui o contexto do cliente, o problema identificado e o objetivo estratégico do projeto.</p><small>A RESPOSTA</small><p>Apresente o conceito criado, o processo de desenvolvimento e as principais entregas realizadas pela COM\C.</p></div></section>
  <section className="case-media"><MediaPlaceholder label={`${slug}-01.jpg`} ratio="square"/><MediaPlaceholder label={`${slug}-02.mp4`} ratio="portrait" dark/></section>
  <section className="case-result"><small>RESULTADO</small><h2>O que mudou depois que a ideia ganhou forma.</h2><p>Espaço reservado para números, impacto, alcance, reconhecimento ou transformação percebida pelo cliente.</p></section><Footer /></main>}
