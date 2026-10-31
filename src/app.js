const express = require("express");
const cors = require("cors");
const campaignRoutes = require("./routes/campaign.route");
const creativeRoutes = require("./routes/creative.route");
const eventRoutes = require("./routes/event.route");

const app = express();

const allowedOrigins = (process.env.FRONTEND_URLS || "http://localhost:5500")
    .split(",")
    .map((origin) => origin.trim());

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use("/campaigns", campaignRoutes);
app.use("/creatives", creativeRoutes);
app.use("/events", eventRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
        return res.status(400).json({ error: err.message });
    }
    if (err.name === "CastError") {
        return res.status(400).json({ error: "Invalid id" });
    }
    console.error(err);
    res.status(500).json({ error: "Something went wrong on the server" });
});

module.exports = app;