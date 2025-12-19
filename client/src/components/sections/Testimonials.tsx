import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Tive um excelente atendimento, o Airton foi extremamente educado! Qualidade ótima e preço melhor!",
      author: "Matheus Santos",
      location: "Cliente via Google"
    },
    {
      text: "A equipe foi rápida e montou a cobertura no sábado de manhã. Salvaram a festa!",
      author: "Carla M.",
      location: "Guarujá"
    },
    {
      text: "Pontualidade na entrega e limpeza do material foram os diferenciais.",
      author: "Ricardo L.",
      location: "Santos"
    }
  ];

  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-heading mb-4">O que nossos clientes dizem</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-card-default border border-accent hover:shadow-card-hover transition-shadow flex flex-col justify-between h-full"
            >
              <div>
                <Quote className="text-primary/20 w-10 h-10 mb-4" />
                <p className="text-lg text-body italic mb-6">"{t.text}"</p>
              </div>
              <div className="border-t border-accent pt-4 mt-auto">
                <p className="font-serif font-bold text-heading">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}