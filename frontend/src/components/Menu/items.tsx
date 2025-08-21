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
  const activeMenu = menus.find((menu) => menu.name === active);

  return (
    <div className="w-full h-[1098px] md:h-full md:p-6 lg:p-10">
      <div className="border border-[#C5A059] p-4 md:p-6 lg:p-10">
        {activeMenu ? (
          <>
            <div className="flex justify-center items-center space-x-2 md:space-x-4">
              <div className="w-12 md:w-20 bg-amber-50 h-[1px] md:h-[2px]"></div>
              <div className="relative">
                <h1 className="absolute top-1 left-0 font-Oswald font-semibold uppercase text-[#800020] text-2xl md:text-5xl lg:text-[75px] leading-tight tracking-[0.03em]">
                  {activeMenu.description}
                </h1>
                <h1 className="relative font-Oswald font-semibold uppercase text-white text-2xl md:text-5xl lg:text-[75px] leading-tight tracking-[0.03em]">
                  {activeMenu.description}
                </h1>
              </div>
              
              <div className="w-12 md:w-20 bg-amber-50 h-[1px] md:h-[2px]"></div>
            </div>

            <div className="w-full px-2 md:px-6 py-6 md:py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {activeMenu.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col font-Oswald font-semibold"
                  >
                    <div className="flex items-center text-white">
                      <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <div className="flex-grow border-b border-dashed border-white mx-2"></div>
                      <span className="text-white font-semibold">
                        ${item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="kelly-slab-regular mt-1 text-sm md:text-base">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {activeMenu.name === "FOOD" && (
              <div className="border border-dotted border-white p-4 md:p-6 lg:p-8 mt-6 md:mt-10">
                <div className="flex justify-center p-2 md:p-4">
                  <div className="relative">
                    <h1 className="absolute top-[2px] left-[2px] font-Oswald font-semibold uppercase text-[#800020] text-3xl md:text-4xl lg:text-[50px] leading-tight tracking-[0.03em]">
                      salads
                    </h1>
                    <h1 className="relative font-Oswald font-semibold uppercase text-white text-3xl md:text-4xl lg:text-[50px] leading-tight tracking-[0.03em]">
                      salads
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center -mt-2">
                  <p className="kelly-slab-regular border-b border-dotted w-[200px] md:w-[265px] text-sm md:text-base">
                    Option to add protein
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-10">
                  {salads.map((salad, index) => (
                    <div
                      key={index}
                      className="flex flex-col font-Oswald font-semibold"
                    >
                      <div className="flex items-center text-white">
                        <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide">
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
          </>
        ) : (
          <p className="text-gray-500 text-center py-10">
            Select a menu to see items
          </p>
        )}
      </div>
    </div>
  );
}

export default Items;
