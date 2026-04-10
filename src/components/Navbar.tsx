import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#galleries', label: 'Galleries' },
  { href: '#videos', label: 'Videos' },
  { href: '#about', label: 'About' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-accent/20' : 'bg-black/20 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className={`font-heading text-lg font-semibold transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-white'}`}>
          Memories by Abhi
        </a>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm transition-colors duration-300 ${scrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
