"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ScrollButtonProps {
  className?: string
}

export function ScrollButton({ className }: ScrollButtonProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Button 
      size="xl" 
      variant="destructive" 
      className={`bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-white group ${className}`}
      onClick={scrollToServices}
      aria-label="Learn more about our tax resolution services"
    >
      Learn More
      <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
    </Button>
  );
}
