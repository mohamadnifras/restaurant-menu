import asyncHandler from "../middlewares/asyncHandler.js";
import {createNewMenu,getAllMenus} from "../services/menuService.js"

const getMenus = asyncHandler(async(req,res)=>{
     const menus = await getAllMenus();
    res.status(200).json(menus);

})

const createMenu  = asyncHandler(async(req,res)=>{
const {name,description } = req.body;
const menu = await createNewMenu(name,description);
res.status(201).json(menu);
});


export {createMenu,getMenus }