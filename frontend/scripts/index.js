const { createClient } = supabase;
const client = createClient("SUPABASE_URL", "SUPABASE_ANON_KEY");


const loginDiv = document.getElementById("loginDiv");
const ordersDiv = document.getElementById("ordersDiv");
const ordersTbody = document.getElementById("ordersTbody");


async function fetchOrders() {
const { data, error } = await client.from("orders").select("*").order("id");


if (error) {
ordersTbody.innerHTML = `<tr><td colspan='5'>${error.message}</td></tr>`;
return;
}


ordersTbody.innerHTML = "";
data.forEach(o => {
ordersTbody.innerHTML += `
<tr>
<td><a onclick="viewOrder(${o.id})">${o.id}</a></td>
<td>${o.design}</td>
<td>${o.stock_ordered}</td>
<td>${o.stock_despatched}</td>
<td>${o.stock_left}</td>
</tr>`;
});
}


document.getElementById("loginBtn").onclick = async () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


const { error } = await client.auth.signInWithPassword({ email, password });
if (error) return alert(error.message);


loginDiv.style.display = "none";
ordersDiv.style.display = "block";
fetchOrders();
};


document.getElementById("logoutBtn").onclick = () => client.auth.signOut();


document.getElementById("addOrderBtn").onclick = async () => {
const design = document.getElementById("newDesign").value;
const qty = document.getElementById("newStock").value;


const { error } = await client.from("orders").insert({
design,
stock_ordered: qty,
stock_despatched: 0,
stock_left: qty
});


if (error) return alert(error.message);
fetchOrders();
};


function viewOrder(id) {
window.location.href = `/order.html?id=${id}`;
}