import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

export default function getSupbase() {
  dotenv.config();

  const supabaseUrl = "https://mrkjsdjaqgaqxxnyjdzj.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY as string;
  return createClient(supabaseUrl, supabaseKey);
}
