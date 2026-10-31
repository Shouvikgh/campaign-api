const mongoose = require("mongoose");
const campaignSchema= new mongoose.Schema({
    id: Number,
    name: String,
    status: String,
    budget: Number,
    creative_url: String,
    click_url: String,
    created_yet: String
})
const campaignModel=mongoose.model("campaign",campaignSchema)
module.exports =campaignModel