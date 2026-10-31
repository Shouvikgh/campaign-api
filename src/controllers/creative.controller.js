const creativeModel = require("../db/models/creative.model");
const campaignModel = require("../db/models/campaign.model");

async function createCreative(req, res) {
    const { campaign, name, headline, tail, description, cta_text, image_url, click_url } = req.body || {};

    if (campaign) {
        const campaignExists = await campaignModel.exists({ _id: campaign });
        if (!campaignExists) {
            return res.status(404).json({ error: "Campaign not found" });
        }
    }

    const creative = await creativeModel.create({
        campaign, name, headline, tail, description, cta_text, image_url, click_url
    });
    res.status(201).json(creative);
}

async function getCreatives(req, res) {
    const filter = {};
    if (req.query.campaign) {
        filter.campaign = req.query.campaign;
    }
    const creatives = await creativeModel.find(filter).sort({ created_at: -1 });
    res.status(200).json(creatives);
}

async function getCreative(req, res) {
    const creative = await creativeModel.findById(req.params.id);
    if (!creative) {
        return res.status(404).json({ error: "Creative not found" });
    }
    res.status(200).json(creative);
}

module.exports = { createCreative, getCreatives, getCreative };