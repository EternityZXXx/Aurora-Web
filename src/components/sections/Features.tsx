import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  const Icons = {
    support: (
      <svg
        className="w-16 h-16 mx-auto mb-4 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 22a12 12 0 01-6.16-11.422L12 14z" />
      </svg>
    ),
    payment: (
      <svg
        className="w-16 h-16 mx-auto mb-4 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M9 16h6m-9 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    delivery: (
      <svg
        className="w-16 h-16 mx-auto mb-4 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16h16l4-8H7l-4 8zM3 16h16M7 16V8m4 8V8m4 8V8m4 8V8m-4 0h4m-8 0h4" />
      </svg>
    ),
  };

  const features = [
    {
      icon: Icons.support,
      title: "Suporte ninja",
      description: "Nada de robôs, converse com humanos através do nosso Discord."
    },
    {
      icon: Icons.payment,
      title: "Como você quer fazer os pagamentos",
      description: "Descida a forma de pagamento na qual vai realizar os pagamentos de sua conta em nossa plataforma."
    },
    {
      icon: Icons.delivery,
      title: "Entrega rápida",
      description: "Confirmado o pagamento, automaticamente o seu resource estará disponível para download."
    }
  ];

  return (
    <section className="p-20 bg-aurora-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Especificações</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}