import mongoose from "mongoose";

const File = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: Array, required: true },
});

const FileSchema = mongoose.model("File", File);

export default FileSchema;
