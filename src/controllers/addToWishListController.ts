import { SupabaseClient } from "@supabase/supabase-js";
import { Request, Response } from "express";
import getSupbase from "../repository/supbase";

export async function addToWishListController(
  req: Request,
  res: Response
): Promise<void> {
  const supabase: SupabaseClient = getSupbase();

  const body = req.body;

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
}
