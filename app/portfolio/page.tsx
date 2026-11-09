import Link from "next/link";
import { Footer, MediaPlaceholder, PageHero } from "../components/shared";
import { works } from "../data/works";
export const metadata = { title: "Portfólio" };
export default function Portfolio(){return <main><PageHero index="05" title="Ideias bem pensadas. Trabalho bem-feito." />
  <section className="portfolio-grid">{works.map(({slug,title,categories,ratio},i)=><Link href={`/portfolio/${slug}`} key={slug} className="portfolio-card"><MediaPlaceholder label={`${slug}.mp4 ou .jpg`} ratio={ratio}/><div><small>{String(i+1).padStart(2,"0")} \ 2026</small><h2>{title}</h2><p>{categories}</p><i>↗</i></div></Link>)}</section><Footer /></main>}
