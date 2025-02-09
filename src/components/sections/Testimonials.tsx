import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function Testimonials() {
  const testimonials = [
    {
      content: "Produto muito bom e atendimento 1000/10. Agradeço ao João Vitor por me ajudar, gente boa demais. Com certeza indico e irei voltar a comprar dele! TMJ!",
      author: "Nycolas Sanches",
      role: "Vida Real RolePlay"
    },
    {
      content: "Estou utilizando o anticheat da FantasyResources há um ano e não poderia estar mais satisfeito, tenho mais 2 da comunidade do mta e sempre passa lua ejector ou alguma outra coisa",
      author: "Bastos",
      role: "Complexo RP"
    },
    {
      content: "Todas encomendas feitas com a Fantasy são de qualidade incomparável, e sempre a disposição de prestar suporte. E sem contar o melhor e mais eficaz anticheat do mta, estamos usando e continuaremos!",
      author: "Gabriel",
      role: "Cidade Moderna"
    }
  ];

  return (
    <section className="py-20 bg-aurora-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold">Avaliações</span>
          <h2 className="text-3xl font-bold mb-4">Melhores avaliações</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}