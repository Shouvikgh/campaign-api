const express = require("express");
const controller = require("../controllers/event.controller");

const router = express.Router();

router.post("/impression", controller.recordImpression);
router.post("/click", controller.recordClick);
router.get("/summary", controller.getSummary);

module.exports = router;
