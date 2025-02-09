import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Sistema de Garagem",
      description: "Sistema completo de garagem para MTA:SA com interface moderna",
      price: "R$ 50,00",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      title: "Sistema de Inventário",
      description: "Sistema de inventário com suporte a itens customizados",
      price: "R$ 45,00",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Sistema de Economia",
      description: "Sistema completo de economia com banco virtual",
      price: "R$ 60,00",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Resources Disponíveis</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{resource.price}</span>
                  <Button>Comprar Agora</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;