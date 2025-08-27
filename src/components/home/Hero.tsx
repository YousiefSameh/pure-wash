import Image from "next/image";
import HeroCar from "@/public/hero-car.png";
import { Button } from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="hero relative overflow-x-hidden h-[calc(100vh-160px)] flex items-center justify-center">
      
      <div className="content container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-0">
        <div className="text text-center w-full md:w-fit space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold">
            نظافة عربيتك تبدأ من هنا
          </h1>
          <p className="text-lg md:text-xl">
            خدمات غسيل احترافية بأفضل الأسعار وأسرع وقت
          </p>
          <Button size="lg" className="w-[150px]">
            ابدأ الحجز
          </Button>
        </div>
        <div className="image w-full md:w-auto flex justify-center md:justify-end">
          <Image
            src={HeroCar}
            alt="Hero Car"
            loading="eager"
            className="w-64 md:w-[700px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}