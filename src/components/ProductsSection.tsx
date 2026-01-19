import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Cloud, Shield, Zap, BarChart3 } from 'lucide-react';
import txkoBg from '@/assets/game/2xko.avif';
import arcaneBg from '@/assets/game/a.jpeg';
import lolBg from '@/assets/game/lol.jpeg';
import lorBg from '@/assets/game/lor.jpg';
import ttBg from '@/assets/game/tt.webp';
import valoBg from '@/assets/game/valo.jpeg';
import wrBg from '@/assets/game/wr.png';

const productsData = [
  {
    title: 'League of Legends',
    description: 'A team-based strategy game where two teams of five powerful champions face off to destroy the other s base. Choose from over 150 champions to make epic plays, secure kills, and take down towers.',
    link: 'https://www.leagueoflegends.com',
    image: lolBg,
  },
  {
    title: 'VALORANT',
    description: 'A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities. Creativity is your greatest weapon in this competitive shooter.',
    link: 'https://playvalorant.com/',
    image: valoBg,
  },
  {
    title: 'Teamfight Tactics',
    description: 'An auto-battler strategy game where you build a team of champions that battle on your behalf. Outthink and outposition your opponents to climb to the top.',
    link: 'https://teamfighttactics.leagueoflegends.com/',
    image: ttBg,
  },
  {
    title: 'Legends of Runeterra',
    description: 'A strategic card game where skill, creativity, and cleverness determine your success. Choose your champions and combine cards from different regions.',
    link: 'https://playruneterra.com/',
    image: lorBg,
  },
  {
    title: 'Wild Rift',
    description: 'League of Legends: Wild Rift brings the fast-paced PVP action-strategy of the League of Legends PC game to mobile and console.',
    link: 'https://wildrift.leagueoflegends.com/',
    image: wrBg,
  },
  {
    title: 'Arcane',
    description: 'An animated series set in Riot s League of Legends universe. The story follows the origins of two iconic League champions and the power that will tear them apart.',
    link: 'https://www.arcane.com/',
    image: arcaneBg,
  },
  {
    title: '2XKO',
    description: 'In 2XKO, players select two champions from the League of Legends roster to form a team, This mechanic enables dynamic combos and strategic play.',
    link: 'https://2xko.riotgames.com/',
    image: txkoBg,
  },
];

const ProductCard = ({ product, index }: { product: typeof productsData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl card-hover"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-bold text-foreground font-display">{product.title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <button className="flex items-center gap-2 text-primary font-medium group/btn">
          <a href={product.link} target="_blank" className="hover:underline">Pelajari Lebih</a>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title section-title-center">OUR GAMES</h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Discover our portfolio of games and entertainment properties.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {productsData.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
