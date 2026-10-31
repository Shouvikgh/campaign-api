const campaignModel = require("../db/models/campaign.model");

async function createCampaign(req, res) {
    const { name, status, budget, creative_url, click_url } = req.body || {};
    const campaign = await campaignModel.create({ name, status, budget, creative_url, click_url });
    res.status(201).json(campaign);
}

async function getCampaigns(req, res) {
    const campaigns = await campaignModel.find().sort({ created_at: -1 });
    res.status(200).json(campaigns);
}

async function getCampaign(req, res) {
    const campaign = await campaignModel.findById(req.params.id);
    if (!campaign) {
        return res.status(404).json({ error: "Campaign not found" });
    }
    res.status(200).json(campaign);
}

async function updateCampaign(req, res) {
    const campaign = await campaignModel.findByIdAndUpdate(
        req.params.id,
        req.body || {},
        { new: true, runValidators: true }
    );
    if (!campaign) {
        return res.status(404).json({ error: "Campaign not found" });
    }
    res.status(200).json(campaign);
}

async function deleteCampaign(req, res) {
    const campaign = await campaignModel.findByIdAndDelete(req.params.id);
    if (!campaign) {
        return res.status(404).json({ error: "Campaign not found" });
    }
    res.status(200).json({ message: "Campaign deleted successfully" });
}

module.exports = {
    createCampaign,
    getCampaigns,
    getCampaign,
    updateCampaign,
    deleteCampaign
};