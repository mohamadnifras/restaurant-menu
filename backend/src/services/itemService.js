import { prisma } from "../config/prisma.js"
import CustomError from "../utils/CustomError.js"

const createMenuItemServices = async (menuName, itemName, description, price) => {
    try {
        const menu = await prisma.menu.findUnique({
            where: { name: menuName }
        });

        if (!menu) {
            throw new CustomError("Menu not found")
        }
        const existingItem = await prisma.menuItem.findUnique({
            where: { name: itemName }
        })

        if (existingItem) {
            throw new CustomError("MenuItem with this name already exists", 400)
        }

        return prisma.menuItem.create({
            data: {
                name: itemName,
                description,
                price,
                menuId: menu.id
            }
        })
    } catch (error) {
       throw new CustomError(err.message, 500)
    }
}

export { createMenuItemServices }
