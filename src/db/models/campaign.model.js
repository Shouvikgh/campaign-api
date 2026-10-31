const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Name is required"], trim: true },
        status: { type: String, enum: ["active", "paused"], default: "active" },
        budget: { type: Number, min: [0, "Budget cannot be negative"], default: 0 },
        creative_url: { type: String, trim: true },
        click_url: { type: String, trim: true }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const campaignModel = mongoose.model("campaign", campaignSchema);

module.exports = campaignModel;