import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "./components/site-shell";

export const metadata: Metadata = {
  title: { default: "COM\\C — Conceito. Comunicação. Criatividade.", template: "%s — COM\\C" },
  description: "Agência full service com presença em Manaus e Campinas. Conceito. Comunicação. Criatividade.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><SiteShell>{children}</SiteShell></body></html>;
}
