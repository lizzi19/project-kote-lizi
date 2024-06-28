const express = require('express');
const router = express.Router();

const teamService = require('../services/teamService');

router.get('/all', teamService.getAll);
router.get('/:id', teamService.getOne);
router.post('/add', teamService.add);
router.delete('/:id', teamService.delete);
router.put('/:id', teamService.update);

module.exports = router;
