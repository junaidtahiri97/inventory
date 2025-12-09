import express from "express";
import supabase from "../supabase.js";


const router = express.Router();


router.post("/add", async (req, res) => {
const { order_id, qty } = req.body;


await supabase.from("deliveries").insert({ order_id, qty });


await supabase.rpc("update_stock", {
p_order_id: order_id,
p_qty: qty
});


res.json({ status: "ok" });
});


export default router;