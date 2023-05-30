import mongoose from "mongoose";

const PetitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    unique: true,
  },
  requiredSignatures: {
    type: Number,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  signatures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Signature",
    },
  ],
});

export const PetitionModel = mongoose.model("Petition", PetitionSchema);
