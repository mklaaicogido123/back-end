const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let Notification = mongoose.model("Notification", notificationSchema);

module.exports = { Notification };
