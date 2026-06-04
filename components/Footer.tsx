export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-black px-6 pb-8 pt-12 md:px-12">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-6">
        <div className="text-[13px] text-muted">
          © {year} Propuesta personal para Joan
        </div>
        <div className="text-[12px] uppercase tracking-[0.06em] text-muted">
          Hecho por Eduardo — a medida
        </div>
      </div>
    </footer>
  );
}
