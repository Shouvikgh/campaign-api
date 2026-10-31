const express = require("express");
const controller = require("../controllers/creative.controller");

const router = express.Router();

router.get("/", controller.getCreatives);
router.post("/", controller.createCreative);
router.get("/:id", controller.getCreative);

module.exports = router;