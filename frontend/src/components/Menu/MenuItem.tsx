import Image from 'next/image'
import React from 'react'
import Items from './items';
import {Menu} from "../../redux/slices/menuSlice"



type MenuItemProps = {
    menus: Menu[]
  active: string | null; 
};

function MenuItem({ active,menus }: MenuItemProps) {
    
    
  return (
    <div 
    className='w-full h-[1164px] flex justify-between '
    style={{backgroundImage:"url('/images/menu-item-img.png')"}}>
     <Image
        src="/images/menu-item-img2.png"
        alt="Image 1"
        width={200}
        height={1164}
        className=""
      />
      <Items active={active} menus={menus}/>
      <Image
        src="/images/menu-item-img1.png"
        alt="Image 2"
        width={200}
        height={1164}
        className=""
      />
    </div>
  )
}

export default MenuItem