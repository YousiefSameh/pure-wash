import Image from "next/image";
import SpecialHeading from "../shared/SpecialHeading";
import CarWash from "../../../public/car-wash.png";
import { Button } from "../ui/Button";

const ServicesData = [
  {
    id: 1,
    icon: CarWash,
    title: "تنظيف بالبخار",
    description: "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500
  },
  {
    id: 2,
    icon: CarWash,
    title: "تنظيف بالبخار",
    description: "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500
  },
  {
    id: 3,
    icon: CarWash,
    title: "تنظيف بالبخار",
    description: "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500
  },
];

export default function ServiceSection() {
  return (
    <section className="container mx-auto py-25">
      <SpecialHeading title="أتعرف على خدماتنا" />
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ServicesData.map((service) => {
          return (
            <div
              key={service.id}
              className="card shadow-[0_4px_4px_0_#00000040] rounded-2xl space-y-4 flex items-center justify-center flex-col px-6 py-3"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={80}
                height={80}
              />
              <h4 className="text-xl font-bold">{service.title}</h4>
              <p className="text-center">{service.description}</p>
              <span className="font-bold text-xl">{service.price} جنيه</span>
              <Button size="lg">اطلب الأن</Button>
            </div>
          );
        })}
      </div>
    </section>
  )
}