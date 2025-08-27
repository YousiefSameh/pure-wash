import CallToActionSection from "@/components/home/CallToAction";
import HeroSection from "@/components/home/Hero";
import ServiceSection from "@/components/home/Services";
import SubscriptionSection from "@/components/home/Subscription";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <CallToActionSection />
      <SubscriptionSection />
    </main>
  )
}