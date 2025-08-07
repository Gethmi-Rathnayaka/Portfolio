"use client";
import Testsection from "@/components/testsection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Education from "@/pages/Education";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Other from "@/pages/Other";
import Contact from "@/pages/Contact";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Other />
      <Contact />
      <Footer />
    </div>
  );
}
