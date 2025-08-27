import Image from "next/image";
import PhoneIcon from "../../../public/phone.svg";

export default function Footer() {
  return (
    <footer className="h-[350px] flex items-end justify-center bg-black">
      <div className="text text-center space-y-6 pb-3">
        <h3 className="text-3xl font-bold text-primary">أتصل بنا</h3>
        <span className="text-3xl font-bold text-primary flex items-center gap-2">01022334455 <Image src={PhoneIcon} alt="" width={50} height={50}/></span>
      </div>
    </footer>
  )
}