import React from "react";
import { Menu } from "../../redux/slices/menuSlice";

type itemProps = {
  menus: Menu[];
  active: string | null;
};
const salads = [
  { name: "House Salad", price: 6 },
  { name: "Caesar Salad", price: 8 },
];
function Items({ active, menus }: itemProps) {
  console.log(active, menus);
  const activeMenu = menus.find((menu) => menu.name === active);
  console.log(activeMenu, "hello");
  return (
    <div>
      <div className="w-[1140px] h-[941px] border border-[#C5A059] p-5">
        {activeMenu ? (
          <div className="">
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
                  <div
                    key={index}
                    className="flex flex-col font-Oswald font-semibold text-[26px]"
                  >
                    {/* Title and price */}
                    <div className="flex  items-center text-white">
                      <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <div className="flex-grow border-b border-dashed border-white mx-2"></div>
                      <span className="text-white font-semibold">
                        ${item.price}
                      </span>
                    </div>
                    {/* Description */}
                    {item.description && (
                      <p className="kelly-slab-regular mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">

            {activeMenu.name === "FOOD" && (
              <div className=" border-1 border-dotted border-white w-[748px] h-[222px]">
                <div className="flex justify-center p-3">
                  <div className="relative">
                    <h1 className="absolute top-[3px] left-[3px] font-Oswald font-semibold uppercase text-[#800020] text-[50px] leading-[100%] tracking-[0.03em]">
                      salads
                    </h1>
                    <h1 className="relative font-Oswald font-semibold uppercase text-[#FFFFFF] text-[50px] leading-[100%] tracking-[0.03em]">
                      salads
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center -mt-2">
                  <p className="kelly-slab-regular border-b border-dotted w-[265px] ">
                    Option to add protein
                  </p>
                </div>
                
                  <div className="grid md:grid-cols-2 gap-10 mt-20">
                    {salads.map((salad, index) => (
                      <div
                        key={index}
                        className="flex flex-col font-Oswald font-semibold text-[26px]"
                      >
                        <div className="flex items-center text-white">
                          <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                            {salad.name}
                          </h3>
                          <div className="flex-grow border-b border-dashed border-white mx-2"></div>
                          <span className="text-white font-semibold">
                            ${salad.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              
            )}
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
