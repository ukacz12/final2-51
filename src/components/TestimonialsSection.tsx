import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonialAgnieszka from "@/assets/testimonial-agnieszka.jpg";
import testimonialTomasz from "@/assets/testimonial-tomasz.jpg";
import testimonialKasia from "@/assets/testimonial-kasia.jpg";
import testimonialMichal from "@/assets/testimonial-michal.jpg";

const testimonials = [
  {
    name: "Agnieszka K.",
    age: 29,
    location: "Warszawa",
    text: "Dzięki flirciara.com poznałam miłość mojego życia! Po miesiącu rozmów spotkaliśmy się i od razu poczuliśmy chemię. Teraz jesteśmy zaręczeni i planujemy ślub w przyszłym roku. To naprawdę działa!",
    rating: 5,
    relationship: "Zaręczona po 8 miesiącach",
    image: testimonialAgnieszka
  },
  {
    name: "Tomasz M.",
    age: 32,
    location: "Kraków", 
    text: "Byłem sceptyczny wobec portali randkowych, ale flirciara.com kompletnie zmieniło moje podejście. Interfejs jest intuicyjny, a ludzie są prawdziwi. Znalazłem tu swoją żonę! Polecam każdemu, kto szuka prawdziwej miłości.",
    rating: 5,
    relationship: "Pobrał się po roku",
    image: testimonialTomasz
  },
  {
    name: "Kasia L.",
    age: 26,
    location: "Gdańsk",
    text: "Najlepszy portal randkowy w Polsce! Przez 3 miesiące spotykałam się z kilkoma fantastycznymi osobami, aż w końcu trafiłam na tego jedynego. Czuję się jak w bajce! Atmosfera na portalu jest bardzo pozytywna i bezpieczna.",
    rating: 5,
    relationship: "W szczęśliwym związku od roku",
    image: testimonialKasia
  },
  {
    name: "Michał R.",
    age: 30,
    location: "Wrocław",
    text: "Nigdy nie sądziłem, że znajdę swoją bratnią duszę online, ale flirciara.com mnie zaskoczył! Poznałem tu niesamowitą kobietę, która stała się moją najlepszą przyjaciółką i partnerką życiową. Jesteśmy razem od 2 lat i nie wyobrażam sobie życia bez niej.",
    rating: 5,
    relationship: "W związku od 2 lat",
    image: testimonialMichal
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Opinie naszych użytkowników
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tysiące szczęśliwych par znalazło miłość dzięki naszej platformie. Przeczytaj ich historie sukcesu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card shadow-card hover:shadow-romantic transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.age} lat, {testimonial.location}
                    </div>
                    <div className="text-sm text-primary font-medium mt-1">
                      {testimonial.relationship}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">na podstawie 18,000+ opinii</span>
          </div>
        </div>
      </div>
    </section>
  );
};