export default function Footer() {
  return (
    <footer className="bg-black/80 py-10 mt-12 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 cormorant text-amber-100">
        {/* Section 1 - Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 cinzel-regular text-amber-200">
            Magical Botany Guide
          </h3>
          <p className="text-sm leading-relaxed text-amber-100/80">
            Explore the enchanted world of plants.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-200">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-amber-100/80">
            <li>
              <a
                href="#"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sunnycc17/Magical-Botany-Guide"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Credits */}
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-3 text-amber-200">Credits</h3>
          <p className="text-sm text-amber-100/80">
            © {new Date().getFullYear()} Magical Botany Guide. By Sunny |
            powered by iNaturalist API 🌿
          </p>
        </div>
      </div>
    </footer>
  );
}
