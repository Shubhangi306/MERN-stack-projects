const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = {
   title: {
      type: String,
      required: true
   },
   body: {
      type: String,
      required: true
   },
   image: {
      data: Buffer,
      contentType: String
  },
   author: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }
};

const PostSchema = new Schema(post);

module.exports = mongoose.model("posts", PostSchema);