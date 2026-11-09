"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["Quem somos", "/quem-somos"], ["História", "/historia"], ["Serviços", "/servicos"],
  ["Clientes", "/clientes"], ["Portfólio", "/portfolio"], ["Contato", "/contato"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // O menu fica "aberto" só na rota em que foi aberto: ao navegar, fecha sem precisar de efeito.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (value: boolean) => setOpenAt(value ? pathname : null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpenAt(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);
  return <>
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="COM C — página inicial">COM<span>\</span>C</Link>
      <button className="menu-trigger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-menu"><span>{open ? "Fechar" : "Menu"}</span><b aria-hidden="true">\</b></button>
      <nav id="main-menu" className={open ? "nav-panel is-open" : "nav-panel"} aria-label="Navegação principal">
        <div className="nav-index">COM\C <span>©2026</span></div>
        <div className="nav-list">{navigation.map(([label, href], index) => <Link key={href} href={href} className={pathname === href ? "active" : ""}><small>{String(index + 1).padStart(2, "0")}</small><span>{label}</span><i aria-hidden="true">↗</i></Link>)}</div>
        <div className="nav-locations">Manaus <b>\</b> Campinas</div>
      </nav>
    </header>
    <div className="page-enter" key={pathname}>{children}</div>
    <Link href="/contato" className="kinetic-mark" aria-label="Fale com a COM C"><svg className="kinetic-ring" viewBox="0 0 100 100" aria-hidden="true"><defs><path id="ring-path" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/></defs><text><textPath href="#ring-path">Conceito · Comunicação · Criatividade ·</textPath></text></svg><span className="kinetic-c">\C</span></Link>
  </>;
}
