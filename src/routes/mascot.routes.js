const {Router} = require('express');
const mascotController = require('../controllers/mascot.controller');

const router = Router();

router.post('/', mascotController.createMascot);
router.get('/', mascotController.getMascots);
router.get('/:mascotId', mascotController.getMascotById);
router.put('/:mascotId', mascotController.updateMascotById);
router.delete('/:mascotId', mascotController.deleteMascotById);

module.exports = router;