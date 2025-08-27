import Image from "next/image";
import SpecialHeading from "../shared/SpecialHeading";
import CheckIcon from "../../../public/check.svg";

export default function FuturePlansSection() {
  return (
    <section className="relative z-20">
      <div className="mb-34">
        <SpecialHeading title="خططنا المستقبلية" />
      </div>
      <div className="w-full bg-secondary grid-cols sm:grid-cols md:grid-cols-3 gap sm:gap md:gap-16 p sm:p-10 md:p-16 shadow-lg static md:absolute md:left-1/2 md:-bottom-1/2 md:transform-[translate(-50%,100%)] md:rounded-2xl md:w-[90vw] md:max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Image src={CheckIcon} alt="Check icon" width={60} height={60} />
          <h5 className="text-2xl md:text-3xl font-bold">تشحيم</h5>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Image src={CheckIcon} alt="Check icon" width={60} height={60} />
          <h5 className="text-2xl md:text-3xl font-bold">ترصيص وظبط زوايا</h5>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Image src={CheckIcon} alt="Check icon" width={60} height={60} />
          <h5 className="text-2xl md:text-3xl font-bold">تغيير فيلم الحماية</h5>
        </div>
      </div>
    </section>
  );
}
