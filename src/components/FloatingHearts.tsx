import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -100],
            x: Math.random() * 50 - 25,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Heart className="text-heart-red w-4 h-4 fill-current" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;