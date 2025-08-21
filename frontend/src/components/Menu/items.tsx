import React from "react";
import { Menu } from "../../redux/slices/menuSlice";

type itemProps = {
  menus: Menu[];
  active: string | null;
};
function Items({ active, menus }: itemProps) {
  console.log(active, menus);
  const activeMenu = menus.find((menu) => menu.name === active);
  console.log(activeMenu, "hello");
  return (
    <div>
      <div className="w-[1140px] h-[941px] border border-[#C5A059] p-5">
        {activeMenu ? (
          <div>
            <div className="flex justify-center items-center space-x-4">
                <div className="w-20 bg-amber-50 h-0.5"></div>
              <div className="relative">
                <h1 className="absolute top-[3px] left-[3px] font-Oswald font-semibold uppercase text-[#800020] text-[75px] leading-[100%] tracking-[0.03em]">
                  {activeMenu.description}
                </h1>
                <h1 className="relative font-Oswald font-semibold uppercase text-[#FFFFFF] text-[75px] leading-[100%] tracking-[0.03em]">
                  {activeMenu.description}
                </h1>
              </div>
                <div className="w-20 bg-amber-50 h-0.5"></div>
            </div>
            <div className="w-full px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {activeMenu.items.map((item, index) => (
          <div key={index} className="flex flex-col font-Oswald font-semibold text-[26px]">
            {/* Title and price */}
            <div className="flex  items-center text-white">
              <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                {item.name}
              </h3>
              <div className="flex-grow border-b border-dashed border-white mx-2"></div>
              <span className="text-white font-semibold">${item.price}</span>
            </div>
            {/* Description */}
            {item.description && (
              <p className="text-gray-400 kelly-slab-regular mt-1">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a menu to see items</p>
        )}
      </div>
    </div>
  );
}

export default Items;
