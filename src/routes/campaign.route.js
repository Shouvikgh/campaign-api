const express = require("express");
const controller = require("../controllers/campaign.controller");

const router = express.Router();

router.get("/", controller.getCampaigns);
router.post("/", controller.createCampaign);
router.get("/:id", controller.getCampaign);
router.put("/:id", controller.updateCampaign);
router.patch("/:id", controller.updateCampaign);
router.delete("/:id", controller.deleteCampaign);

module.exports = router;