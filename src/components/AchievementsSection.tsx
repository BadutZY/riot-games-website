import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Star, Medal, Globe, Users } from 'lucide-react';

const achievementsData = [
  {
    icon: Trophy,
    title: 'Esports Pioneer',
    description: 'League of Legends World Championship 2023 drew over 400 million viewers, solidifying Riot as a leader in global esports.',
  },
  {
    icon: Award,
    title: 'Emmy Award',
    description: 'Arcane won the 2022 Emmy for Outstanding Animated Program, a testament to Riot\'s storytelling excellence.',
  },
  {
    icon: Star,
    title: 'Global Reach',
    description: 'Riot\'s games are played in over 200 countries, with localized content fostering worldwide communities.',
  },
  {
    icon: Medal,
    title: 'Player Engagement',
    description: 'League of Legends surpassed 180 million monthly active players in 2024, a record in PC gaming.',
  }
];

const AchievementCard = ({ achievement, index }: { achievement: typeof achievementsData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-gradient p-6 rounded-xl border border-border card-hover group text-center"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground font-display mb-2">{achievement.title}</h3>
      <p className="text-muted-foreground text-sm">{achievement.description}</p>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title section-title-center">ACHIEVEMENTS</h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Celebrating the milestones that define Riot Games' impact on gaming and entertainment.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
