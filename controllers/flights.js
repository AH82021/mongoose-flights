import { Flight } from '../models/flight.js'

function newFlight(req, res) {
 res.render('flights/new')
// const newFlight = new Flight();
// // Obtain the default date
// const dt = newFlight.departs;
// // Format the date for the value attribute of the input
// const departsDate = dt.toISOString().slice(0, 16);
// res.render('flights/new', {departsDate});
}


function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean

    if (req.body.cast) {
      // remove whitespace next to commas
      req.body.cast = req.body.cast.split(', ')
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/flights/new')
      // for now, redirect right back to new.ejs
      res.redirect('/flights')
    })

}

function index(req, res){
 Flight.find({},(err,flights)=>{
res.render('flights/index',{
  flights
})
  })
}



export {
  newFlight as new,
  create,
  index
}