import Hero from './components/v2/Hero';
import BentoImpact from './components/v2/BentoImpact';
import ProjectsShowcase from './components/v2/ProjectsShowcase';
import LeadershipSection from './components/v2/LeadershipSection';
import CareerTimeline from './components/v2/CareerTimeline';
import TechStack from './components/v2/TechStack';
import ContactSection from './components/v2/ContactSection';

/**
 * Main Home page assembling all V2 Awwwards-inspired sections.
 */
const Home = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <Hero />
      <BentoImpact />
      <ProjectsShowcase />
      <LeadershipSection />
      <CareerTimeline />
      <TechStack />
      <ContactSection />
    </div>
  );
};

export default Home;
