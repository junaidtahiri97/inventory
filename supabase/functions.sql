create or replace function update_stock(p_order_id int, p_qty int)
returns void as $$
begin
update orders
set stock_delivered = coalesce(stock_delivered, 0) + p_qty,
stock_left = stock_ordered - (coalesce(stock_delivered, 0) + p_qty)
where id = p_order_id;
end;
$$ language plpgsql;