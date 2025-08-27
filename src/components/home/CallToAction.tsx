import Image from "next/image";
import CTAImage from "../../../public/cta-car.png";
import { Button } from "../ui/Button";

export default function CallToActionSection() {
  return (
    <section className="p-8 md:p-16 bg-[#FAF3E0]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20">
        <Image
          src={CTAImage}
          alt="CTA Car Image"
          width={400}
          className="flex-1 w-full md:w-auto"
        />
        <div className="text space-y-6 w-full md:w-auto" dir="rtl">
          <p className="text-2xl md:text-4xl font-bold leading-loose truncate">
            الحق خصوماتنا!
            <br />
            خصومات لغاية <span className="text-3xl md:text-5xl text-red-500">30%</span> على
            باقات
            <br />
            الغسيل الكامل
          </p>
          <Button size="lg" className="w-full md:w-auto">اشترك الان</Button>
        </div>
      </div>
    </section>
  );
}
