"use client"

import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

interface CalculatorButtonProps {
  calculatorUrl: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function CalculatorButton({ 
  calculatorUrl, 
  children, 
  className,
  size = "xl",
  variant = "destructive"
}: CalculatorButtonProps) {
  const handleClick = () => {
    window.location.href = calculatorUrl;
  };

  return (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
      onClick={handleClick}
    >
      <Calculator className="mr-2 h-5 w-5" />
      {children}
    </Button>
  );
}