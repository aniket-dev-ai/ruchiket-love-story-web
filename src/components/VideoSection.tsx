import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-script text-gradient mb-4">
            Just For You
          </h2>
          <p className="text-lg text-muted-foreground">
            A personal video I made with my voice and our beautiful memories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="card-romantic p-2">
            <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 group cursor-pointer">
              {/* Placeholder for video */}
              <video
                src="https://ik.imagekit.io/7p4emhequ/Ruchika%20-%20Made%20with%20Clipchamp.mp4?updatedAt=1753113246769"
                controls
                className="w-full h-full object-cover"
                poster="/poster.jpg" // Optional thumbnail before play
              ></video>

              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-primary/20 rounded-2xl pointer-events-none"></div>

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-primary/30">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ✨
                </motion.div>
              </div>
              <div className="absolute top-3 right-3 text-primary/30">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  💕
                </motion.div>
              </div>
              <div className="absolute bottom-3 left-3 text-primary/30">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  🌸
                </motion.div>
              </div>
              <div className="absolute bottom-3 right-3 text-primary/30">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  💖
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating elements around video */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 text-3xl opacity-60"
          >
            💕
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -top-4 -right-8 text-2xl opacity-60"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-6 -left-4 text-2xl opacity-60"
          >
            🌸
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute -bottom-8 -right-6 text-3xl opacity-60"
          >
            💖
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground italic">
            "Some moments are too beautiful for words, they need to be felt..."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
