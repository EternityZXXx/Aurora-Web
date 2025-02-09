import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, User } from "lucide-react";

export function Navbar() {
  const { toast } = useToast();
  const [cartCount, setCartCount] = React.useState(0);

  const handleLogin = () => {
    toast({
      title: "Login",
      description: "Funcionalidade de login em desenvolvimento",
      variant: "default",
    });
  };

  const handleCart = () => {
    toast({
      title: "Carrinho",
      description: "Carrinho de compras em desenvolvimento",
      variant: "default",
    });
  };

  return (
    <header className="border-b border-white/10 backdrop-blur-lg bg-aurora-darker/80">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-bold text-xl text-gradient">
            Aurora Resources
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/client" className="text-gray-400 hover:text-white transition-colors">
              Área do Cliente
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={handleLogin} className="hover:bg-white/5">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" onClick={handleCart} className="relative hover:bg-white/5">
            <span className="absolute -top-1 -right-1 bg-aurora-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}