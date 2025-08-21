import {prisma} from '../config/prisma.js'
import CustomError from '../utils/CustomError.js';


 const createNewMenu = async (name, description) => {
  const existingMenu = await prisma.menu.findUnique({
    where: { name }
  });

  if (existingMenu) {
    throw new CustomError("Menu with this name already exists", 400);
  }

  try {
    const menu = await prisma.menu.create({
      data: { name, description },
    });
    return menu;
  } catch (err) {
    throw new CustomError(err.message, 500);
  }
};

const getAllMenus = async()=>{
return await prisma.menu.findMany({
    include:{items:true}
});
};

export {createNewMenu, getAllMenus}



