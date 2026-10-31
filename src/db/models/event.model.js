const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        type: { type: String, enum: ["impression", "click"], required: [true, "Type is required"] },
        campaign: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "campaign",
            required: [true, "campaign_id is required"]
        },
        creative: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "creative",
            required: [true, "creative_id is required"]
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: false } }
);

const eventModel = mongoose.model("event", eventSchema);

module.exports = eventModel;