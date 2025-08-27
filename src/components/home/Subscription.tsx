import SpecialHeading from "../shared/SpecialHeading";
import Card from "../shared/Card";

const ServicesData = [
  {
    id: 1,
    title: "VIB اشتراك",
    description:
      "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500,
  },
  {
    id: 2,
    title: "اشتراك سنوي",
    description:
      "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500,
  },
  {
    id: 3,
    title: "اشتراك شهري",
    description:
      "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500,
  },
];

export default function SubscriptionSection() {
  return (
    <section className="container mx-auto py-25">
      <SpecialHeading title="الاشتراكات" />
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ServicesData.map((service) => {
          return <Card key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}
