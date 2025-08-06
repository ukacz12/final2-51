import { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RegisterModal } from "@/components/RegisterModal";
import profileAnna from "@/assets/profile-anna.jpg";
import profileKarolina from "@/assets/profile-karolina.jpg";
import profileMarta from "@/assets/profile-marta.jpg";
import profileAleksandra from "@/assets/profile-aleksandra.jpg";
import profileNatalia from "@/assets/profile-natalia.jpg";
import profileJulia from "@/assets/profile-julia.jpg";
import profileMagdalena from "@/assets/profile-magdalena.jpg";
import profileAgnieszka from "@/assets/profile-agnieszka.jpg";

const profiles = [
  {
    name: "Anna",
    age: 25,
    location: "Warszawa",
    bio: "Uwielbiam podróże, fotografię i dobre książki. Szukam kogoś, kto podziela moje pasje i chce odkrywać świat razem ze mną.",
    image: profileAnna,
    interests: ["Podróże", "Fotografia", "Książki", "Yoga", "Kuchnia"]
  },
  {
    name: "Karolina",
    age: 23,
    location: "Gdańsk", 
    bio: "Studentka architektury, miłośniczka sztuki i dobrej kawy. Szukam osoby otwartej na nowe przygody i wspólne odkrywanie miasta.",
    image: profileKarolina,
    interests: ["Architektura", "Sztuka", "Kawa", "Design", "Taniec"]
  },
  {
    name: "Marta",
    age: 24,
    location: "Poznań",
    bio: "Graficzka z pasją do sportu i muzyki. W weekendy można mnie znaleźć na siłowni lub na koncertach indie rocka.",
    image: profileMarta,
    interests: ["Grafika", "Sport", "Muzyka", "Fitness", "Koncerty"]
  },
  {
    name: "Aleksandra",
    age: 28,
    location: "Kraków",
    bio: "Marketingowiec z pasją do gotowania i podróży. W weekendy można mnie znaleźć w kuchni eksperymentując z nowymi przepisami lub planując kolejną przygodę.",
    image: profileAleksandra,
    interests: ["Marketing", "Gotowanie", "Podróże", "Fotografia", "Wino"]
  },
  {
    name: "Natalia",
    age: 26,
    location: "Wrocław",
    bio: "Psycholog z pasją do rozwoju osobistego i medytacji. Szukam kogoś, kto ceni sobie głębokie rozmowy i wspólny rozwój.",
    image: profileNatalia,
    interests: ["Psychologia", "Medytacja", "Rozwój osobisty", "Czytanie", "Joga"]
  },
  {
    name: "Julia",
    age: 22,
    location: "Lublin",
    bio: "Studentka IT z pasją do nowych technologii i gier. W wolnym czasie programuję aplikacje mobilne i gram w gry planszowe.",
    image: profileJulia,
    interests: ["Programowanie", "Technologie", "Gry", "Szachy", "Matematyka"]
  },
  {
    name: "Magdalena",
    age: 27,
    location: "Szczecin",
    bio: "Nauczycielka języków obcych z pasją do podróży i poznawania nowych kultur. Mówię w pięciu językach i kocham przygody.",
    image: profileMagdalena,
    interests: ["Języki", "Podróże", "Kultury", "Nauka", "Historia"]
  },
  {
    name: "Agnieszka",
    age: 29,
    location: "Katowice",
    bio: "Przedsiębiorczyni prowadząca własną firmę ekologiczną. Pasjonuje mnie zrównoważony rozwój i ochrona środowiska.",
    image: profileAgnieszka,
    interests: ["Ekologia", "Biznes", "Przyroda", "Zero waste", "Gotowanie"]
  }
];

export const ProfilesSection = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Poznaj niesamowitych ludzi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tysiące zweryfikowanych profili czeka na Ciebie. Każdy dzień to nowa szansa na miłość.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="animate-in fade-in-50 slide-in-from-bottom-10"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProfileCard {...profile} onViewProfile={handleOpenRegisterModal} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-romantic transition-all duration-300 text-lg px-8 py-6 rounded-full font-semibold group"
            onClick={handleOpenRegisterModal}
          >
            Zobacz więcej profili
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleCloseRegisterModal} 
      />
    </section>
  );
};