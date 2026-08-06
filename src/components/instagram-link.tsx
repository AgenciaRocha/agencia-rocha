import { Instagram } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function InstagramLink({
  className,
  withLabel = false,
}: {
  className?: string;
  withLabel?: boolean;
}) {
  return (
    <a
      href={site.instagramUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Instagram da Agência Rocha"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:border-brand-soft/60 hover:text-brand-soft",
        className,
      )}
    >
      <Instagram className="h-4 w-4 shrink-0" />
      {withLabel && <span>Instagram</span>}
    </a>
  );
}
