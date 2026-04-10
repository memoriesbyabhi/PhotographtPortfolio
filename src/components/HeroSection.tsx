import logo from '@/assets/logo.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import mandala from '@/assets/mandala-ornament.png';
import goldDivider from '@/assets/gold-divider.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-screen background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Subtle mandala accents */}
      <img src={mandala} alt="" className="absolute top-10 left-10 w-28 md:w-40 opacity-[0.07] animate-[spin_80s_linear_infinite]" />
      <img src={mandala} alt="" className="absolute bottom-10 right-10 w-28 md:w-40 opacity-[0.07] animate-[spin_80s_linear_infinite_reverse]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Logo */}
        <div className="animate-scale-in mb-6">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-[3px] border-[hsl(40,55%,55%)] shadow-[0_0_40px_rgba(196,148,61,0.25)]">
            <img src={logo} alt="Memories by Abhi" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white text-center animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.3s' }}>
          Memories by Abhi
        </h1>

        {/* Ornamental divider */}
        <div className="my-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <img src={goldDivider} alt="" className="w-40 md:w-56 h-auto" />
        </div>

        {/* Tagline */}
        <p className="font-heading text-base md:text-xl text-white/80 italic text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          Capturing Timeless Indian Traditions
        </p>

        {/* Subtitle — photography focus */}
        <p className="font-body text-xs md:text-sm text-white/50 tracking-[0.3em] uppercase mt-3 opacity-0 animate-fade-up" style={{ animationDelay: '1s' }}>
          Photography &bull; Videography &bull; Storytelling
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <a
            href="#galleries"
            className="px-8 py-3 rounded-full border-2 border-[hsl(40,55%,55%)] text-white font-body text-sm tracking-widest uppercase hover:bg-[hsl(40,55%,55%)] hover:text-[hsl(345,60%,15%)] transition-all duration-500"
          >
            View Galleries
          </a>
          <a
            href="#videos"
            className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-body text-sm tracking-widest uppercase hover:bg-white/20 transition-all duration-500"
          >
            Watch Videos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 opacity-0 animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Gold corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-[hsl(40,55%,55%)]/25 z-10" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-[hsl(40,55%,55%)]/25 z-10" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-[hsl(40,55%,55%)]/25 z-10" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-[hsl(40,55%,55%)]/25 z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
