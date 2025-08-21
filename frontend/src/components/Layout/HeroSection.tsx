import React from "react";

function HeroSection() {
  return (
    <div
      className="w-full h-[231px] md:h-[311px] bg-cover flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/Rectangle1.png')" }}
    >
      <div className="flex justify-center">
        <div className="relative">
          <h1 className="absolute top-[3px] left-[3px] oswald uppercase text-[#800020] text-[75px] leading-[100%] tracking-[0.03em]">
            menu
          </h1>
          <h1 className="relative oswald uppercase text-[#FFFFFF] text-[75px] leading-[100%] tracking-[0.03em]">
            menu
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="kelly-slab-regular">
          Please take a look at our menu featuring food, drinks, and brunch.If
          you&apos;d like to <br />{" "}
          <span>
            place an order, use the &quot;Order Online&quot; button located
            below the menu.
          </span>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
