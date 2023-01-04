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

  let { data: wishlistItems, error: wishlistItemsError } = await supabase
    .from("wishlist_items")
    .select("*")
    .eq("wishlist_id", req.params.wishlistId);

  if (wishlist && wishlist.length > 0 && !error && !wishlistItemsError) {
    const { id, name } = wishlist[0];
    res.send({ id, name, items: wishlistItems });
  } else if (wishlistItemsError) {
    res.send({
      wishlistItemsError,
    });
  } else {
    res.send({
      error,
    });
  }
}
