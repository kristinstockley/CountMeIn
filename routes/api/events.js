const express = require('express');
const router = express.Router();
const eventsController = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/events
router.get('/', ensureLoggedIn, eventsController.index);
router.post('/', ensureLoggedIn, eventsController.create);
router.get('/:id', ensureLoggedIn, eventsController.detail);
router.delete('/:id', ensureLoggedIn, eventsController.deleteEvent);
router.put('/:id', ensureLoggedIn, eventsController.update)

module.exports = router;