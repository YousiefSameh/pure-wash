import Image from "next/image";
import ArrowDown from "@/public/heading-special-arrow-down.svg";

export default function SpecialHeading({ title }: { title: string }) {
  return (
    <div className="text-center flex items-center justify-center flex-col my-6 space-y-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <Image src={ArrowDown} alt="Arrow Down" width={20} height={20} />
    </div>
  )
}