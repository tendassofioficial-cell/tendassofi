import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import LumoLogo from "@/assets/logo-lumo.svg";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-section text-white py-20 md:py-24 text-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-white">
            Pronto para garantir o sucesso do seu evento?
          </h2>

          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
          >
            <a href="https://wa.link/6kqe6a" target="_blank" rel="noopener noreferrer">
              FALAR COM CONSULTOR AGORA
            </a>
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 text-white/90 font-medium">
            <span>(13) 99105-8219</span>
            <span className="hidden md:block">•</span>
            <span>comercial@tendasofi.com</span>
            <span className="hidden md:block">•</span>
            <span>Atendemos toda a Baixada Santista</span>
          </div>

          <div className="pt-16 mt-8 border-t border-white/20 text-sm text-white/60 flex flex-col items-center gap-4">
            <p>© 2025 Tendas Sofi. Todos os direitos reservados.</p>
            <a
              href="https://lumostudio.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <span>Feito com</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </motion.svg>
              <span>por</span>
              <img src={LumoLogo} alt="Lumo Studio" className="h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}