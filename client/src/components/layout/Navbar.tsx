import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "motion/react";
import Logo from "@/assets/logo-tendas-sofi.svg";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  const sidebarVariants = {
    open: {
      transition: { loop: Infinity, staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "py-4" : "py-6"
          }`}
      >
        <div
          className={`
            relative w-[92%] max-w-6xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border
            ${isScrolled
              ? "bg-white/85 shadow-2xl scale-[1.02] border-white/40 backdrop-blur-xl"
              : "bg-transparent shadow-none border-transparent backdrop-blur-none"
            }
          `}
        >
          {/* Logo */}
          <Link href="#home" className="relative z-10 group">
            <img
              src={Logo}
              alt="Tendas Sofi"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium text-body hover:text-primary transition-colors group overflow-hidden rounded-full"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-button-glow transition-all hover:scale-105 active:scale-95 group cursor-pointer">
              <a href="https://wa.link/6kqe6a" target="_blank" rel="noopener noreferrer">
                Orçamento
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-heading p-2 relative z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current block rounded-full transition-transform origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current block rounded-full transition-opacity"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current block rounded-full transition-transform origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 40px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#FFFDF5] pt-32 px-6 md:hidden flex flex-col h-screen"
          >
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-8 items-center text-center"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  className="text-4xl font-serif text-heading font-medium hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div variants={itemVariants} className="w-full max-w-xs pt-8">
                <Button asChild className="w-full bg-primary text-white rounded-full px-8 py-6 text-xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
                  <a href="https://wa.link/6kqe6a" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}