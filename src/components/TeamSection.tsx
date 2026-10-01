import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import dylanImg from "@/assets/team/ceo.jpg";
import marcImg from "@/assets/team/coo.webp";
import emilyImg from "@/assets/team/cfo.jpg";
import markImg from "@/assets/team/cto.webp";


const teamData = [
  {
    name: "Dylan Jadeja",
    role: "Chief Executive Officer",
    description: "Leads Riot's strategic direction and global operations, ensuring player-focused innovation.",
    image: dylanImg,
  },
  {
    name: "Marc Merrill",
    role: "Co-Founder & President",
    description: "Oversees product development and creative vision, championing Riot's game portfolio.",
    image: marcImg,
  },
  {
    name: "Emily Winkle",
    role: "Chief Financial Officer",
    description: "Manages financial strategy and operations to support Riot's global growth.",
    image: emilyImg,
  },
  {
    name: "Mark Yetter",
    role: "Chief Technology Officer",
    description: "Drives technological innovation and infrastructure for Riot's games and platforms.",
    image: markImg,
  },
];


const TeamCard = ({ member, index }: { member: typeof teamData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-gradient rounded-xl border border-border overflow-hidden card-hover group"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground font-display">{member.name}</h3>
        <p className="text-primary font-medium text-sm uppercase tracking-wider mt-1">{member.role}</p>
        <p className="text-muted-foreground mt-3">{member.description}</p>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title section-title-center">OUR TEAM</h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Meet the leadership team driving Riot Games' vision and success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;