const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  
  cost: {
    type: String,
    required: true,
    min: 0
  },
  foodName: {
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String,
    required: true,
    trim: true
  },
  starRating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  foods: {
    type: [String],
    required: true
  },
  place: {
    type: String,
    required: true,
    trim: true
  },
  distance: {
    type: String,
    required: true,
    min: 0
  },
 
  
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
