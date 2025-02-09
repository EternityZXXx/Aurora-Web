import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { toast } from "sonner";

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [serverIP, setServerIP] = useState("");

  const purchasedResources = [
    {
      id: 1,
      title: "Sistema de Garagem",
      key: "XXXX-YYYY-ZZZZ-WWWW",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Sistema de Inventário",
      key: "AAAA-BBBB-CCCC-DDDD",
      downloadUrl: "#",
    },
  ];

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success("Chave copiada com sucesso!");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-aurora-dark">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <Card className="w-full max-w-md p-8 bg-aurora-darker border-aurora-primary/20">
            <h2 className="text-2xl font-bold mb-6 text-center text-gradient">Login Aurora Resources</h2>
            <form className="space-y-4">
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-aurora-dark border-aurora-primary/20"
                />
              </div>
              <div>
                <Input 
                  type="password" 
                  placeholder="Senha" 
                  className="bg-aurora-dark border-aurora-primary/20"
                />
              </div>
              <Button
                className="w-full bg-aurora-primary hover:bg-aurora-secondary text-white"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoggedIn(true);
                }}
              >
                Entrar
              </Button>
            </form>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-aurora-dark">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Painel do Cliente</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-aurora-primary">Resources Comprados</h2>
            <div className="space-y-4">
              {purchasedResources.map((resource) => (
                <Card key={resource.id} className="p-6 bg-aurora-darker border-aurora-primary/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                    <Button 
                      variant="outline" 
                      className="border-aurora-primary text-aurora-primary hover:bg-aurora-primary hover:text-white"
                      asChild
                    >
                      <a href={resource.downloadUrl}>Download</a>
                    </Button>
                  </div>
                  <div className="bg-aurora-dark p-4 rounded-md border border-aurora-primary/20">
                    <p className="text-sm text-gray-400 mb-2">Chave de Permissão:</p>
                    <div className="flex gap-2">
                      <Input 
                        value={resource.key} 
                        readOnly 
                        className="bg-aurora-darker border-aurora-primary/20"
                      />
                      <Button
                        variant="secondary"
                        className="bg-aurora-primary hover:bg-aurora-secondary text-white"
                        onClick={() => handleCopyKey(resource.key)}
                      >
                        Copiar
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-aurora-primary">Configurações</h2>
            <Card className="p-6 bg-aurora-darker border-aurora-primary/20">
              <h3 className="text-lg font-medium mb-4 text-white">IP do Servidor MTA</h3>
              <div className="space-y-4">
                <Input
                  value={serverIP}
                  onChange={(e) => setServerIP(e.target.value)}
                  placeholder="Digite o IP do seu servidor"
                  className="bg-aurora-dark border-aurora-primary/20"
                />
                <Button 
                  className="w-full bg-aurora-primary hover:bg-aurora-secondary text-white"
                  onClick={() => toast.success("IP do servidor salvo com sucesso!")}
                >
                  Salvar IP
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientArea;