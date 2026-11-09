export type Work = { slug: string; title: string; categories: string; ratio: "wide" | "square" | "portrait" };

export const works: readonly Work[] = [
  { slug: "case-01", title: "Case em destaque 01", categories: "Branding \\ Campanha", ratio: "portrait" },
  { slug: "case-02", title: "Case em destaque 02", categories: "Audiovisual \\ Conteúdo", ratio: "square" },
  { slug: "case-03", title: "Case em destaque 03", categories: "Design \\ Digital", ratio: "wide" },
  { slug: "case-04", title: "Case em destaque 04", categories: "Live marketing \\ Experiência", ratio: "square" },
];

export const findWork = (slug: string) => works.find((work) => work.slug === slug);
