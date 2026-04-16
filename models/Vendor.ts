import mongoose, { Schema, Document } from "mongoose";

export interface IVendor extends Document {
  ownerId: mongoose.Types.ObjectId;
  name: string;
  description: string;
  category: string;
  image?: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  isOpen: boolean;
  rating: number;
  numRatings: number;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

const VendorSchema: Schema = new Schema(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      address: { type: String, required: true },
    },
    isOpen: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    numRatings: { type: Number, default: 0 },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Vendor || mongoose.model<IVendor>("Vendor", VendorSchema);
