import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUp, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { SiTiktok } from "react-icons/si";


const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'History', href: '#history' },
    { name: 'Games', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const suportLinks = [
    { name: 'Security', href: 'https://www.riotgames.com/en/security' },
    { name: 'Legal', href: 'https://www.riotgames.com/en/legal' },
    { name: 'Terms Of Service', href: 'https://www.riotgames.com/en/terms-of-service' },
    { name: 'Privacy Notice', href: 'https://www.riotgames.com/en/privacy-notice' },
    { name: 'Player Support', href: 'https://support.riotgames.com/hc/en' },
    { name: 'Accessibility', href: 'https://www.riotgames.com/en/accessibility' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/RiotGames/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/riotgames', label: 'Twitter' },
    { icon: SiTiktok, href: 'https://www.tiktok.com/@riotgames', label: 'TikTok' },
    { icon: Instagram, href: 'https://www.instagram.com/riotgames/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/riotgames', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/riot-games', label: 'LinkedIn' },
  ];

  return (
    <>
      <footer id="contact" className="bg-card border-t border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <a href="#home" className="flex items-center gap-3 mb-6">
                <span className="text-xl font-bold text-foreground font-display">
                  Riot Games
                </span>
              </a>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Riot Games is dedicated to creating player-focused games and unforgettable experiences.
                From League of Legends to Arcane, we aim to connect players worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground font-display mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground font-display mb-6">Support</h4>
              <ul className="space-y-3">
                {suportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground font-display mb-6">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm">
                © 2025 Riot Games, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default Footer;
