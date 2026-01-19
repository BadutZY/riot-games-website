import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HistorySection from '@/components/HistorySection';
import VisionMissionSection from '@/components/VisionMissionSection';
import TeamSection from '@/components/TeamSection';
import ProductsSection from '@/components/ProductsSection';
import AchievementsSection from '@/components/AchievementsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <VisionMissionSection />
        <TeamSection />
        <ProductsSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
