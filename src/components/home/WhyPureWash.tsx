import Image from "next/image";
import ArrowDown from "@/public/heading-special-arrow-down.svg";
import Logo from "@/public/logo.png";
import CustomerSuccess from "@/public/customer-success.png";
import Time from "@/public/time.png";
import Reward from "@/public/reward.png";

const ReasonsData = [
  {
    id: 1,
    title: "خدمات أحترافية",
    description:
      "نستخدم أحدث التقنيات وأفضل المواد للحفاظ على عربيتك بأفضل حال",
    icon: Reward,
  },
  {
    id: 2,
    title: "سرعة وكفاءة",
    description: "بنقدم خدماتنا في وقت قياسي بدون تأثير على الجودة",
    icon: Time,
  },
  {
    id: 3,
    title: "راحة العملاء أولوياتنا",
    description: "بنوفر خيارات حجز سهله ومريحة علشان تناسب جدولك",
    icon: CustomerSuccess,
  },
];

export default function WhyPureWashSection() {
  return (
    <section className="py-25" dir="rtl">
      <div className="text-center flex items-center justify-center flex-col my-6 mb-16 space-y-6">
        <h1 className="text-3xl font-bold">
          ليه Pure Wash
          <Image
            src={Logo}
            alt="Pure Wash Logo"
            className="rounded-full inline-block mx-1"
            width={60}
            height={60}
          />
          ؟
        </h1>
        <Image src={ArrowDown} alt="Arrow Down" width={20} height={20} />
      </div>

      <div className="container mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {ReasonsData.map((reason) => (
          <div className="col flex gap-3" key={reason.id}>
            <Image
              src={reason.icon}
              height={60}
              className="h-[60px] w-auto"
              alt={reason.title}
            />
            <div className="text flex flex-col gap-2">
              <span className="text-3xl font-bold">{reason.title}</span>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
