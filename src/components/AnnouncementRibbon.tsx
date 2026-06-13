const AnnouncementRibbon = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-[38px] px-4"
      style={{
        background: 'linear-gradient(90deg, hsl(345,60%,26%) 0%, hsl(345,52%,32%) 50%, hsl(345,60%,26%) 100%)',
      }}
    >
      <p className="font-heading text-accent text-center leading-snug text-[11px] md:text-[13px] tracking-[0.15em]">
        <span className="opacity-60 mx-2">◆</span>
        Your gallery, delivered within 24 to 48 hours. Always.
        <span className="opacity-60 mx-2">◆</span>
      </p>
    </div>
  );
};

export default AnnouncementRibbon;
