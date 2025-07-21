import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sunset-gradient">
      <FloatingHearts />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 ? '✨' : i % 3 === 1 ? '💕' : '🌸'}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-script text-gradient mb-6 relative"
            animate={{ 
              textShadow: [
                "0 0 0px hsl(340 82% 52%)",
                "0 0 20px hsl(340 82% 52% / 0.5)",
                "0 0 0px hsl(340 82% 52%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            RUCHIKET
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4"
            >
              <Heart className="w-8 h-8 text-heart-red fill-current" />
            </motion.div>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-elegant text-foreground mb-4">
            A Story of Us
          </h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            From strangers to soulmates – 
            <motion.span 
              className="text-primary font-medium"
              animate={{ 
                color: ["hsl(340 82% 52%)", "hsl(348 83% 47%)", "hsl(340 82% 52%)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {" "}Ruchika{" "}
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mx-2"
            >
              ❤️
            </motion.span>
            <motion.span 
              className="text-primary font-medium"
              animate={{ 
                color: ["hsl(340 82% 52%)", "hsl(348 83% 47%)", "hsl(340 82% 52%)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              Aniket
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "var(--shadow-romantic)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-romantic group"
            onClick={() => {
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Our Journey
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="ml-2 inline-block"
            >
              <Sparkles className="w-5 h-5" />
            </motion.span>
          </motion.button>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center space-x-2"
            >
              <Heart className="w-4 h-4 fill-current text-heart-red" />
              <span>Forever & Always</span>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Our Love Story</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;