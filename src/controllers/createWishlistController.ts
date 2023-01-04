import { SupabaseClient } from "@supabase/supabase-js";
import { Request, Response } from "express";
import getSupbase from "../repository/supbase";

export async function createWishListController(
  req: Request,
  res: Response
): Promise<void> {
  const supabase: SupabaseClient = getSupbase();

  const body = req.body;

  const { error } = await supabase
    .from("wishlists")
    .insert([{ name: body.name }]);

  if (error) {
    res.send({
      error,
    });
  } else {
    res.send({ status: 200 });
  }
}
