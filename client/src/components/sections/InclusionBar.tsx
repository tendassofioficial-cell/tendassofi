import { motion } from "motion/react";
import AutismIcon from "@/assets/apoio-autismo.svg";

const InclusionItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-4 px-8 shrink-0">
        <span className="text-2xl md:text-3xl font-serif font-medium text-heading/80">{text}</span>
        <img src={AutismIcon} alt="Apoio ao Autismo" className="w-10 h-10 opacity-80" />
    </div>
);

export default function InclusionBar() {
    const items = [
        "Inclusão",
        "Respeito",
        "Acessibilidade",
        "Neurodiversidade",
        "Ambiente Amigo",
        "Apoio ao Autismo",
        "Eventos para Todos",
    ];

    // We duplicate the items to create the seamless loop effect
    const repeatedItems = [...items, ...items, ...items];

    return (
        <section className="py-6 bg-secondary/30 overflow-hidden border-y border-primary/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{
                        x: ["0%", "-33.33%"],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex items-center"
                >
                    {repeatedItems.map((item, index) => (
                        <InclusionItem key={index} text={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
