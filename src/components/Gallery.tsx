import ArtCard from "./ArtCard";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";

const artworks = [
  {
    id: 1,
    image: art1,
    title: "Mountain Serenity",
    description: "Majestic peaks emerge through morning mist, capturing the eternal spirit of nature.",
    price: "2,800"
  },
  {
    id: 2,
    image: art2,
    title: "Cherry Blossom Dreams",
    description: "Delicate sakura petals dance on the wind, symbolizing the fleeting beauty of spring.",
    price: "2,200"
  },
  {
    id: 3,
    image: art3,
    title: "Bamboo Resilience",
    description: "Graceful bamboo sways in harmony, representing strength through flexibility.",
    price: "2,400"
  },
  {
    id: 4,
    image: art4,
    title: "Lotus Tranquility",
    description: "Sacred lotus blooms rise from still waters, embodying purity and enlightenment.",
    price: "2,600"
  },
  {
    id: 5,
    image: art5,
    title: "Crane's Grace",
    description: "An elegant crane stands in contemplation, a symbol of longevity and wisdom.",
    price: "3,200"
  },
  {
    id: 6,
    image: art6,
    title: "Plum Blossom Courage",
    description: "Winter plum blossoms brave the cold, representing perseverance and hope.",
    price: "2,500"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Art Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each artwork is an original creation, hand-painted using traditional Chinese ink techniques passed down through generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <ArtCard
              key={artwork.id}
              image={artwork.image}
              title={artwork.title}
              description={artwork.description}
              price={artwork.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
