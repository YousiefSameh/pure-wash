"use client";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Button } from "../ui/Button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ListIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky w-full top-0 left-0 flex items-center justify-center py-4 z-50 h-full transition-colors duration-300",
        isScrolled ? "bg-white py-2 shadow-2xl" : "bg-transparent"
      )}
    >
      {/* Desktop Navbar */}
      <nav className="container mx-auto items-center justify-between hidden md:flex">
        <div className="logo flex items-center gap-2">
          <Image
            src={Logo}
            alt="Pure Wash Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h4 className="text-2xl text-black font-bold">Pure Wash</h4>
        </div>
        <ul className="flex items-center gap-6">
          <li className="text-lg hover:text-primary cursor-pointer">العروض</li>
          <li className="text-lg hover:text-primary cursor-pointer">الخدمات</li>
          <li className="text-lg hover:text-primary cursor-pointer">
            الأشتراكات
          </li>
          <li className="text-lg hover:text-primary cursor-pointer">التواصل</li>
          <li>
            <Button variant="secondary">احجز دلوقتي</Button>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <div className="w-full flex items-center justify-between md:hidden px-4">
        <div className="logo flex items-center gap-2">
          <Image
            src={Logo}
            alt="Pure Wash Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h4 className="text-xl text-black font-bold">Pure Wash</h4>
        </div>
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span>{open ? <XIcon /> : <ListIcon />}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden">
          <div
            className={cn(
              "absolute top-0 right-0 w-2/3 h-full bg-white shadow-lg p-6 flex flex-col gap-6 transition-all",
              open ? "translate-x-0" : "translate-x-full"
            )}
          >
            <button
              className="self-end text-2xl mb-4"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <XIcon />
            </button>
            <ul className="flex flex-col gap-6 text-right">
              <li className="text-lg hover:text-primary cursor-pointer">
                العروض
              </li>
              <li className="text-lg hover:text-primary cursor-pointer">
                الخدمات
              </li>
              <li className="text-lg hover:text-primary cursor-pointer">
                الأشتراكات
              </li>
              <li className="text-lg hover:text-primary cursor-pointer">
                التواصل
              </li>
              <li>
                <Button variant="secondary" className="w-full">
                  احجز دلوقتي
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
