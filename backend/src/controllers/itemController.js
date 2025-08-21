import asyncHandler from "../middlewares/asyncHandler.js";
import {createMenuItemServices} from "../services/itemService.js"


const createMenuItemController = asyncHandler(async (req,res) => {
    const {menuName, itemName, description, price} = req.body;
    const item = await createMenuItemServices(menuName, itemName, description, price);
    res.status(201).json(item)
})

export {createMenuItemController}

