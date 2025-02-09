import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Eye, ShoppingCart } from "lucide-react";

export function Resources() {
  const { toast } = useToast();
  const resources = [
    {
      id: 1,
      title: "Sistema de Garagem",
      description: "Sistema completo de garagem para MTA:SA com interface moderna",
      price: "R$ 50,00",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400",
      details: "Um sistema completo de garagem com interface moderna, suporte a múltiplos veículos, personalização e muito mais.",
    },
    {
      id: 2,
      title: "Sistema de Inventário",
      description: "Sistema de inventário com suporte a itens customizados",
      price: "R$ 45,00",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
      details: "Sistema de inventário completo com suporte a itens personalizados, sistema de peso, categorias e muito mais.",
    },
    {
      id: 3,
      title: "Sistema de Economia",
      description: "Sistema completo de economia com banco virtual",
      price: "R$ 60,00",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400",
      details: "Sistema de economia com banco virtual, transferências, extrato, empréstimos e muito mais.",
    },
  ];

  const handleBuy = (resourceId: number) => {
    toast({
      title: "Produto adicionado",
      description: "O produto foi adicionado ao carrinho",
      variant: "default",
    });
  };

  return (
    <section className="py-20 bg-aurora-darker pt-32 pb-32" id="produtos">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
          Nossos <span className="text-gradient">Recursos</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={resource.id} 
              className="glass-morphism rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-aurora-primary">{resource.price}</span>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="hover:bg-white/5">
                          <Eye className="w-4 h-4 mr-2" />
                          Detalhes
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass-morphism border-none">
                        <DialogHeader>
                          <DialogTitle>{resource.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <img
                            src={resource.image}
                            alt={resource.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <p className="text-gray-400">{resource.details}</p>
                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-bold text-aurora-primary">{resource.price}</span>
                            <Button onClick={() => handleBuy(resource.id)}>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Comprar Agora
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button onClick={() => handleBuy(resource.id)}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}