create table orders (
id bigint generated always as identity primary key,
design text,
stock_ordered int,
stock_delivered int default 0,
stock_left int
);


create table deliveries (
id bigint generated always as identity primary key,
order_id bigint references orders(id),
qty int,
created_at timestamp default now()
);