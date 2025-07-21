import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetters from "@/components/LoveLetters";
import MusicPlayer from "@/components/MusicPlayer";
import VideoSection from "@/components/VideoSection";
import ThemeToggle from "@/components/ThemeToggle";
import BackgroundMusic from "@/components/BackgroundMusic";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-romantic">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Background Music Toggle */}
      <BackgroundMusic />

      {/* Hero Section */}
      <HeroSection />

      {/* Photo Gallery */}
      <div id="gallery">
        <PhotoGallery />
      </div>

      {/* Love Letters */}
      <LoveLetters />

      {/* Music Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-script text-gradient mb-4">
              Our Soundtrack
            </h2>
            <p className="text-lg text-muted-foreground">
              Songs that define our love story
            </p>
          </motion.div>
          <MusicPlayer />
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Footer */}
      <footer className="py-12 px-4 bg-dreamy-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl"
            >
              💕
            </motion.div>
            <p className="text-lg font-script text-primary">
              Made with ❤️ by Aniket for Ruchika
            </p>
            <p className="text-sm text-muted-foreground">
              "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
            </p>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Forever
              </motion.span>
              <span>•</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Always
              </motion.span>
              <span>•</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                Together
              </motion.span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
