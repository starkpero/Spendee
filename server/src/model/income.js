const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//schema
const incomeSchema = mongoose.Schema(
  {
    title: {
      required: [true, "Title  is required"],
      type: String,
    },
    description: {
      required: [true, "Description is required"],
      type: String,
    },
    type: {
      type: String,
      default: "income",
    },
    amount: {
      required: [true, "Amount is required"],
      type: Number,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    //association , one to many
    user: {
      type: mongoose.Schema.Types.ObjectId, //MUST BE MONGODB ID
      ref: "User",
      required: [true, "User ID is required"],
    },
  },
  {
    timestamp: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);


//pagination
incomeSchema.plugin(mongoosePaginate);

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;









// toObject(): This produces a "plain" or "raw" representation of the object data without all the other "mongoose magic" parts of the extended object. But the purpose of "virtuals" is to make those methods part of the object returned. Basically just the plain object, called as:

//  var model = Model.new({ "name": { "first": "Walter", "last": "White" });
//  console.log( model.toObject() );
// toJSON(): You can call this method explicitly and just as shown above, but it's most common usage is from a JSON parser like below where it is implicitly called. The same principles apply as above. The "virtuals" includes the result of those methods in the serialized output, such as:

//  var model = Model.new({ "name": { "first": "Walter", "last": "White" });
//  JSON.stringify( model, undefined, 2 );