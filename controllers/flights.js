import { Flight } from '../models/flight.js'

function newFlight(req, res) {
res.render('flights/new',{
  title : "Add Flight",
  
})

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

function index(req, res) {
  Flight.find({},(err,flights)=> {
    res.render('flights/index', {
    err:err,
  flights : flights,
    title : "All Flights"
      })
  })
}
function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect("/flights")
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', { 
      title: 'Flight Detail', 
      flight: flight,
    })
  })
}




function edit(req, res) {
  console.log('working in edit function');
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/edit', {
      flight,
      err,
      title: "Edit Flight"
    })
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight) {
    res.redirect(`/movies/${flight._id}`)
  })
}

function createTicktes(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  edit,
  show,
  update,
  createTicktes,
}