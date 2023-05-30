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
  petitions: [ //що він створив
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Petition",
    },
  ],
signatures: [ //за які проголосував
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signature",
  },
],
});
export const UserModel = mongoose.model("User", UserSchema);
