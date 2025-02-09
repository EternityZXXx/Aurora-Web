import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">Fantasy Resources</h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Apresentamos soluções de scripts para MTA:SA de excelência, oferecendo
              um desempenho superior e confiável que você pode contar.
            </p>
            <p className="text-sm text-gray-500">
              © 2019 - 2025 - Fantasy Resources. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-gray-900">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-gray-900">
                  Loja
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-gray-900">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-600 hover:text-gray-900">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <p className="text-gray-600 mb-2">Email de contato:</p>
            <a href="mailto:suporte@fantasyresources.com" className="text-primary hover:underline">
              suporte@fantasyresources.com
            </a>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4f47f0620e794a4d9e43d0046303f39f/a2d5547e163f185249991a6568f0f2e97e710dbf9434434f3940c0348661dc9b"
                  alt="Discord"
                  className="w-6 h-6"
                />
              </Button>
              <Button variant="ghost" size="icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4f47f0620e794a4d9e43d0046303f39f/8ac93b1daecf5f6f31d41ad252c27b45a8a8a9b3db9e4c202db54e7762fb282b"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </Button>
              <Button variant="ghost" size="icon">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4f47f0620e794a4d9e43d0046303f39f/cbd532256d2e5ae2f4a85146bac858a3fc18cd5c49201298e59e7b1b5eba8323"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}