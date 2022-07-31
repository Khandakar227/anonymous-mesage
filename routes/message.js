//@ts-check
import express from 'express';
import handler from "../handlers/messageHandler.js";
import rootHandler from "../handlers/rootHandler.js"

const router = express.Router();

router.get("", rootHandler);
router.post("/message", handler);

export default router;