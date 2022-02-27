import mongoose from "mongoose";

// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
const flightSchema = new Schema({
  airline: {
		type: String,
		enum: [ 'American', 'Southwest', 'United' ]
	},airport: {
		type: String,
		enum: [ 'AUS', 'DAL', 'LAX', 'SAN' ]
	},
  flightNo: {
		type: Number,
		min: 10,
		max: 9999
	},departs: {
		type: Date,
	}
});


//Compile the schema into a model and export it 
const Flight = mongoose.model('Flight',flightSchema);



export{
  Flight
}