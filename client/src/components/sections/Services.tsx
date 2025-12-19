import { motion } from "motion/react";
import { Tent, Armchair, Building2, Star } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#303C28] text-[#F1F5F9] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-6xl font-serif max-w-2xl leading-tight text-[#F1F5F9]"
          >
            Tudo o que você precisa para um evento confortável.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center gap-2"
          >
            <div className="flex text-secondary">
              <Star className="fill-current w-4 h-4" />
              <Star className="fill-current w-4 h-4" />
              <Star className="fill-current w-4 h-4" />
              <Star className="fill-current w-4 h-4" />
              <Star className="fill-current w-4 h-4" />
            </div>
            <span className="font-medium text-sm text-white">99% Satisfação</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Tendas (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-7 bg-secondary text-secondary-foreground rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-4">
                <Tent className="w-8 h-8 text-heading" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-heading">Tendas de Alta Resistência</h3>
              <p className="text-lg text-heading/80 leading-relaxed max-w-md">
                Proteção imediata e estética profissional. Vários tamanhos para quintais ou áreas abertas.
              </p>
            </div>
            {/* Abstract decorative circle */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          {/* Card 2: Mesas e Cadeiras (Medium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 bg-white text-heading rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-accent/30 rounded-2xl flex items-center justify-center mb-4">
                <Armchair className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-heading">Mesas e Cadeiras</h3>
              <p className="text-body leading-relaxed">
                Material plástico resistente e higienizado. Jogos completos prontos para uso.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Corporativos (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 bg-white/5 border border-white/10 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 hover:bg-white/10 transition-colors duration-300"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold mb-2 text-white">Eventos Corporativos</h3>
              <p className="text-white/70 text-lg">
                Estruturas para empresas e grandes eventos na praia. Atendemos demandas de alto padrão com pontualidade.
              </p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />
    </section>
  );
}