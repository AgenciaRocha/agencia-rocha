import { createFileRoute } from "@tanstack/react-router";
import {
  Megaphone,
  MapPin,
  BarChart3,
  Globe,
  Palette,
  PenLine,
  Bot,
  Check,
  Target,
  Users,
  Rocket,
  LineChart,
  CalendarCheck,
  TrendingUp,
  Search,
  Youtube,
  Tag,
  PieChart,
} from "lucide-react";

import logoAgr from "@/assets/logo-agr.jpg.asset.json";
import especialista from "@/assets/especialista-agr.png.asset.json";
import { site } from "@/config/site";
import { WhatsAppButton, ScheduleButton } from "@/components/cta-buttons";
import { InstagramLink } from "@/components/instagram-link";

const TITLE = "Agência Rocha — Tráfego Pago, Google Ads e Meta Ads que Vendem";
const DESCRIPTION =
  "Atraia mais clientes e aumente suas vendas com gestão profissional de tráfego pago, Google Meu Negócio, landing pages e IA no WhatsApp. Agende uma consultoria gratuita.";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://agencia-rocha.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://agencia-rocha.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          description: DESCRIPTION,
          url: "https://agencia-rocha.lovable.app/",
          sameAs: [site.instagramUrl],
          areaServed: "BR",
        }),
      },
    ],
  }),
});

const pillars = [
  { icon: Target, label: "Estratégias personalizadas" },
  { icon: Users, label: "Mais leads qualificados" },
  { icon: LineChart, label: "Relatórios transparentes" },
  { icon: Rocket, label: "Otimização contínua" },
];

const platformItems = [
  { icon: Search, label: "Google Ads" },
  { icon: Megaphone, label: "Meta Ads" },
  { icon: Youtube, label: "YouTube Ads" },
  { icon: PieChart, label: "GA4" },
  { icon: Tag, label: "GTM" },
];

const services = [
  {
    icon: Megaphone,
    title: "Gestão de Tráfego Pago",
    tagline: "Google Ads + Meta Ads",
    description:
      "Pesquisa, display e YouTube para alcançar quem já procura por você. Instagram e Facebook para descoberta e conversão direta no WhatsApp.",
    highlights: ["Google Ads", "Meta Ads", "Conversão no WhatsApp"],
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    tagline: "SEO local no topo do Maps",
    description:
      "Criação, configuração e otimização do seu perfil para que o cliente encontre você primeiro na sua região.",
    highlights: ["Criação e verificação", "Otimização SEO local", "Ranking no Maps"],
  },
  {
    icon: BarChart3,
    title: "Rastreamento GTM + GA4",
    tagline: "Dados que otimizam campanhas",
    description:
      "Instalação completa do Pixel da Meta e tags do Google via GTM, com públicos de remarketing para turbinar seus anúncios.",
    highlights: ["Pixel Meta", "GA4 + GTM", "Remarketing"],
  },
  {
    icon: Globe,
    title: "Criação de Landing Pages",
    tagline: "Autoridade e conversão",
    description:
      "Páginas profissionais focadas em performance de vendas, que aumentam sua autoridade digital e transformam visitantes em clientes.",
    highlights: ["Design profissional", "Foco em conversão", "Alta performance"],
  },
  {
    icon: Palette,
    title: "Criativos e Edição de Vídeo",
    tagline: "Peças que vendem",
    description:
      "Bons criativos são a chave de um bom anúncio. Produzimos peças visuais que atraem clientes qualificados e geram resultado real.",
    highlights: ["Imagens estáticas", "Vídeos para reels", "Testes A/B"],
  },
  {
    icon: PenLine,
    title: "Copy para Anúncios",
    tagline: "Textos que convertem",
    description:
      "Títulos e descrições estratégicos para suas campanhas — pensados para gerar cliques qualificados e vendas.",
    highlights: ["Headlines", "Descrições persuasivas", "CTA otimizado"],
  },
];

const steps = [
  {
    step: "01",
    title: "Diagnóstico gratuito",
    text: "Analisamos seu negócio, seu público e o que já foi feito em mídia paga para encontrar as oportunidades reais.",
  },
  {
    step: "02",
    title: "Estratégia e estrutura",
    text: "Montamos campanhas, criativos, copy, rastreamento e páginas de conversão alinhados à sua meta de vendas.",
  },
  {
    step: "03",
    title: "Otimização e escala",
    text: "Acompanhamos os números de perto, cortamos o que não performa e escalamos o que traz retorno.",
  },
];

