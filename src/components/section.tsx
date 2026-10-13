export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}
