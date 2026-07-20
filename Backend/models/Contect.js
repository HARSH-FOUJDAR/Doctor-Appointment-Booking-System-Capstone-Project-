const mongoose = require("mongoose");

const contectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    MobileNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
