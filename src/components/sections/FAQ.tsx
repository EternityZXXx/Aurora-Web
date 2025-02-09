import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Como realizar pagamentos com segurança na nossa loja online?",
      answer: "Aceitamos diversas formas de pagamento, incluindo Pix, Stripe, boleto bancário e Mercado Pago. É importante ressaltar que qualquer tentativa de fraude será punida com banimento do nosso Discord e inclusão na lista negra da nossa loja. Para garantir a segurança dos nossos clientes, trabalhamos com sistema de pagamento antecipado de 100%. Dessa forma, não iniciaremos qualquer trabalho sem o recebimento do valor correspondente. Ao efetuar o pagamento, você automaticamente concorda com os termos de uso e política de privacidade da nossa loja."
    },
    {
      question: "Como funciona o pós-venda?",
      answer: "Nosso serviço de pós-venda inclui suporte técnico completo e atualizações gratuitas para todos os recursos adquiridos."
    },
    {
      question: "Como funciona a proteção?",
      answer: "Utilizamos sistemas avançados de proteção para garantir a segurança e exclusividade dos nossos scripts."
    },
    {
      question: "Os resources pronta-entrega são códigos abertos?",
      answer: "Não, nossos resources são protegidos para garantir a exclusividade e valor do seu investimento."
    }
  ];

  return (
    <section className="py-20 bg-aurora-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold">Perguntas</span>
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600">
            Tire todas as suas dúvidas antes de comprar, confira as respostas
            para as perguntas mais frequentes em nossa loja.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}