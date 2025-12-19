import { motion } from "motion/react";

export default function SquigglyLine({ className = "", color = "#FF723F" }: { className?: string, color?: string }) {
  return (
    <motion.svg
      width="108"
      height="14"
      viewBox="0 0 108 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <path
        d="M2 7C14 7 14 2 26 2C38 2 38 12 50 12C62 12 62 7 74 7C86 7 86 2 98 2C110 2 110 12 122 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}