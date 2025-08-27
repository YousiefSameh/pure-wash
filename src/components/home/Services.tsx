import SpecialHeading from "../shared/SpecialHeading";
import CarWash from "../../../public/car-wash.png";
import CarService from "../../../public/car-service.png";
import Vehical from "../../../public/vehical.png";
import Card from "../shared/Card";

const ServicesData = [
  {
    id: 1,
    icon: CarWash,
    title: "تنظيف بالبخار",
    description:
      "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500,
  },
  {
    id: 2,
    icon: CarService,
    title: "تلميع الشمع",
    description:
      "استعادة اللمعان وحماية الطلاء بأستخدام تلميع الشمع المتخصص والحفاظ على لونها",
    price: 500,
  },
  {
    id: 3,
    icon: Vehical,
    title: "غسيل خارجي وداخلي",
    description:
      "غسيل شامل للعربيه من الخارج والداخل بأستخدام مواد تنظيف عالية الجودة",
    price: 500,
  },
];

export default function ServiceSection() {
  return (
    <section className="container mx-auto py-25">
      <SpecialHeading title="أتعرف على خدماتنا" />
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ServicesData.map((service) => {
          return (
            <Card key={service.id} {...service} />
          );
        })}
      </div>
    </section>
  )
}