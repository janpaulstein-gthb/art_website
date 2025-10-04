import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-4">
            傳統藝術
          </h1>
          <h2 className="font-playfair text-3xl md:text-5xl text-crimson mb-6">
            Traditional Chinese Art
          </h2>
          <div className="w-24 h-1 bg-gradient-crimson mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the timeless beauty of traditional Chinese ink paintings. 
            Each piece tells a story through elegant brush strokes and centuries-old techniques.
          </p>
          <button
            onClick={scrollToGallery}
            className="mt-12 inline-flex items-center gap-2 text-crimson hover:text-crimson-light transition-colors group"
            aria-label="Scroll to gallery"
          >
            <span className="text-lg font-medium">Explore Collection</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
