import express, { Request, Response } from "express";
import { addToWishListController } from "../controllers/addToWishListController";
import { createWishListController } from "../controllers/createWishlistController";
import { getWishListController } from "../controllers/getWishlistController";
import { getWishListsController } from "../controllers/getWishlistsController";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  res.send({
    status: 200,
    message: "Ping",
  });
});

// Fetch all wishlists
router.get("/wishlists", getWishListsController);

// Create wishlist
router.post("/wishlist", createWishListController);

// Fetch wishlist by id
router.get("/wishlist/:wishlistId", getWishListController);

// Add item to wishlist
router.post("/add_to_wishlist", addToWishListController);

export const routes = router;
