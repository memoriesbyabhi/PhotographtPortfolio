import { Camera, Heart, Home, Sparkles, Star } from 'lucide-react';

const services = [
  { icon: Heart, label: 'Weddings' },
  { icon: Sparkles, label: 'Half Saree Ceremonies' },
  { icon: Home, label: 'Housewarming' },
  { icon: Star, label: 'Traditional Events' },
  { icon: Camera, label: 'American Events' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">About Us</h2>
          <div className="gold-divider w-32 mx-auto mb-8" />
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            At <span className="text-primary font-medium">Memories by Abhi</span>, we believe every moment tells a story. 
            Specializing in Indian traditional celebrations and American events, we bring an artistic eye 
            and heartfelt passion to every frame — preserving your most cherished memories for generations to come.
          </p>
        </div>

        {/* Services */}
        <div className="animate-on-scroll">
          <h3 className="font-heading text-xl md:text-2xl text-primary mb-8">Our Services</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-accent/40 bg-accent/10 hover:bg-accent/20 transition-colors duration-300"
              >
                <service.icon className="w-4 h-4 text-accent" />
                <span className="font-body text-sm font-medium text-foreground">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
