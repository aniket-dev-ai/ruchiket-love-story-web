import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const letters = [
  {
    title: "Missing You",
    content: "My dearest Aniket, every moment without you feels like an eternity. Your laugh echoes in my mind, your smile brightens my darkest days. Distance means nothing when someone means everything. I count the days until I can hold you again, until I can look into your eyes and tell you how much you complete my world. You are my home, my heart, my everything.",
    author: "Ruchika",
    emotion: "💕"
  },
  {
    title: "My Everything",
    content: "Beautiful Ruchika, you walked into my life and suddenly everything made sense. You are the melody to my song, the color to my canvas, the beat to my heart. With you, I've discovered a love so deep, so pure, that it transforms ordinary moments into magical memories. You are not just my girlfriend, you are my soulmate, my future, my forever.",
    author: "Aniket",
    emotion: "❤️"
  },
  {
    title: "Before Your Trip",
    content: "My love, as you prepare for your journey, my heart is already missing you. Travel safely, explore boldly, but remember that no matter how beautiful the places you visit, nothing compares to the beauty you bring to my life. Take a piece of my heart with you, and know that I'll be counting the moments until you're back in my arms where you belong.",
    author: "Aniket",
    emotion: "✈️"
  }
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const typeTimer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeTimer);
          setIsTyping(false);
        }
      }, 30);
      return () => clearInterval(typeTimer);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className="relative">
      {displayText}
      {isTyping && (
        <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink" />
      )}
    </span>
  );
};

const LoveLetters = () => {
  return (
    <section className="py-20 px-4 bg-dreamy-gradient">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-script text-gradient mb-4">
            Letters from the Heart
          </h2>
          <p className="text-lg text-muted-foreground">
            Words that carry our souls to each other
          </p>
        </motion.div>

        <div className="space-y-12">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} max-w-2xl`}
            >
              <div className="card-romantic">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-script text-primary">
                    {letter.title} {letter.emotion}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    From {letter.author}
                  </span>
                </div>
                
                <div className="text-foreground leading-relaxed font-romantic">
                  <TypewriterText 
                    text={letter.content} 
                    delay={index * 1000}
                  />
                </div>
                
                <div className="mt-4 text-right">
                  <p className="font-script text-primary text-lg">
                    With all my love, {letter.author} 💕
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-4 ${index % 2 === 0 ? '-left-4' : '-right-4'} text-2xl opacity-20`}
              >
                🌸
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveLetters;