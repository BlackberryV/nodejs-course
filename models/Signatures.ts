import mongoose from "mongoose";

const SignaturesSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
    petition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Petition",
      required: true,
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
  });
  
  export const SignaturesModel = mongoose.model("Signature", SignaturesSchema);
  