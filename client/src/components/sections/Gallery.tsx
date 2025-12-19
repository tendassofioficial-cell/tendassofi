import { motion } from "motion/react";
import img1 from "@assets/generated_images/night_wedding_reception_with_string_lights.png";
import img2 from "@assets/generated_images/close_up_table_setting_under_tent.png";
import img3 from "@assets/generated_images/corporate_beach_event_setup.png";
import img4 from "@assets/generated_images/birthday_party_lounge_area.png";

export default function Gallery() {
  const images = [
    { src: img1, alt: "Recepção de casamento noturna", span: "md:col-span-8 md:row-span-2" },
    { src: img2, alt: "Detalhes da mesa", span: "md:col-span-4 md:row-span-1" },
    { src: img3, alt: "Evento corporativo na praia", span: "md:col-span-4 md:row-span-1" },
    { src: img4, alt: "Lounge para festas", span: "md:col-span-12 md:row-span-1" },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Nosso Portfólio</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-heading">
            Momentos inesquecíveis <br /> que ajudamos a criar
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-[2rem] shadow-card-default ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-serif text-xl md:text-2xl font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}