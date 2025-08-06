import { Shield, MessageCircle, Heart, Users, Zap, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    description: "Wszystkie profile są weryfikowane. Twoje dane są chronione najwyższymi standardami bezpieczeństwa."
  },
  {
    icon: MessageCircle,
    title: "Inteligentne dopasowanie",
    description: "Zaawansowany algorytm znajduje dla Ciebie najlepsze dopasowania na podstawie Twoich preferencji."
  },
  {
    icon: Heart,
    title: "Prawdziwe relacje",
    description: "Ponad 50 000 par poznało się dzięki naszej platformie. Może Ty będziesz następny?"
  },
  {
    icon: Users,
    title: "Aktywna społeczność",
    description: "Dołącz do 2 milionów aktywnych użytkowników, którzy szukają miłości w Polsce."
  },
  {
    icon: Zap,
    title: "Szybkie połączenia",
    description: "Natychmiastowe powiadomienia o nowych wiadomościach i dopasowaniach."
  },
  {
    icon: Star,
    title: "Premium funkcje",
    description: "Odblokowaj dodatkowe funkcje: zobacz kto Cię polubił, nieograniczone polubienia i więcej."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dlaczego wybierać{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              naszą platformę?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferujemy najlepsze narzędzia do znajdowania miłości w bezpiecznym środowisku
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-card transition-all duration-300 hover:scale-105 bg-gradient-card group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};