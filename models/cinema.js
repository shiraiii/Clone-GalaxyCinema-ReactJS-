const mongoose = require("mongoose")

const { Schema } = mongoose
const cinemaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  tiketPrice: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  seats: {
    type: [Schema.Types.Mixed],
    required: true,
  },
  seatsAvailable: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
})

const Cinema = mongoose.model("Cinema", cinemaSchema)

module.exports = Cinema
