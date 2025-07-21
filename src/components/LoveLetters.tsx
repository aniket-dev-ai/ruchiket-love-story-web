import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const letters = [
  {
    title: "Missing You",
    content: `Hey baby …. ❤
Ik you are sleeping 

But I am awake and all I could do is think about you 
You the way you explain everything to me the way u make me blush make me feel priotised special 
I honestly don’t what to say 

Thankyou ❤ 
Thankyou for existing thankyou for coming into my life ❤ thankyou for chossing me thankyou for being mine I am beyond greatfull to have you 

I m overwhelmed baby with gratitude for every moment we've shared together till now 
Your presence in my life is a constant reminder of what love truly feels like heheheh 

I'm smiling right now, thinking about all the little things you do and say that make my heart skip a beat that makes me blush so hard I can’t even tell u The way you giggle the way you care for me, the way you make me feel like I'm your home 🥰❤
When you wake up in the morning, I want you to know that I've been thinking of you, replaying our conversations, and cherishing every thing that you have said to me 

You bring so much joy and light into my life, and I'm grateful for every second I get to spend with you 🥰❤ I love how we can be our silly selves around each other 
how we support each other's dreams not the gym ewww 
and how we find comfort in each other 

You're more than just a boyfriend to me 
you're my best friend, my confidant, and my patiii parmeshwas . I cherish the late-night conversations, the flirty text messages , and the quiet moments when its just us 🥰 the pause the silence 

I love you for who you are, and I'm so grateful to have you by my side. When you wake up, know that you're loved, appreciated, and always on my mind
Alwayssssss!!!!!!!

Love you ❤🥰`,
    author: "Ruchika",
    emotion: "💕",
  },
  {
    title: "My Everything",
    content: `My Dearu Ruchika,

There’s something I’ve been wanting to put into words for a while now, and today felt like the right time.

You’re important to me,more than I can probably ever express fully. You're not just a part of my life but you are a part of me. And I know we argue sometimes, and you get angry over things sometimes small, sometimes small 😂. But let me tell you something honestly, even in those moments, you still mean the world to me.

I won’t lie, 60% of my time goes into making you smile again after a fight. And yeah it's sound weird but, I actually like it. Because if I’m spending my time trying to win your heart again and again, it just means I still have it and I’ll never stop fighting for it.

Your gussa, your mood swings, your silence , they all matter to me. Not because they’re easy to deal with , but because they come from you, and every part of you is precious to me. I don’t want perfection. I just want you. Just the way you are.

You make my ordinary or bad days feel special. You bring meaning into the my life. Even when you push me away with anger, I want to come closer, not because I have to, but because I want to. Because you’re worth it, every single time.

I may not always understand your mood or your silence, but I’ll always be here—listening, trying, loving. 

Forever yours,
Aniket`,
    author: "Aniket",
    emotion: "❤️",
  },
  {
    title: "Before Your Trip",
    content: `Meri dearest Ruchika ❤,

Abhi toh sirf 2.5 weeks hue hain humare relationship ko, but I feel jaise tumhara naam mere dil pe likha hua tha hamesha se. 💖 Itni jaldi tum meri life ka sabse beautiful part ban gayi ho. Ab tumhare bina din adhoore lagte hain, aur tumhare bina raatin empty si ban jaati hain agle call ya message ke liye. 🥺 (although aaj kal so jaata hu 🥲😂) 

Aaj jab tum 2 baje apni trip pe nikalogi, mujhe Khushi bhi hai ki tum naye places explore karogi, naye memories banao gi, par thodi si udaasi bhi hai kyunki abhi humne ek dusre ko properly mila bhi nahi, aur itne din tak doori feel karni padegi. 😔

Mrs Aniket 😌 , please apna pura dhyan rakhna. Garmi hai toh paani hamesha peena, sunscreen lagana, shades zaroor pehnna, aur zyada ghoomte waqt breaks lena. 🌞🧃 Tumhara health aur comfort mere liye sabse important hai babes. Tumhara face glow karta hai jab tum smile karti ho… us smile ko protect karna humara farz hai, chahe main wahan hoon ya na hoon. 😘

Kabhi kabhi ye long distance feel thoda heavy lagta hai, par tumhara pyaar itna pure hai ki har doori ko haseen bana deta hai. 💞 Jab hawa chalegi na, wo samajhna wo main hoon tumhe hug kar raha hoon 🤗. Har night main tumhare naam se din khatam karta hoon aur har subah tumhari yaad se din start hota hai. 🌙🌞

Mujhe pata hai tum apna trip ka har moment enjoy karogi — naye jagah, naye experiences, naye yaadein. Main yahaan bas intezaar karunga ki tum safe aur khush wapas aao, fir hum apni calls pe wo saari stories share karenge. ✨

Tum mere liye bahut special ho Ruchika. Abhi se tumhare bina sab kuch incomplete lagta hai. Mere dil ke har kone mein sirf tum ho, aur main hamesha tumhare saath hoon chahe hum kitni bhi doori pe ho. ❤

I love you endlessly, meri jaan. Jaldi safe wapas aana `,
    author: "Aniket",
    emotion: "✈️",
  },
];

const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
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
              className={`relative ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              } max-w-2xl`}
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
                  <TypewriterText text={letter.content} delay={index * 1000} />
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
                className={`absolute -top-4 ${
                  index % 2 === 0 ? "-left-4" : "-right-4"
                } text-2xl opacity-20`}
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
