export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.3em] text-brand/70 mb-4">{eyebrow}</div>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-brand text-balance leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
