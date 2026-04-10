import logo from '@/assets/logo.jpg';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground py-12 px-4">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
            <img src={logo} alt="Memories by Abhi" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h3 className="font-heading text-xl mb-2">Memories by Abhi</h3>
        <p className="font-heading text-sm italic text-primary-foreground/70 mb-6">
          Capturing Timeless Indian Traditions
        </p>

        <a
          href="https://wa.me/12272673629"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25D366] text-white text-sm font-body font-medium hover:bg-[#20bd5a] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Contact on WhatsApp
        </a>

        <div className="gold-divider w-48 mx-auto my-8 opacity-50" />

        <p className="font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Memories by Abhi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
