import mongoose from "mongoose";

// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
const flightSchema = new Schema({
  airline: {
		type: String,
		enum: [ 'American', 'Southwest', 'United' ]
	},airport: {
		type: String,
		enum: [ 'AUS', 'DFW', 'DEN', 'LAX','SAN' ]
	},
  flightNo: {
		type: Number,
		min: 10,
		max: 9999
	},departs: {
		type: Date,
		// default: function(){
		// 	return new Date().currentDate()

		// }
	}
});


//Compile the schema into a model and export it 
const Flight = mongoose.model('Flight',flightSchema);



export{
  Flight
}