import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision-mission" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title section-title-center">VISION & MISSION</h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Our guiding principles that drive everything we do at Riot Games.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-gradient p-8 lg:p-10 rounded-xl border border-border card-hover group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-display">Vision</h3>
            <ul className="text-muted-foreground text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span>
To be the most player-focused game company in the world. We put players at the center of everything we do, creating meaningful experiences that connect players globally through games.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span>We aspire to be a company that delivers games with exceptional quality, champions player experience, and builds communities that span generations and geographies.</span>
              </li>
            </ul>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-gradient p-8 lg:p-10 rounded-xl border border-border card-hover group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-display">Mission</h3>
            <ul className="text-muted-foreground text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span>To develop, publish, and support the most player-focused games in the world. We strive to raise the bar for player expectations and deliver fulfilling experiences that go beyond simple entertainment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span>Through our games, esports, music, and entertainment initiatives, we aim to create memorable moments and lasting connections for players everywhere.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
