import mongoose from 'mongoose';
const { Schema } = mongoose;

const itemSchema = new Schema({
  description:  { type: String, required: true },
  date: { type: Date, default: Date.now }
});