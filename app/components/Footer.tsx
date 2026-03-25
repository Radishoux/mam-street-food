export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-stone-500 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Mam Street Food</span>. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-white transition-colors">À propos</a>
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#location" className="hover:text-white transition-colors">Nous trouver</a>
        </div>
      </div>
    </footer>
  );
}
