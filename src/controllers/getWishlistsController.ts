import { SupabaseClient } from "@supabase/supabase-js";
import { Request, Response } from "express";
import getSupbase from "../repository/supbase";

export async function getWishListsController(
  _: Request,
  res: Response
): Promise<void> {
  const supabase: SupabaseClient = getSupbase();

  let { data: wishlists, error } = await supabase.from("wishlists").select("*");

  if (error) {
    res.send({
      error,
    });
  } else {
    res.send(wishlists);
  }
}
