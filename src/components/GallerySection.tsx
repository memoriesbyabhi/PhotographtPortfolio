import { ExternalLink } from 'lucide-react';

const galleries = [
  {
    title: 'Wedding Moments',
    description: 'Timeless captures of sacred unions and joyous celebrations',
    url: 'https://adobe.ly/3QWMpKs',
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    title: 'Traditional Ceremonies',
    description: 'The beauty of half saree functions, housewarming & cultural rituals',
    url: 'https://adobe.ly/40e9ZW6',
    gradient: 'from-accent/20 to-secondary/20',
  },
  {
    title: 'Celebration & Events',
    description: 'Vibrant festivities captured with an artistic eye',
    url: 'https://adobe.ly/47vn53P',
    gradient: 'from-secondary/20 to-primary/20',
  },
];

const GallerySection = () => {
  return (
    <section id="galleries" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">Photo Galleries</h2>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Browse through curated collections of our finest work
          </p>
        </div>

        {/* Gallery cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <a
              key={index}
              href={gallery.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll group"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={`relative bg-gradient-to-br ${gallery.gradient} rounded-lg overflow-hidden border border-accent/30 p-8 md:p-10 text-center transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2`}>
                {/* Decorative frame */}
                <div className="absolute inset-3 border border-accent/20 rounded-md pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="font-heading text-xl md:text-2xl text-primary mb-3">{gallery.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 font-body">{gallery.description}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm group-hover:gap-3 transition-all">
                    View Gallery <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
