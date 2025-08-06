import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { RegisterModal } from "@/components/RegisterModal";

export const CTASection = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart 
            key={i}
            className={`absolute text-white/10 animate-float-${(i % 3) + 1} w-8 h-8`}
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 1.5}s`,
              top: `${20 + (i % 4) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Twoja miłość{" "}
          <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            czeka na Ciebie
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
          Nie czekaj dłużej. Dołącz do tysięcy szczęśliwych par,
          <br />
          które znalazły swoją drugą połówkę dzięki naszej platformie.
        </p>

        <div className="flex justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-romantic transition-all duration-300 text-lg px-8 py-6 rounded-full font-semibold group hover:scale-105"
            onClick={handleOpenRegisterModal}
          >
            Rozpocznij za darmo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        <div className="text-sm text-white/70">
          ✓ Rejestracja za darmo  ✓ Bez zobowiązań  ✓ Anuluj kiedy chcesz
        </div>
      </div>

      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleCloseRegisterModal} 
      />
    </section>
  );
};