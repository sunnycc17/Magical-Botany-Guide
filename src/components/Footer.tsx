export default function Footer() {
  return (
    <footer className="bg-black/80 py-10 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 cormorant text-[#a6d9ee]">
        {/* Section 1 - Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 cinzel-regular text-[#a6d9ee]">
            Magical Botany Guide
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            Explore the enchanted world of plants.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#a6d9ee]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a
                href="#about"
                className="hover:text-[#a6d9ee]/80 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#a6d9ee]/80 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sunnycc17/Magical-Botany-Guide"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#a6d9ee]/80 transition-colors duration-300"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Credits */}
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-3 text-[#a6d9ee]">Credits</h3>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Magical Botany Guide |
            <i className="ml-2 hover:underline">
              <a target="_blank" href="https://github.com/sunnycc17">
                By Sunny
              </a>
            </i>
          </p>
        </div>
      </div>
    </footer>
  );
}
