import Link from "next/link";
import { Footer, MediaPlaceholder, PageHero } from "../components/shared";
export const metadata = { title: "Portfólio" };
const works = [["case-01", "Case em destaque 01", "Branding \\ Campanha", "portrait"], ["case-02", "Case em destaque 02", "Audiovisual \\ Conteúdo", "square"], ["case-03", "Case em destaque 03", "Design \\ Digital", "wide"], ["case-04", "Case em destaque 04", "Live marketing \\ Experiência", "square"]] as const;
export default function Portfolio(){return <main><PageHero index="05" title="Ideias bem pensadas. Trabalho bem-feito." />
  <section className="portfolio-grid">{works.map(([slug,title,categories,ratio],i)=><Link href={`/portfolio/${slug}`} key={slug} className="portfolio-card"><MediaPlaceholder label={`${slug}.mp4 ou .jpg`} ratio={ratio}/><div><small>{String(i+1).padStart(2,"0")} \ 2026</small><h2>{title}</h2><p>{categories}</p><i>↗</i></div></Link>)}</section><Footer /></main>}
