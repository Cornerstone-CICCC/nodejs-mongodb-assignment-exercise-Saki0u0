import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  productName:string;
  productPrice:Number;
}

const ProductSchema: Schema = new Schema({
  courseName: { type:String },
  productPrice:{ type:Number }
})

export const Product = mongoose.model<IProduct>('Product',ProductSchema)