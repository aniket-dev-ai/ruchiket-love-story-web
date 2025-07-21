import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

const songs = [
  { title: "Perfect", artist: "Ed Sheeran", duration: "4:23" },
  { title: "All of Me", artist: "John Legend", duration: "4:29" },
  { title: "A Thousand Years", artist: "Christina Perri", duration: "4:45" },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };
  
  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="card-romantic max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-script text-primary mb-2">Our Song</h3>
        <p className="text-muted-foreground">Music that speaks our hearts</p>
      </div>
      
      <div className="text-center mb-6">
        <h4 className="font-semibold text-lg">{songs[currentSong].title}</h4>
        <p className="text-muted-foreground">{songs[currentSong].artist}</p>
      </div>

      {/* Animated Music Bars */}
      <div className="flex justify-center items-center space-x-1 mb-6 h-12">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-primary rounded-full w-1"
            animate={{
              height: isPlaying ? [10, 40, 15, 35, 20] : 10,
            }}
            transition={{
              duration: 1.5,
              repeat: isPlaying ? Infinity : 0,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSong}
          className="p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <SkipBack className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="p-4 bg-primary text-primary-foreground rounded-full shadow-romantic"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSong}
          className="p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <SkipForward className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
        <span>0:00</span>
        <div className="flex-1 bg-muted rounded-full h-1">
          <div className="bg-primary h-1 rounded-full w-1/3"></div>
        </div>
        <span>{songs[currentSong].duration}</span>
      </div>
    </div>
  );
};

export default MusicPlayer;