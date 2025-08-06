import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, MapPin, Eye } from "lucide-react";

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  bio: string;
  image: string;
  interests: string[];
  onViewProfile?: () => void;
}

export const ProfileCard = ({ name, age, location, bio, image, interests, onViewProfile }: ProfileCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-romantic transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="relative">
        <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={`${name}, ${age}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Profile info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">{name}, {age}</h3>
          <div className="flex items-center gap-1 text-sm opacity-90 mb-2">
            <MapPin className="w-4 h-4" />
            {location}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{bio}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {interests.slice(0, 3).map((interest, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {interest}
            </Badge>
          ))}
          {interests.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{interests.length - 3}
            </Badge>
          )}
        </div>

        <Button 
          className="w-full bg-gradient-primary hover:shadow-romantic transition-all duration-300 group"
          onClick={onViewProfile}
        >
          <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Zobacz profil
        </Button>
      </div>
    </Card>
  );
};