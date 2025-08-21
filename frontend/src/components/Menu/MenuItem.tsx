import Image from "next/image";
import React from "react";
import Items from "./items";
import { Menu } from "../../redux/slices/menuSlice";

type MenuItemProps = {
  menus: Menu[];
  active: string | null;
};

function MenuItem({ active, menus }: MenuItemProps) {
  return (
    <div className="w-full max-h-full flex flex-col md:flex-row justify-between bg-cover relative"
      style={{ backgroundImage: "url('/images/menu-item-img.png')" }}
    >
      <div className="hidden md:block">
        <Image
          src="/images/menu-item-img2.png"
          alt="Image 1"
          width={200}
          height={1164}
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <Items active={active} menus={menus} />
      </div>

      <div className="hidden md:block">
        <Image
          src="/images/menu-item-img1.png"
          alt="Image 2"
          width={200}
          height={1164}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default MenuItem;
