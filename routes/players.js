const express = require('express');
const router = express.Router();

const playerService = require('../services/playerService');

router.get('/all', playerService.getAll);
router.get('/:id', playerService.getOne);
router.post('/add', playerService.add);
router.delete('/:id', playerService.delete);
router.put('/:id', playerService.update);

module.exports = router;
