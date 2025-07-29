"use client";
import ScrollSection from "@/components/ScrollSection";
import Testsection from "@/components/testsection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Header />
      <Hero />
      <Testsection />
      <Footer />
    </div>
  );
}
