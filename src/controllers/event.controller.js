const eventModel = require("../db/models/event.model");

async function recordImpression(req, res) {
    const { campaign_id, creative_id } = req.body || {};
    await eventModel.create({
        type: "impression",
        campaign: campaign_id,
        creative: creative_id
    });
    res.status(201).json({ message: "Impression recorded" });
}

async function recordClick(req, res) {
    const { campaign_id, creative_id } = req.body || {};
    await eventModel.create({
        type: "click",
        campaign: campaign_id,
        creative: creative_id
    });
    res.status(201).json({ message: "Click recorded" });
}

async function getSummary(req, res) {
    const campaignId = req.query.campaign;
    if (!campaignId) {
        return res.status(400).json({ error: "campaign query parameter is required" });
    }

    const impressions = await eventModel.countDocuments({ campaign: campaignId, type: "impression" });
    const clicks = await eventModel.countDocuments({ campaign: campaignId, type: "click" });

    res.status(200).json({ impressions, clicks });
}

module.exports = { recordImpression, recordClick, getSummary };