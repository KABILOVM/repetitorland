export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-heading text-xl text-brand-500">Репетитор</span>
        <nav className="hidden md:flex gap-6 text-sm">
          {/* Will be populated in Phase 2 */}
        </nav>
      </div>
    </header>
  );
}
