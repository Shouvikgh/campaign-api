const express = require('express');
const app = express();
const campaignModel = require("./db/models/campaign.model")
app.use(express.json());

app.post("/campaign",async(req,res)=>{ //edike async await use korar karon hoilo amra amader database internet er maddhome create kortesi
    const data = req.body //ami jei data pathabo sheta data variable e store korbe
    await campaignModel.create({
        id: data.id, //eidike ja lekha ase er mane hoilo ami req.body te jei nam gula dibo shegula ekhane store hobe
        name: data.name,
        status: data.status,
        budget: data.budget,
        creative_url: data.creative_url,
        click_url: data.click_url,
        created_yet: data.created_yet
    })
    res.status(201). json({
        message: "Campaign created successfully"
    })
})
app.get("/campaign", async(req,res)=>{
    const campaign = await campaignModel.find() //amar jotogula campaign ase shob gula dekhabe
    res.status(200).json({
        message: "campaign fetched successfully",
        campaign: campaign //campaign db er data guli return korbe
    })

})
app.delete("/campaign/:id",async(req,res)=>{
    const id = req.params.id //amader jekono value er jei id guli ase shegula edike store hobe
    await campaignModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message: "Campaign deleted successfully"
    })
})
app.patch("/campaign/:id", async(req,res)=>{
    const id = req.params.id
    const budget = req.body.budget
    await campaignModel.findOneAndUpdate({_id:id}, {budget:budget})
    res.status(200).json({
        message: "Campaign updated successfully"
    })
})
    

module.exports = app //server.js er sathe connect er jonno lekhsi