import CallToActionSection from "@/components/home/CallToAction";
import HeroSection from "@/components/home/Hero";
import ServiceSection from "@/components/home/Services";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <CallToActionSection />
    </main>
  )
}