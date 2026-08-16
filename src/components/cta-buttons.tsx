import { ArrowRight, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, whatsappUrl } from "@/config/site";

const base =
  "inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-semibold transition duration-200 sm:w-[300px] md:text-base hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-soft";

type Size = "md" | "lg";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={cn("h-5 w-5 shrink-0", className)}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.966 1.164-.198.199-.396.223-.693.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.372.52-.57.174-.198.232-.34.347-.567.116-.226.058-.421-.033-.57-.09-.148-.66-1.607-.904-2.19-.238-.575-.48-.497-.66-.506h-.563c-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.475 0 1.46 1.065 2.87 1.213 3.068.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347Z" />
      <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.142 1.593 5.945L0 24l6.335-1.652a11.98 11.98 0 0 0 5.71 1.447h.006c6.578 0 11.94-5.335 11.943-11.894a11.82 11.82 0 0 0-3.474-8.452ZM12.05 21.785h-.005a9.94 9.94 0 0 1-5.058-1.38l-.363-.215-3.759.98 1.005-3.658-.236-.375a9.86 9.86 0 0 1-1.51-5.244c.002-5.45 4.455-9.885 9.929-9.885 2.652 0 5.145 1.033 7.021 2.906a9.83 9.83 0 0 1 2.909 6.994c-.003 5.45-4.456 9.877-9.933 9.877Z" />
    </svg>
  );
}

export function WhatsAppButton({
  children = "Falar no WhatsApp",
  subtitle,
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
      className={cn(base, "bg-gradient-whatsapp text-whatsapp-foreground shadow-whatsapp", className)}
    >
      <WhatsAppIcon />
      <span className={cn("flex flex-col items-start", subtitle && "leading-tight")}>
        <span>{children}</span>
        {subtitle && <span className="text-xs font-normal opacity-90">{subtitle}</span>}
      </span>
    </a>
  );
}

export function ScheduleButton({
  children = "Agendar consultoria gratuita",
  subtitle,
  className,
}: {
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={site.calendlyUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(base, "bg-gradient-brand text-brand-foreground shadow-brand", className)}
    >
      <CalendarCheck className="h-5 w-5 shrink-0" />
      <span className={cn("flex flex-col items-start", subtitle && "leading-tight")}>
        <span>{children}</span>
        {subtitle && <span className="text-xs font-normal opacity-90">{subtitle}</span>}
      </span>
      <ArrowRight className="hidden h-4 w-4 shrink-0 sm:block" />
    </a>
  );
}

export function GhostButton({
  href,
  children,
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
      className={cn(base, "border border-border bg-card/60 text-foreground backdrop-blur hover:bg-card", className)}
    >
      {children}
    </a>
  );
}
