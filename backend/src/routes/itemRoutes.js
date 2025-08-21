import express from 'express'
import { createMenuItemController } from "../controllers/itemController.js"

const router = express.Router();

router.post("/", createMenuItemController)

export default router;

