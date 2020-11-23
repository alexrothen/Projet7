// ----------------------------ROUTES MESSAGES

const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')
const msgCtrl = require('../controllers/messages')

router.get('/', auth, msgCtrl.getAllMessages)
router.post('/', auth, multer, msgCtrl.createMessage)
router.get('/:id', auth, msgCtrl.getOneMessage)
router.put('/:id', auth, multer, msgCtrl.modifyMessage)
router.delete('/:id', auth, msgCtrl.deleteMessage)
router.post('/:id/like', auth, msgCtrl.likeMessage)

module.exports = router
