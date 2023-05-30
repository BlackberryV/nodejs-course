import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  passportId: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  petitions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Petition",
    },
  ],
});

export const UserModel = mongoose.model("User", UserSchema);
