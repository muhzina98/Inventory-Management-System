import { Router } from "express";
import { addNewItem, inventoryStatus, listAllItems, serverStatus } from "../controller/inventoryController.js";

const router= Router();

router.route('/').get(inventoryStatus);
router.route('/health').get(serverStatus);
router.route('/items').post(addNewItem);
router.route('/items').get(listAllItems)

export default router
