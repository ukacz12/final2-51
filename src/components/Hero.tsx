import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";
import { Logo } from "@/components/Logo";
import { RegisterModal } from "@/components/RegisterModal";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart 
            key={i}
            className={`absolute text-white/20 animate-float-${i % 3 + 1} w-6 h-6`}
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              top: `${30 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 z-20">
        <Logo 
          onLoginClick={handleOpenRegisterModal}
          onRegisterClick={handleOpenRegisterModal}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20 md:pt-0">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          Znajdź swoją{" "}
          <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            drugą połówkę
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 font-light leading-relaxed px-2">
          Najlepszy portal randkowy w Polsce. Ponad 2 miliony użytkowników
          <br className="hidden md:block" />
          czeka na Ciebie. Rozpocznij swoją podróż miłosną już dziś!
        </p>

        <div className="flex justify-center mb-8 md:mb-12">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-romantic transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold hover:scale-105"
            onClick={handleOpenRegisterModal}
          >
            Dołącz za darmo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
          {[
            { icon: Users, label: "Aktywnych użytkowników", value: "2M+" },
            { icon: Heart, label: "Udanych związków", value: "50K+" },
            { icon: MessageCircle, label: "Wiadomości dziennie", value: "1M+" },
            { icon: Shield, label: "Bezpieczny portal", value: "100%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-white/80" />
              <div className="text-lg md:text-2xl font-bold">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/70 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleCloseRegisterModal} 
      />
    </div>
  );
};