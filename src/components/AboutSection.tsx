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
          <p className="font-heading text-xl md:text-2xl text-primary italic mb-6">
            Every frame holds a heartbeat.
          </p>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            At <span className="text-primary font-medium">Memories by Abhi</span>, we don't just photograph moments. We preserve the way your mother smiled when she saw you walk in. The quiet glance between two people who chose each other. The details you were too present to notice.
          </p>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            From sacred Indian celebrations to intimate American milestones, every image is crafted with intention, delivered with care, and yours to hold within 48 hours.
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
