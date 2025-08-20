'use client';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Education from '@/components/education';
import Achievements from '@/components/achievements';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
