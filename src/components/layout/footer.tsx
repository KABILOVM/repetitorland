export function Footer() {
  return (
    <footer className="bg-brand-900 text-white py-12">
      <div className="container mx-auto px-4 text-center text-sm opacity-70">
        &copy; {new Date().getFullYear()} Репетитор
      </div>
    </footer>
  );
}
