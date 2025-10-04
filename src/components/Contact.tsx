import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleContact = () => {
    window.location.href = "mailto:artist@chineseart.com?subject=Art Inquiry";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Inquire About Artwork
          </h2>
          <div className="w-24 h-1 bg-gradient-crimson mx-auto"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Interested in acquiring a piece? Have questions about the artist or techniques? 
            I would be delighted to hear from you and discuss these timeless works of art.
          </p>
          
          <div className="pt-8">
            <Button
              onClick={handleContact}
              size="lg"
              className="bg-gradient-crimson hover:opacity-90 text-primary-foreground font-medium px-8 py-6 text-lg shadow-elegant transition-all hover:shadow-xl hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Artist
            </Button>
          </div>
          
          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Response time: Within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
