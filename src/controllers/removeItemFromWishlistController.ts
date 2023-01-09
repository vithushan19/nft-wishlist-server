import { SupabaseClient } from "@supabase/supabase-js";
import { Request, Response } from "express";
import getSupbase from "../repository/supbase";

export async function removeItemFromWishlistController(
  req: Request,
  res: Response
): Promise<void> {
  const supabase: SupabaseClient = getSupbase();

  const body = req.body;

  const { data, error } = await supabase
    .from("wishlist_items")
    .delete()
    .eq("id", body.id);

  if (error) {
    res.send({
      error,
    });
  } else {
    res.send({
      status: 200,
      message: "Deleted item",
    });
  }
}
