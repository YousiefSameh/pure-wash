import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/Button";

export default function Card(props: {
  icon?: StaticImageData;
  title: string;
  description: string;
  price: number;
}) {
  return (
    <div
      className="card shadow-[0_4px_4px_0_#00000040] rounded-2xl space-y-4 flex items-center justify-center flex-col px-6 py-3"
    >
      {props.icon && (
        <Image src={props.icon} alt={props.title} width={80} height={80} />
      )}
      <h4 className="text-xl font-bold">{props.title}</h4>
      <p className="text-center">{props.description}</p>
      <span className="font-bold text-xl">{props.price} جنيه</span>
      <Button size="lg">اطلب الأن</Button>
    </div>
  );
}
