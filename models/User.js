import mongoose from 'mongoose';

const geoSchema = new mongoose.Schema({
  lat: String,
  lng: String,
}, { _id: false });

const addressSchema = new mongoose.Schema({
  city: String,
  zipcode: String,
  geo: geoSchema,
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  address: addressSchema,
});

export default mongoose.model('User', userSchema);