const aiFeatures = [
  "Atendimento automatizado 24h",
  "Organização de pedidos e clientes",
  "Agendamentos automáticos",
  "Encaminhamento para atendentes humanos",
  "Painel operacional em tempo real",
  "Histórico completo das conversas",
  "Relatórios da operação",
  "Integração com processos comerciais",
];

const faqs = [
  {
    q: "Qual o investimento mínimo em anúncios?",
    a: "Definimos junto com você no diagnóstico. O importante é que a verba seja suficiente para gerar dados e otimizar as campanhas com consistência.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "As primeiras oportunidades geralmente aparecem nos primeiros dias. A partir do primeiro mês temos dados suficientes para otimizar e escalar.",
  },
  {
    q: "Vocês atendem meu segmento?",
    a: "Atendemos negócios locais, serviços, e-commerces e infoprodutos. No diagnóstico avaliamos se faz sentido para o seu caso.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={site.name}>
            <img
              src={logoAgr.url}
              alt={`${site.name} — logo`}
              width={128}
              height={128}
              className="h-12 w-12 shrink-0 rounded-xl object-cover md:h-14 md:w-14"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-bold md:text-lg">
                Agência Rocha
              </span>
              <span className="block truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
                {site.tagline}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2 md:gap-4">
            <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
              <a href="#servicos" className="transition hover:text-foreground">Serviços</a>
              <a href="#processo" className="transition hover:text-foreground">Como funciona</a>
              <a href="#ia" className="transition hover:text-foreground">IA no WhatsApp</a>
              <a href="#faq" className="transition hover:text-foreground">Dúvidas</a>
            </nav>
            <InstagramLink className="px-2.5" />
            <ScheduleButton size="md" className="hidden sm:inline-flex">
              Agendar
            </ScheduleButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-20 md:pt-24">
        {/* Fundo azul-marinho com glow */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-brand/25 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--brand-soft) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse at 70% 40%, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 70% 40%, black, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 md:px-6">
          <div className="relative grid items-end gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            {/* Coluna de texto */}
            <div className="relative z-10 animate-float-up pt-4 md:pt-10">
              <h1 className="font-impact text-[9.6vw] uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-[4.6rem]">
                <span className="block whitespace-nowrap">Atraia mais</span>
                <span className="block whitespace-nowrap">clientes e</span>
                <span className="block whitespace-nowrap">aumente suas</span>
                <span className="block whitespace-nowrap text-brand-soft">vendas.</span>
              </h1>

              <p className="mt-5 max-w-[60%] text-sm leading-relaxed text-foreground/85 sm:max-w-md sm:text-base md:text-lg">
                Estratégias de tráfego pago que atraem leads qualificados e aumentam suas vendas.
              </p>


              <div className="mt-6 h-px w-40 bg-gradient-to-r from-brand-soft/80 to-transparent" />

              {/* Bloco CTA consultoria */}
              <div className="mt-7 flex items-start gap-4 rounded-2xl border border-brand-soft/35 bg-card/50 p-5 backdrop-blur">
                <CalendarCheck className="mt-0.5 h-8 w-8 shrink-0 text-brand-soft" strokeWidth={1.6} />
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold uppercase tracking-wide md:text-base">
                    Faça sua <span className="text-brand-soft">consultoria gratuita.</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Vamos analisar seu negócio e encontrar as melhores oportunidades.
                  </p>
                </div>
              </div>

              {/* CTAs funcionais */}
              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppButton
                  subtitle="Atendimento rápido"
                  className="animate-pulse-whatsapp hover:animate-none"
                >
                  FALAR NO WHATSAPP
                </WhatsAppButton>
                <ScheduleButton
                  subtitle="Gratuita e sem compromisso"
                  className="animate-pulse-brand hover:animate-none"
                >
                  AGENDAR CONSULTORIA
                </ScheduleButton>
              </div>
            </div>

            {/* Coluna do profissional */}
            <div className="pointer-events-none absolute right-[-10%] top-8 z-0 h-[290px] w-[54%] sm:h-[420px] lg:static lg:mt-0 lg:h-[600px] lg:w-auto">

              <div className="absolute bottom-0 right-0 h-[70%] w-[70%] rounded-full bg-brand/30 blur-[90px]" />
              <TrendingUp
                className="absolute right-2 top-4 h-24 w-24 text-brand-soft/60 lg:h-36 lg:w-36"
                strokeWidth={1.2}
              />
              <div className="absolute bottom-6 right-4 flex items-end gap-2 opacity-70">
                {[28, 48, 72, 100].map((h) => (
                  <span
                    key={h}
                    className="w-4 rounded-t-sm bg-gradient-brand lg:w-6"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <img
                src={especialista.url}
                alt="Especialista em tráfego pago da Agência Rocha"
                width={476}
                height={800}
                className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_25px_60px_oklch(0.16_0.045_264/0.9)]"
              />
            </div>
          </div>

          {/* Faixa de plataformas */}
          <div className="relative z-10 mt-8 grid grid-cols-3 divide-x divide-border/50 rounded-2xl border border-border/50 bg-card/40 py-4 backdrop-blur sm:grid-cols-5 md:mt-10">
            {platformItems.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-2 px-2 py-2">
                <p.icon className="h-6 w-6 text-brand-soft" strokeWidth={1.6} />
                <span className="text-center text-[11px] font-medium text-muted-foreground md:text-sm">
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          <ul className="relative z-10 mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
            {pillars.map((p) => (
              <li
                key={p.label}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur"
              >
                <p.icon className="h-5 w-5 shrink-0 text-brand-soft" />
                <span className="min-w-0 text-sm font-medium">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Services */}
      <section id="servicos" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Nossos serviços
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Uma operação completa para escalar suas vendas.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Estratégia, mídia, criativos e automação integrados. Você foca no seu negócio, a gente cuida do resto.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-brand-soft/60 hover:shadow-brand"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-25" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-brand">
                    <s.icon className="h-6 w-6 text-brand-foreground" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-soft">{s.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <ul className="mt-5 space-y-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-foreground/90">
                        <Check className="h-4 w-4 shrink-0 text-brand-soft" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ScheduleButton className="w-full sm:w-auto">Quero uma estratégia para meu negócio</ScheduleButton>
            <WhatsAppButton size="md" className="w-full sm:w-auto">Tirar dúvidas no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="border-y border-border/50 bg-card/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
              Como funciona
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Do diagnóstico à escala em 3 etapas.</h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.step} className="rounded-2xl border border-border bg-background/60 p-7">
                <span className="font-display text-4xl font-bold text-gradient-brand">{s.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AI WhatsApp */}
      <section id="ia" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-soft/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
                <Bot className="h-3.5 w-3.5" />
                Novo · IA
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] md:text-5xl">
                Assistente de <span className="text-gradient-brand">IA para WhatsApp</span>
              </h2>
              <p className="mt-5 text-muted-foreground md:text-lg">
                Transformamos o WhatsApp da sua empresa em uma central completa de{" "}
                <strong className="font-semibold text-foreground">atendimento, vendas e relacionamento</strong>,
                tudo personalizado para a sua operação e usando o WhatsApp Oficial.
              </p>
              <p className="mt-4 text-muted-foreground">
                <strong className="text-foreground">Resultado:</strong> menos tempo em tarefas repetitivas, mais
                controle da operação e equipe focada no que gera receita.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton className="w-full sm:w-auto">Quero automatizar meu WhatsApp</WhatsAppButton>
                <ScheduleButton size="md" className="w-full sm:w-auto">Agendar demonstração</ScheduleButton>
              </div>
            </div>

            <div className="relative rounded-3xl border border-border bg-card/80 p-6 backdrop-blur shadow-glow md:p-8">
              <div className="absolute -right-3 -top-3 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-brand-foreground shadow-brand">
                WhatsApp Oficial
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {aiFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-xl bg-secondary/60 p-4 text-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                      <Check className="h-3 w-3 text-brand-foreground" />
                    </span>
                    <span className="min-w-0 text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border/50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
          <div className="mt-8 divide-y divide-border/60 overflow-hidden rounded-2xl border border-border bg-card">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {f.q}
                    <span className="text-brand-soft transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center md:p-16">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gradient-brand opacity-25 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold leading-[1.08] md:text-5xl">
                Pronto para <span className="text-gradient-brand">escalar</span> de verdade?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
                Agende uma consultoria gratuita e receba um diagnóstico da sua operação digital.
                Sem enrolação — só o que vai gerar resultado.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ScheduleButton className="w-full sm:w-auto" />
                <WhatsAppButton className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-sm text-muted-foreground md:flex-row md:justify-between md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logoAgr.url}
              alt={`${site.name} — logo`}
              width={96}
              height={96}
              loading="lazy"
              className="h-12 w-12 shrink-0 rounded-xl object-cover"
            />
            <div className="min-w-0">
              <p className="font-display font-semibold text-foreground">{site.name}</p>
              <p className="text-xs uppercase tracking-[0.18em]">{site.tagline}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <InstagramLink withLabel />
            <ScheduleButton size="md">Agendar</ScheduleButton>
          </div>
          <p className="text-center text-xs md:text-right">
            © {new Date().getFullYear()} {site.name}. Marketing digital e automação.
          </p>
        </div>
      </footer>
    </div>
  );
}
