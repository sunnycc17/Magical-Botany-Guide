// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
      

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6">
        <h1 className="text-5xl sm:text-6xl font-bold cinzel-regular drop-shadow-md text-emerald-100 pt-21">
          Welcome to the Magical Botany Guide
        </h1>

        <p className="text-xl sm:text-2xl cormorant max-w-xl text-emerald-200/90">
          Explore the secrets of mystical plants, herbs, and enchanted forests.
        </p>

        <p className="text-lg sm:text-xl cormorant max-w-lg text-emerald-100/75">
          Curated guides and botanical insights for lovers of dark fantasy and magic.
        </p>

        {/* Scroll button */}
        <a
          href="#plants"
          className="mt-8 inline-block px-14 py-5 rounded-full
            bg-gradient-to-r from-[#4AC8FF] via-[#00F0FF] to-[#72D9FF]
            text-stone-900 font-bold tracking-wide shadow-lg cinzel-bold
            transition-all duration-300 ease-in-out
            hover:shadow-[0_0_25px_rgba(74,200,255,0.7)]
            active:scale-95 active:shadow-[0_0_15px_rgba(74,200,255,0.5)]"
        >
          Explore Plants
        </a>
      </div>
    </section>
  );
}
