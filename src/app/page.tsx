import CallToActionSection from "@/components/home/CallToAction";
import FuturePlansSection from "@/components/home/FuturePlans";
import HeroSection from "@/components/home/Hero";
import ServiceSection from "@/components/home/Services";
import SubscriptionSection from "@/components/home/Subscription";
import WhyPureWashSection from "@/components/home/WhyPureWash";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <CallToActionSection />
      <WhyPureWashSection />
      <SubscriptionSection />
      <FuturePlansSection />
    </main>
  )
}