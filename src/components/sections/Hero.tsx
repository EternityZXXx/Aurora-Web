import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-aurora-darker" id="home">
      <div className="container mx-auto px-4 pt-32 pl-32 pr-32 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Button className="absolute top-1/2 left-0 transform -translate-y-1/2 mb-6 bg-primary/10 text-primary hover:bg-primary/20 rotate-90">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Contrate nossos serviços
            </Button>
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-primary">Loja</span> de<br />criação de <span className="text-primary">scripts</span>
              </h1>
              <div className="mb-8">
                <p className="text-gray-600">
                  Na nossa loja, estamos comprometidos em oferecer a você a mais
                  ampla e avançada coleção de scripts para aprimorar a sua
                  experiência no MTA:SA. Se você está buscando adicionar
                  funcionalidades inovadoras, melhorar a jogabilidade ou personalizar
                  o seu servidor, você está no lugar certo.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button onClick={() => window.location.href = "#produtos"} className="bg-primary hover:bg-primary/90">
                  <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd" />
                  </svg>
                  Ver produtos</Button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-8">
            <img src="./src/images/home/person.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}