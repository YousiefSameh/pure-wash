import Image from "next/image";
import SpecialHeading from "../shared/SpecialHeading";
import CheckIcon from "@/public/check.svg";

export default function FuturePlansSection() {
  return (
    <section className="relative z-20">
      <div className="mb-34">
        <SpecialHeading title="خططنا المستقبلية" />
      </div>
      <div className="w-full bg-secondary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap sm:gap-6 md:gap-16 p-8 sm:p-10 md:p-16 shadow-lg static md:absolute md:left-1/2 md:-bottom-1/2 md:transform-[translate(-50%,100%)] md:rounded-2xl md:w-[90vw] md:max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Image src={CheckIcon} alt="Check icon" width={60} height={60} />
          <span className="text-2xl md:text-3xl font-bold">تشحيم</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Image src={CheckIcon} alt="Check icon" width={60} height={60} />
          <span className="text-2xl md:text-3xl font-bold">ترصيص وظبط زوايا</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Image src={CheckIcon} alt="Check icon" width={60} height={60} />
          <span className="text-2xl md:text-3xl font-bold">تغيير فيلم الحماية</span>
        </div>
      </div>
    </section>
  );
}
