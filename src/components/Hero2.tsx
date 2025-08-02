import { color } from "framer-motion";
import { Star, Users, Award } from "lucide-react";

const HeroData = [
  {
    id: 1,
    title: "Hot Wheels",
    subtitle: "Collectibles",
    image: "/car.png",
    color1: "red-900",
    color2: "red-500",
  },
  {
    id: 2,
    title: "Resin Art & Crafts",
    subtitle: "Custom artwork",
    image: "/resin.png",
    color1: "amber-500",
    color2: "amber-900",
  },
  {
    id: 3,
    title: "Mobile Accessories",
    subtitle: "Smart Phone Cases",
    image: "/case2.png",
    color1: "pink-900",
    color2: "pink-500",
  },
  {
    id: 4,
    title: "Collectibles",
    subtitle: "Rare finds",
    image: "/teddy.png",
    color1: "blue-500",
    color2: "blue-900",
  },
];



const Hero2 = () => {
  return (
    <div className="md:hidden block pt-20">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)_/_0.1),transparent_50%)]" /> */}
      <section className="px-2 rounded-2xl">
        <div className="grid grid-cols-1 space-y-2 ">
          {HeroData.map((item) => {
            const fromColor = `from-${item.color1}`;
            const toColor = `to-${item.color2}`;

            return (
              <div
                key={item.id}
                className={`flex justify-between text-white bg-gradient-to-r ${fromColor} ${toColor} px-8 py-4 rounded-2xl ${
                  item.id % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Content here */}
                <div className="content-center">
                  <h2 className="text-md font-bold">{item.title}</h2>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-auto h-24 object-contain"
                />
              </div>
            );
          })}
        </div>
      </section>
      {/* Stats */}
      <section>
        <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-accent mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold">4.9</span>
            </div>
            <p className="text-sm text-muted-foreground">Rating</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-primary mb-1">
              <Users className="w-4 h-4" />
              <span className="font-bold">2K+</span>
            </div>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-primary mb-1">
              <Award className="w-4 h-4" />
              <span className="font-bold">500+</span>
            </div>
            <p className="text-sm text-muted-foreground">Unique Items</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero2;
