const mongoose = require("mongoose");

const creativeSchema = new mongoose.Schema(
    {
        campaign: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "campaign",
            required: [true, "Campaign is required"]
        },
        name: { type: String, required: [true, "Name is required"], trim: true },
        headline: { type: String, required: [true, "Headline is required"], trim: true },
        tail: { type: String, trim: true },
        description: { type: String, trim: true },
        cta_text: { type: String, default: "Shop Now", trim: true },
        image_url: { type: String, trim: true },
        click_url: { type: String, trim: true }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const creativeModel = mongoose.model("creative", creativeSchema);

module.exports = creativeModel;