import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dqodxwhphxavbsthgxjt.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb2R4d2hwaHhhdmJzdGhneGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MDI2NjcsImV4cCI6MjAxMTQ3ODY2N30.yow-dYgDqgTDNzdnq-4kMKmPDdf8QK2_bVlhMf5m1ZA`;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
