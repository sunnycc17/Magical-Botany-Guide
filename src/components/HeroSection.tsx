// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-amber-100 overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./preview.png')", // replace with your image
          backgroundAttachment: "fixed", // <-- parallax effect
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 p-6 max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold cinzel-regular drop-shadow-md">
          Welcome to the Magical Botany Guide
        </h1>
        <p className="mt-4 text-lg sm:text-xl cormorant text-amber-200/80">
          Discover the secrets of plants, herbs, and nature’s hidden magic 🌱
        </p>

        {/* Scroll button */}
        <a
          href="#plants"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-amber-600/80 hover:bg-amber-500 text-black font-semibold shadow-lg transition"
        >
          Explore Plants
        </a>
      </div>
    </section>
  );
}
