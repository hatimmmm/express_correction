import express from "express";
import {
  allBooks,
  getBook,
  addBook,
  deleteBook,
} from "../controllers/bookController.js";
const router = express.Router();

router.get("/", allBooks); //All Books
router.get("/:id", getBook); // Get ONE book
router.post("/", addBook); // Add one book
router.post("/:id", deleteBook); // Delete one book

export default router;
