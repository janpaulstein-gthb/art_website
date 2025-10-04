import { Card } from "@/components/ui/card";

interface ArtCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ArtCard = ({ image, title, description, price }: ArtCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-500 bg-card">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-playfair text-2xl font-semibold text-foreground group-hover:text-crimson transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="font-playfair text-3xl font-bold text-crimson">
            ${price}
          </span>
          <span className="text-sm text-muted-foreground">USD</span>
        </div>
      </div>
    </Card>
  );
};

export default ArtCard;
