const mongoose = require("mongoose");

const expenditureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const Expenditure = mongoose.model("Expenditure", expenditureSchema);
module.exports = { Expenditure, expenditureSchema };
