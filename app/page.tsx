import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import BusinessVerticals from "@/components/BusinessVerticals";
import GlobalPresence from "@/components/GlobalPresence";
import MarketStory from "@/components/MarketStory";
import WhyKrad from "@/components/WhyKrad";
import Ecosystem from "@/components/Ecosystem";
import Vision from "@/components/Vision";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <BrandIntro />
        <BusinessVerticals />
        <GlobalPresence />
        <MarketStory />
        <WhyKrad />
        <Ecosystem />
        <Vision />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
