import { motion } from "motion/react";
import SquigglyLine from "../ui/SquigglyLine";

export default function Problem() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          <div className="flex justify-center mb-6">
            <SquigglyLine className="w-24 md:w-32" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-medium leading-tight text-heading font-serif"
          >
            O pesadelo de todo organizador: o tempo virar de repente.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-body leading-relaxed"
          >
            Você planejou tudo com carinho, reuniu as pessoas importantes, mas na Baixada Santista, o clima é imprevisível. Um sol escaldante ou uma chuva inesperada podem acabar com a animação da sua festa em minutos. <span className="font-semibold text-primary">Não corra esse risco.</span> A Tendas Soft oferece a infraestrutura perfeita.
          </motion.p>
        </div>
      </div>
    </section>
  );
}