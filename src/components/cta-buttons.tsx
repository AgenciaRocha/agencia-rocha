import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, whatsappUrl } from "@/config/site";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-soft";

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
} as const;

type Size = keyof typeof sizes;

export function WhatsAppButton({
  children = "Falar no WhatsApp",
  subtitle,
  size = "lg",
  className,
}: {
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        base,
        sizes[size],
        "bg-gradient-whatsapp text-whatsapp-foreground shadow-whatsapp",
        className,
      )}
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className={cn("flex flex-col items-start", subtitle && "leading-tight")}>
        <span>{children}</span>
        {subtitle && <span className="text-xs font-normal opacity-90">{subtitle}</span>}
      </span>
    </a>
  );
}

export function ScheduleButton({
  children = "Agendar consultoria gratuita",
  size = "lg",
  className,
}: {
  children?: React.ReactNode;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={site.calendlyUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        base,
        sizes[size],
        "bg-gradient-brand text-brand-foreground shadow-brand",
        className,
      )}
    >
      <CalendarCheck className="h-5 w-5 shrink-0" />
      <span>{children}</span>
      <ArrowRight className="hidden h-4 w-4 shrink-0 sm:block" />
    </a>
  );
}

export function GhostButton({
  href,
  children,
  size = "lg",
  className,
}: {
  href: string;
  children: React.ReactNode;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        base,
        sizes[size],
        "border border-border bg-card/60 text-foreground backdrop-blur hover:bg-card",
        className,
      )}
    >
      {children}
    </a>
  );
}
