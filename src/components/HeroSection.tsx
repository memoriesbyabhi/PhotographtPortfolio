import logo from '@/assets/logo.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center mandala-bg overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      {/* Logo */}
      <div className="animate-scale-in mb-8">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
          <img src={logo} alt="Memories by Abhi" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Title */}
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
        Memories by Abhi
      </h1>

      {/* Divider */}
      <div className="gold-divider w-48 md:w-72 my-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }} />

      {/* Tagline */}
      <p className="font-heading text-lg md:text-2xl text-muted-foreground italic text-center opacity-0 animate-fade-up px-4" style={{ animationDelay: '0.8s' }}>
        Capturing Timeless Indian Traditions
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-accent opacity-40" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-accent opacity-40" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-accent opacity-40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-accent opacity-40" />
    </section>
  );
};

export default HeroSection;
