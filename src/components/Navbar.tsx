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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-accent/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-heading text-lg text-primary font-semibold">
          Memories by Abhi
        </a>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
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
