import express from "express";
import File from "../mongodb/models/file.js";

const router = express.Router();

// GET ALL FILES
router.route("/").get(async (req, res) => {
  try {
    const files = await File.find({});
    res.status(200).json({ success: true, data: files });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// UPLOAD A FILE
router.route("/").post(async (req, res) => {
  try {
    const { name, content } = req.body;

    const newFile = await File.create({
      name,
      content,
    });

    res.status(201).json({ success: true, data: newFile });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
