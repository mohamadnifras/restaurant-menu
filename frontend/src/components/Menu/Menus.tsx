"use client";
import React, { useEffect, useState } from "react";
import { fetchMenus } from "../../redux/slices/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/app/store";
import MenuItem from "./MenuItem";

function Menus() {
  const [active, setActive] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const { menus, loading, error } = useSelector(
    (state: RootState) => state.menu
  );
  console.log(menus)

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  if (loading) return <div className="text-center py-4">Loading menus...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">{error}</div>;

  return (
    <>
      <div
        className="w-full h-[79px] flex justify-center items-center"
        style={{ backgroundImage: "url('/images/menu-bg-img.png')" }}
      >
        <div className=" space-x-3 font-Oswald  font-semibold ">
          {menus.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.name)}
              className={`w-[114px] h-[49px] uppercase text-[16px] border border-[#C5A059] 
              ${
                active === item.name
                  ? "bg-[#C5A059] text-black"
                  : "bg-black text-white hover:bg-[#C5A059] hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <MenuItem active={active} menus={menus}/>
    </>
  );
}

export default Menus;
