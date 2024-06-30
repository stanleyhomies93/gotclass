// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cqyykwiqzujnqhnatuue.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxeXlrd2lxenVqbnFobmF0dXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3NjQ4NDEsImV4cCI6MjAzNTM0MDg0MX0.7lAYeY8eqp7dQM5tq3ZmnCwJjtW2sPAPSkm0CgwgYZk'; // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
