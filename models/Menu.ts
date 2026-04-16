import mongoose, { Schema, Document } from "mongoose";

export interface IMenuItem extends Document {
  vendorId: mongoose.Types.ObjectId;
  name: string;
  price: number;
  description?: string;
  image?: string;
  isAvailable: boolean;
  isVeg: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const MenuItemSchema: Schema = new Schema(
  {
    vendorId: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    isAvailable: { type: Boolean, default: true },
    isVeg: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.MenuItem || mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);
