import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/elegant_outdoor_wedding_under_white_tent.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide shadow-sm"
            >
              Desde 2008 na Baixada
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-heading font-serif">
              Não deixe o sol ou a <br className="hidden md:block" />
              chuva arruinarem <br className="hidden md:block" />
              seu evento.
            </h1>

            <p className="text-lg md:text-xl text-body leading-relaxed max-w-lg">
              Aluguel de Tendas, Mesas e Cadeiras com a rapidez e a confiança de quem atende a região há mais de 16 anos. Garanta o conforto dos seus convidados agora.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-semibold shadow-button-glow group transition-all hover:scale-105 cursor-pointer"
              >
                <a href="https://wa.link/6kqe6a" target="_blank" rel="noopener noreferrer">
                  QUERO UM ORÇAMENTO RÁPIDO
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <div className="flex items-center gap-2 text-sm font-medium text-body/80">
                <div className="bg-green-100 text-green-600 rounded-full p-1">
                  <CheckCircle className="h-4 w-4" />
                </div>
                Montagem ágil e segura
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Beautiful outdoor wedding tent"
                className="w-full h-[500px] object-cover rounded-tl-none rounded-[3rem] md:rounded-[4rem] shadow-2xl"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -left-6 md:-left-10 md:bottom-10 bg-secondary text-secondary-foreground w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white transform rotate-12"
              >
                <span className="text-3xl md:text-4xl font-bold font-serif leading-none">16+</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider mt-1">Anos de História</span>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 w-64 h-64 bg-accent/50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}