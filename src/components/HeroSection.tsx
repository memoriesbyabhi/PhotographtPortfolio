import logo from '@/assets/logo.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import mandala from '@/assets/mandala-ornament.png';
import goldDivider from '@/assets/gold-divider.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating mandala ornaments */}
      <img
        src={mandala}
        alt=""
        className="absolute top-10 left-10 w-32 md:w-48 opacity-10 animate-[spin_60s_linear_infinite]"
      />
      <img
        src={mandala}
        alt=""
        className="absolute bottom-10 right-10 w-32 md:w-48 opacity-10 animate-[spin_60s_linear_infinite_reverse]"
      />
      <img
        src={mandala}
        alt=""
        className="absolute top-1/4 right-0 w-24 md:w-36 opacity-[0.06] translate-x-1/2"
      />
      <img
        src={mandala}
        alt=""
        className="absolute bottom-1/4 left-0 w-24 md:w-36 opacity-[0.06] -translate-x-1/2"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Logo */}
        <div className="animate-scale-in mb-6">
          <div className="w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[hsl(40,55%,55%)] shadow-[0_0_40px_rgba(196,148,61,0.3)]">
            <img src={logo} alt="Memories by Abhi" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white text-center animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.3s' }}>
          Memories by Abhi
        </h1>

        {/* Gold ornamental divider */}
        <div className="my-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <img src={goldDivider} alt="" className="w-48 md:w-72 h-auto" />
        </div>

        {/* Tagline */}
        <p className="font-heading text-lg md:text-2xl text-[hsl(40,55%,75%)] italic text-center opacity-0 animate-fade-up drop-shadow-md" style={{ animationDelay: '0.8s' }}>
          Capturing Timeless Indian Traditions
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }}>
          <a
            href="#galleries"
            className="px-8 py-3 rounded-full border-2 border-[hsl(40,55%,55%)] text-[hsl(40,55%,75%)] font-body text-sm tracking-widest uppercase hover:bg-[hsl(40,55%,55%)] hover:text-[hsl(345,60%,15%)] transition-all duration-500"
          >
            View Galleries
          </a>
          <a
            href="#videos"
            className="px-8 py-3 rounded-full bg-[hsl(40,55%,55%)]/20 border border-[hsl(40,55%,55%)]/40 text-[hsl(40,55%,75%)] font-body text-sm tracking-widest uppercase hover:bg-[hsl(40,55%,55%)]/40 transition-all duration-500"
          >
            Watch Videos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 opacity-0 animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <div className="w-6 h-10 border-2 border-[hsl(40,55%,55%)]/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[hsl(40,55%,55%)] rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Decorative gold corners */}
      <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-[hsl(40,55%,55%)]/30 z-10" />
      <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[hsl(40,55%,55%)]/30 z-10" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-[hsl(40,55%,55%)]/30 z-10" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-[hsl(40,55%,55%)]/30 z-10" />

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
