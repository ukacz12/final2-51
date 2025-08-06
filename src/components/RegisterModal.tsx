import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Heart, Sparkles } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4 max-w-[90vw]">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Heart className="w-12 h-12 text-primary fill-current" />
              <Sparkles className="w-4 h-4 text-primary-glow absolute -top-1 -right-1" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Rozpocznij swoją przygodę miłosną!
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            Możesz się teraz za darmo zarejestrować i znaleźć swoją drugą połówkę.
            Dołącz do ponad 2 milionów użytkowników!
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 mt-6">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-romantic transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold group"
          >
            Zarejestruj się teraz
            <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            ✓ Rejestracja za darmo  ✓ Bez zobowiązań  ✓ Anuluj kiedy chcesz
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};