import { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RegisterModal } from "@/components/RegisterModal";
import profile1 from "@/assets/profile-female-1.jpg";
import profile2 from "@/assets/profile-female-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import profile4 from "@/assets/profile-female-3.jpg";

const profiles = [
  {
    name: "Anna",
    age: 25,
    location: "Warszawa",
    bio: "Uwielbiam podróże, fotografię i dobre książki. Szukam kogoś, kto podziela moje pasje i chce odkrywać świat razem ze mną.",
    image: profile1,
    interests: ["Podróże", "Fotografia", "Książki", "Yoga", "Kuchnia"]
  },
  {
    name: "Karolina",
    age: 23,
    location: "Gdańsk", 
    bio: "Studentka architektury, miłośniczka sztuki i dobrej kawy. Szukam osoby otwartej na nowe przygody i wspólne odkrywanie miasta.",
    image: profile2,
    interests: ["Architektura", "Sztuka", "Kawa", "Design", "Taniec"]
  },
  {
    name: "Marta",
    age: 24,
    location: "Poznań",
    bio: "Graficzka z pasją do sportu i muzyki. W weekendy można mnie znaleźć na siłowni lub na koncertach indie rocka.",
    image: profile3,
    interests: ["Grafika", "Sport", "Muzyka", "Fitness", "Koncerty"]
  },
  {
    name: "Aleksandra",
    age: 28,
    location: "Kraków",
    bio: "Marketingowiec z pasją do gotowania i podróży. W weekendy można mnie znaleźć w kuchni eksperymentując z nowymi przepisami lub planując kolejną przygodę.",
    image: profile4,
    interests: ["Marketing", "Gotowanie", "Podróże", "Fotografia", "Wino"]
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
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