"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["Quem somos", "/quem-somos"], ["História", "/historia"], ["Serviços", "/servicos"],
  ["Clientes", "/clientes"], ["Portfólio", "/portfolio"], ["Contato", "/contato"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="COM C — página inicial">COM<span>\</span>C</Link>
      <button className="menu-trigger" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="main-menu"><span>{open ? "Fechar" : "Menu"}</span><b aria-hidden="true">\</b></button>
      <nav id="main-menu" className={open ? "nav-panel is-open" : "nav-panel"} aria-label="Navegação principal">
        <div className="nav-index">COM\C <span>©2026</span></div>
        <div className="nav-list">{navigation.map(([label, href], index) => <Link key={href} href={href} className={pathname === href ? "active" : ""}><small>{String(index + 1).padStart(2, "0")}</small><span>{label}</span><i aria-hidden="true">↗</i></Link>)}</div>
        <div className="nav-locations">Manaus <b>\</b> Campinas</div>
      </nav>
    </header>
    <div className="page-enter" key={pathname}>{children}</div>
    <Link href="/contato" className="kinetic-mark" aria-label="Fale com a COM C"><span className="kinetic-slash">\</span><span className="kinetic-c">C</span><span className="kinetic-copy">Conceito.<br/>Comunicação.<br/>Criatividade.</span></Link>
  </>;
}
