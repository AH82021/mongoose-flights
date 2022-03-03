import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'
const router = Router()



 //localhost:3000/flights
router.get('/',flightCtrl.index)
/* GET flight listing. */

router.get('/new',flightCtrl.new)
export {
  router
}
// POST /flights
router.post('/', flightCtrl.create)

//locanhost: 3000/flights/:id
router.delete('/:id',flightCtrl.delete)


// localhost:3000/flights/:id/edit
router.get("/:id/edit", flightCtrl.edit)

router.get('/:id',flightCtrl.show)
// localhost:3000/flights/:id
router.put("/:id", flightCtrl.update)

router.post('/:id/tickets', flightCtrl.createTicktes)

