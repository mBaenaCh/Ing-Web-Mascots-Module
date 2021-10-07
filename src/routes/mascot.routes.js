const {Router} = require('express');
const mascotController = require('../controllers/mascot.controller');
const verifyToken = require('../middlewares/token.middleware');
const {verifyRole} = require('../middlewares/role.middleware');

const router = Router();

router.post('/', verifyToken, verifyRole, mascotController.createMascot);
router.get('/', mascotController.getMascots);
router.get('/:mascotId', verifyToken, verifyRole, mascotController.getMascotById);
router.put('/:mascotId', verifyToken, verifyRole, mascotController.updateMascotById);
router.delete('/:mascotId', verifyToken, verifyRole, mascotController.deleteMascotById);

module.exports = router;