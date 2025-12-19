import { motion } from "motion/react";
import { Check } from "lucide-react";
import teamImage from "@assets/generated_images/event_staff_organizing_chairs_outdoors.png";

export default function WhyUs() {
  const benefits = [
    {
      title: "Experiência Local Comprovada",
      desc: "500+ projetos em Santos, Guarujá, São Vicente."
    },
    {
      title: "Índice de 99% de Satisfação",
      desc: "Clientes reais que confiam no nosso prazo."
    },
    {
      title: "Material Impecável",
      desc: "Chega de cadeiras sujas. Entregamos tudo pronto para uso."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative order-2 md:order-1"
          >
            <img
              src={teamImage}
              alt="Equipe Tendas Soft"
              className="w-full h-[600px] object-cover rounded-[3rem] rounded-bl-none shadow-xl"
            />
            {/* Decorative box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[3rem] rounded-bl-none -z-10" />
          </motion.div>

          {/* Content Side */}
          <div className="order-1 md:order-2 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-5xl font-serif font-medium leading-tight text-heading"
            >
              Por que a Baixada Santista escolhe a Tendas Soft há 16 anos?
            </motion.h2>

            <div className="space-y-6">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-card-default hover:shadow-card-hover transition-shadow flex gap-4 items-start border border-accent/30"
                >
                  <div className="bg-secondary/50 p-2 rounded-full shrink-0 mt-1">
                    <Check className="w-5 h-5 text-heading" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-heading mb-1">{item.title}</h3>
                    <p className="text-body text-opacity-80">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}