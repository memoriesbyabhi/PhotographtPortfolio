import { ExternalLink } from 'lucide-react';
import galleryWedding from '@/assets/gallery-wedding.jpg';
import galleryCeremony from '@/assets/gallery-ceremony.jpg';
import galleryEvents from '@/assets/gallery-events.jpg';

const galleries = [
  {
    title: 'Wedding Moments',
    description: 'Timeless captures of sacred unions and joyous celebrations',
    url: 'https://adobe.ly/3QWMpKs',
    image: galleryWedding,
  },
  {
    title: 'Traditional Ceremonies',
    description: 'The beauty of half saree functions, housewarming & cultural rituals',
    url: 'https://adobe.ly/40e9ZW6',
    image: galleryCeremony,
  },
  {
    title: 'Celebration & Events',
    description: 'Vibrant festivities captured with an artistic eye',
    url: 'https://adobe.ly/47vn53P',
    image: galleryEvents,
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

        {/* Gallery cards with images */}
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
              <div className="relative rounded-lg overflow-hidden border border-accent/30 shadow-md hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-500 aspect-[3/4]">
                {/* Background image */}
                <img
                  src={gallery.image}
                  alt={gallery.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-xl md:text-2xl mb-2">{gallery.title}</h3>
                  <p className="text-white/70 text-sm mb-4 font-body">{gallery.description}</p>
                  <span className="inline-flex items-center gap-2 text-[hsl(40,55%,65%)] font-body font-medium text-sm group-hover:gap-3 transition-all">
                    View Gallery <ExternalLink className="w-4 h-4" />
                  </span>
                </div>

                {/* Decorative corner frame */}
                <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-white/30" />
                <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-white/30" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
