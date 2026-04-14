export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-heading text-brand-500">Репетитор</h1>
      <p className="text-text-secondary font-body mt-2">
        Tailwind v4 brand theme test page
      </p>
      <div className="flex gap-3 mt-4">
        <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center text-xs">50</div>
        <div className="w-16 h-16 rounded-xl bg-brand-100 flex items-center justify-center text-xs">100</div>
        <div className="w-16 h-16 rounded-xl bg-brand-300 flex items-center justify-center text-xs text-white">300</div>
        <div className="w-16 h-16 rounded-xl bg-brand-500 flex items-center justify-center text-xs text-white">500</div>
        <div className="w-16 h-16 rounded-xl bg-brand-700 flex items-center justify-center text-xs text-white">700</div>
        <div className="w-16 h-16 rounded-xl bg-brand-900 flex items-center justify-center text-xs text-white">900</div>
      </div>
    </div>
  );
}
