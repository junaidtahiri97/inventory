import express from "express";
import supabase from "../supabase.js";


const router = express.Router();


router.get("/", async (req, res) => {
const { data, error } = await supabase.from("orders").select("*");
if (error) return res.status(400).json({ error });
res.json(data);
});


router.post("/", async (req, res) => {
const { design, qty } = req.body;
const { data, error } = await supabase.from("orders").insert({
design,
stock_ordered: qty,
stock_delivered: 0,
stock_left: qty
});
if (error) return res.status(400).json({ error });
res.json(data);
});


export default router;