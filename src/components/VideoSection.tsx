const videos = [
  { id: 'ql3axaH2E-I', title: 'Event Highlight 1' },
  { id: 'OhBj-Eblz6U', title: 'Event Highlight 2' },
  { id: 'BEzRG6xbsjk', title: 'Event Highlight 3' },
  { id: 'XrzyN5NoZbY', title: 'Event Highlight 4' },
  { id: 'nra3cjHduZI', title: 'Event Highlight 5' },
  { id: '3q2yWj5g4OM', title: 'Event Highlight 6' },
  { id: '1gNJiowOrak', title: 'Event Highlight 7' },
  { id: 'oO1VMncEPWE', title: 'Event Highlight 8' },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 md:py-32 px-4 mandala-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-5xl text-primary mb-4">Video Showcase</h2>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Watch our cinematic highlights and relive the magic
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-lg overflow-hidden border border-accent/30 bg-card shadow-md hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-heading text-sm text-primary">{video.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
