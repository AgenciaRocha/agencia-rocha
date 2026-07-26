import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import logoRocha from "@/assets/logo-rocha.png";
import bannerFounder from "@/assets/banner-founder.webp.asset.json";
import {
  Megaphone,
  MapPin,
  BarChart3,
  Globe,
  Palette,
  PenLine,
  Bot,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP_URL = "https://wa.me/?text=Olá!%20Quero%20conhecer%20os%20serviços%20da%20Agência%20Rocha";

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
    tagline: "SEO Local no topo do Maps",
    description:
      "Criação, configuração e otimização da sua conta para que o cliente encontre você primeiro quando estiver procurando na sua região.",
    highlights: ["Criação e verificação", "Otimização SEO local", "Ranking no Maps"],
  },
  {
    icon: BarChart3,
    title: "Rastreamento GTM + GA4",
    tagline: "Dados que otimizam campanhas",
    description:
      "Instalação completa do Pixel do Meta e TAGs do Google via GTM, com públicos de remarketing para turbinar seus anúncios.",
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

const aiFeatures = [
  "Atendimento automatizado 24h",
  "Organização de pedidos e clientes",
  "Agendamentos automáticos",
  "Encaminhamento para atendentes humanos",
  "Painel operacional em tempo real",
  "Histórico completo das conversas",
  "Relatórios e acompanhamento da operação",
  "Integração com processos comerciais",
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 h-28 md:h-32 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoRocha} alt="Agência Rocha" className="h-20 md:h-24 w-auto" width={192} height={192} />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#ia" className="hover:text-foreground transition">IA no WhatsApp</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-ember px-4 py-2 text-sm font-semibold text-primary-foreground shadow-ember hover:opacity-90 transition"
          >
            Falar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="animate-float-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
                Marketing digital com foco em resultado
              </span>
              <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
                Cresça de verdade{" "}
                <span className="text-gradient-ember">no digital.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
                Somos especialistas em <strong className="text-foreground font-semibold">tráfego pago</strong>,{" "}
                <strong className="text-foreground font-semibold">automação</strong> e{" "}
                <strong className="text-foreground font-semibold">IA no WhatsApp</strong> para empresas
                que querem escalar com previsibilidade.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-ember px-6 py-3 text-base font-semibold text-primary-foreground shadow-ember hover:opacity-90 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  Solicitar diagnóstico gratuito
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-base font-semibold text-foreground backdrop-blur hover:bg-card transition"
                >
                  Ver serviços
                </a>
              </div>

              <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { k: "+300%", v: "ROAS médio" },
                  { k: "24/7", v: "Atendimento com IA" },
                  { k: "100%", v: "Foco em resultado" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="font-display text-3xl md:text-4xl font-bold text-gradient-ember">{s.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative animate-float-up order-first lg:order-last">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-ember opacity-30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-ember">
                <img
                  src={bannerFounder.url}
                  alt="Fundador da Agência Rocha"
                  width={1080}
                  height={1080}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ember font-semibold">Fundador</p>
                    <p className="font-display font-semibold text-foreground">Agência Rocha</p>
                  </div>
                  <span className="rounded-full bg-gradient-ember px-3 py-1 text-xs font-bold text-primary-foreground shadow-ember">
                    Especialistas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-ember uppercase tracking-widest">Nossos serviços</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Uma operação completa para escalar suas vendas.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Estratégia, mídia, criativos e automação integrados. Você foca no seu negócio, a gente cuida do resto.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-ember/60 hover:shadow-ember"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-ember opacity-0 blur-3xl transition group-hover:opacity-20" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-ember shadow-ember">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-ember font-medium">{s.tagline}</p>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  <ul className="mt-6 space-y-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-foreground/90">
                        <Check className="h-4 w-4 text-ember" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI WhatsApp — featured */}
      <section id="ia" className="relative py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-xs font-semibold text-ember uppercase tracking-widest">
                <Bot className="h-3.5 w-3.5" />
                Novo · IA
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">
                Assistente de <span className="text-gradient-ember">IA para WhatsApp</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Transformamos o WhatsApp da sua empresa em uma central completa de{" "}
                <strong className="text-foreground font-semibold">atendimento, vendas e relacionamento</strong>.
                Tudo personalizado para a realidade do seu negócio, usando o WhatsApp Oficial.
              </p>
              <p className="mt-4 text-muted-foreground">
                <strong className="text-foreground">Resultado:</strong> menos tempo em tarefas repetitivas, mais
                controle da operação e equipe focada no que realmente gera resultado.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-ember px-6 py-3 text-base font-semibold text-primary-foreground shadow-ember hover:opacity-90 transition"
              >
                <MessageCircle className="h-5 w-5" />
                Quero automatizar meu WhatsApp
              </a>
            </div>

            <div className="relative rounded-3xl border border-border bg-card/80 p-8 backdrop-blur shadow-glow">
              <div className="absolute -top-3 -right-3 rounded-full bg-gradient-ember px-3 py-1 text-xs font-bold text-primary-foreground shadow-ember">
                WhatsApp Oficial
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {aiFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-xl bg-secondary/60 p-4 text-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-ember">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 text-center">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-gradient-ember opacity-25 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
                Pronto para <span className="text-gradient-ember">escalar</span> de verdade?
              </h2>
              <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
                Fale com nosso time e receba um diagnóstico gratuito da sua operação digital.
                Sem enrolação — só o que vai gerar resultado.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-ember px-8 py-4 text-lg font-semibold text-primary-foreground shadow-ember hover:opacity-90 transition"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com um especialista
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <img src={logoRocha} alt="Agência Rocha" className="h-16 w-auto" width={128} height={128} loading="lazy" />
          <p>© {new Date().getFullYear()} Agência Rocha. Marketing digital e automação.</p>
        </div>
      </footer>
    </div>
  );
}
