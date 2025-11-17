import { personalData } from "@/config/data/personal-data";
import AboutSection from "@/components/homepage/about";
import Blog from "@/components/homepage/blog";
import ContactSection from "@/components/homepage/contact";
import Education from "@/components/homepage/education";
import Experience from "@/components/homepage/experience";
import HeroSection from "@/components/homepage/hero-section";
import Projects from "@/components/homepage/projects";
import Skills from "@/components/homepage/skills";

async function getData() {
  // Skip fetching if devUsername is not configured or network is unavailable
  if (!personalData.devUsername) {
    return [];
  }
  
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)
    
    if (!res.ok) {
      return [];
    }
    
    const data = await res.json();
    const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
    return filtered;
  } catch (error) {
    // Return empty array if fetch fails (e.g., network issues)
    console.error('Failed to fetch blog data:', error);
    return [];
  }
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  )
};