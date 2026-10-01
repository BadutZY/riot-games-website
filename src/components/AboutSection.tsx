import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about-image.jpg';
import riotGame from '@/assets/riot-game.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={riotGame}
                alt="About Riot Games"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title mb-8">ABOUT US</h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <span className="text-primary font-semibold">Riot Games</span> was founded in 2006 to develop, publish,
              and support the most player-focused games in the world. In 2009, we released our debut title, League of Legends,
              to worldwide acclaim. League has gone on to be the most-played PC game in the world and a key driver of the explosive growth of esports.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With League in its second decade, we're continuing to evolve the game while delivering new experiences
              to players with Teamfight Tactics, Legends of Runeterra, VALORANT, League of Legends: Wild Rift,
              and multiple work-in-progress titles. In addition, Riot Forge gives developers access to Riot's IPs to create
              games like Ruined King and plenty of other adventures across Runeterra.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The annual League of Legends World Championship features qualified esports teams from 12 international leagues.
              Worlds is the most widely viewed and followed esports tournament, and it's among the biggest and most popular gaming and sporting events in the world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
