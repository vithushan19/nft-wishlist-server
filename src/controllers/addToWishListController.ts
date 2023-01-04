import { SupabaseClient } from "@supabase/supabase-js";
import { Request, Response } from "express";
import getSupbase from "../repository/supbase";

export async function addToWishListController(
  req: Request,
  res: Response
): Promise<void> {
  const supabase: SupabaseClient = getSupbase();

  const body = req.body;

  let { data: wishlist_items, error: fetchError } = await supabase
    .from("wishlist_items")
    .select("*")
    .eq("contract_address", body.contract_address)
    .eq("token_id", body.token_id)
    .eq("wishlist_id", body.wishlist_id);

  if (fetchError) {
    res.send({
      fetchError,
    });
  } else if (!wishlist_items) {
    res.send({
      error: "Error: Could not fetch wishlist items",
    });
  } else if (wishlist_items.length === 0) {
    const { error } = await supabase.from("wishlist_items").insert([
      {
        contract_address: body.contract_address,
        token_id: body.token_id,
        wishlist_id: body.wishlist_id,
      },
    ]);

    if (error) {
      res.send({
        error,
      });
    } else {
      res.send({ status: 200 });
    }
  } else {
    res.send({ error: "Error: duplicate item already exists in wishlist" });
  }
}
