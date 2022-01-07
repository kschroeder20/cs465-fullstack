const express = require('express');
const router = express.Router();
// const ctrlMain = require('../controllers/trips');
const tripsController = require('../controllers/trips');

// /* GET home page. */
// router.get('/', ctrlMain.index);

/* GET trips page. */
router.get('/trips', tripsController.tripsList);

/* POST trips page. */
router.post('/trips', tripsController.tripsAddTrip);

/* PUT trips page. */
router.put('/trips/:tripCode', tripsController.tripsUpdateTrip);

/* GET trip */
router.get('/trips/:tripCode', tripsController.tripsFindByCode);


module.exports = router;