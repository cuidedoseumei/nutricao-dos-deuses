type Props = {
  id?: string;
  children: React.ReactNode;
  /** tema de fundo */
  tone?: "sand" | "forest" | "white";
  className?: string;
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  sand: "bg-sand text-graphite",
  white: "bg-white text-graphite",
  forest: "bg-forest text-sand",
};

export default function Section({
  id,
  children,
  tone = "sand",
  className = "",
}: Props) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24">
        {children}
      </div>
    </section>
  );
}
