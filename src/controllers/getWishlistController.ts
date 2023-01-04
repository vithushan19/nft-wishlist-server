import { SupabaseClient } from "@supabase/supabase-js";
import { Request, Response } from "express";
import getSupbase from "../repository/supbase";

export async function getWishListController(
  req: Request,
  res: Response
): Promise<void> {
  const supabase: SupabaseClient = getSupbase();

  let { data: wishlist, error } = await supabase
    .from("wishlists")
    .select("*")
    .eq("id", req.params.wishlistId);

  if (error) {
    res.send({
      error,
    });
  } else {
    res.send(wishlist);
  }
}
