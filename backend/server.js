import express from "express";
import orders from "./routes/orders.js";
import deliveries from "./routes/deliveries.js";


const app = express();
app.use(express.json());


app.use("/orders", orders);
app.use("/deliveries", deliveries);


app.listen(3000, () => console.log("Server running on 3000"));