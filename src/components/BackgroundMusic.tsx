import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMusic = () => {
    setIsMuted(!isMuted);
    // Here you would implement actual audio playback
    // For now, this is just a UI toggle
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 p-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isMuted ? "Play background music" : "Pause background music"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      ) : (
        <Volume2 className="w-5 h-5 text-primary" />
      )}
      
      {!isMuted && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-primary/30"
        />
      )}
    </motion.button>
  );
};

export default BackgroundMusic;