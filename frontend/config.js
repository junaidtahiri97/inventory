// config.js
const { createClient } = supabase;

const supabaseUrl = "https://iefldtmgaeatngacmyhc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZmxkdG1nYWVhdG5nYWNteWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMzc0MzAsImV4cCI6MjA4MDcxMzQzMH0.D6GyEfLVB14ql-FyoCMdw0_MrckvlCcFWBodWSRfr4Y";

const supabaseClient = createClient(supabaseUrl, supabaseKey);
