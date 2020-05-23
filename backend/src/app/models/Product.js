import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

export default model("Product", ProductSchema);
