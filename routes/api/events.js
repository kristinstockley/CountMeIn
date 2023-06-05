const express = require('express');
const router = express.Router();
const eventsController = require('../../controllers/api/events');
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/events
router.get('/', eventsController.index);
router.post('/', eventsController.create);
router.get('/:id', eventsController.detail);
router.delete('/:id', eventsController.deleteEvent);
router.put('/:id', eventsController.update)

module.exports = router;