const mongoose = require("mongoose")

const { Schema } = mongoose
const showtimeSchema = new mongoose.Schema(
  {
    startAt: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    movieId: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    cinemaId: {
      type: Schema.Types.ObjectId,
      ref: "Cinema",
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Showtime = mongoose.model("Showtime", showtimeSchema)

module.exports = Showtime
