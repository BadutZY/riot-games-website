import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  {
    year: '2006',
    title: 'Foundation',
    description: 'Riot Games was founded by Brandon Beck and Marc Merrill in Los Angeles, California. The company began development of their first title, League of Legends.',
  },
  {
    year: '2009',
    title: 'League of Legends Launch',
    description: 'Riot Games releases League of Legends, a free-to-play multiplayer online battle arena game that would go on to become one of the most played video games in the world.',
  },
  {
    year: '2011',
    title: 'Tencent Acquisition',
    description: 'Chinese technology conglomerate Tencent acquires a majority stake in Riot Games, later increasing to full ownership by 2015.',
  },
  {
    year: '2013',
    title: 'eSports Growth',
    description: 'League of Legends Season 3 World Championship is held at the Staples Center in Los Angeles, marking a significant milestone for esports with over 32 million viewers.',
  },
  {
    year: '2019',
    title: 'Expansion Beyond League',
    description: 'Riot announces multiple new games including Teamfight Tactics, Legends of Runeterra, and VALORANT, marking the companys expansion beyond League of Legends.',
  },
  {
    year: '2020',
    title: 'VALORANT Launch',
    description: 'Riot Games releases VALORANT, a free-to-play first-person tactical shooter that quickly gains popularity in the competitive gaming scene.',
  },
  {
    year: '2021',
    title: 'Arcane Release',
    description: 'Riot releases "Arcane," an animated series set in the League of Legends universe, to critical acclaim on Netflix.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Riot Games continues to expand its global reach with new offices and development studios in various countries, focusing on tailoring games for regional markets.',
  },
  {
    year: '2024',
    title: 'New Gaming Frontiers',
    description: 'Riot Games ventures into new gaming frontiers with innovative titles and expansions to existing game universes, solidifying its position as a leading gaming company.',
  },
];

const TimelineItem = ({ item, index }: { item: typeof timelineData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}
      >
        <div className={`card-gradient p-6 rounded-lg border border-border card-hover inline-block ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
          <span className="text-primary font-bold text-xl font-display">{item.year}</span>
          <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 font-display">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </div>
      </motion.div>

      {/* Center Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="hidden lg:flex flex-shrink-0 w-4 h-4 bg-primary rounded-full relative z-10"
      />

      {/* Empty Space */}
      <div className="hidden lg:block flex-1" />
    </div>
  );
};

const HistorySection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="history" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title section-title-center">OUR HISTORY</h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            From humble beginnings to a global entertainment company, this is the story of Riot Games.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
