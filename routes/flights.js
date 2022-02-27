import { Router } from 'express'
import * as flightCtrl from '../controllers/flights.js'
const router = Router()



 //localhost:3000
router.get('/',flightCtrl.index)
/* GET flight listing. */

router.get('/new',flightCtrl.new)
export {
  router
}
// POST /flights
router.post('/', flightCtrl.create)
