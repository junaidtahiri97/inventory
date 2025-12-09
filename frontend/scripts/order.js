const { createClient } = supabase;
const client = createClient("SUPABASE_URL", "SUPABASE_ANON_KEY");


const params = new URLSearchParams(window.location.search);
const orderId = params.get("id");


async function loadOrder() {
const { data } = await client.from("orders").select("*").eq("id", orderId).single();
document.getElementById("orderInfo").innerHTML = `
<p><strong>Design:</strong> ${data.design}</p>
<p><strong>Ordered:</strong> ${data.stock_ordered}</p>
<p><strong>Delivered:</strong> ${data.stock_despatched}</p>
<p><strong>Left:</strong> ${data.stock_left}</p>
`;
}


async function loadDeliveries() {
const { data } = await client.from("deliveries").select("*").eq("order_id", orderId);


const table = document.getElementById("deliveryTable");
table.innerHTML = "";


data.forEach(d => {
table.innerHTML += `
<tr>
<td>${d.id}</td>
<td>${d.qty}</td>
<td>${d.created_at}</td>
</tr>`;
});
}


document.getElementById("addDeliveryBtn").onclick = async () => {
const qty = parseInt(document.getElementById("deliveryQty").value);


await client.from("deliveries").insert({ order_id: orderId, qty });
loadDeliveries();