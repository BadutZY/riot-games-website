import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/bg-riot.webp';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground uppercase tracking-wider mb-6">
            RIOT GAMES
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          We are a game developer and publisher that aspires to bethe most player-focused company in the world.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={scrollToAbout} className="btn-primary">
            View More
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
