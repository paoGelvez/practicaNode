const express = require ('express')
const controller = require('../contollers/user')
const router = express.Router()

const path = 'user'

router.get(
    `/${path}`,
    controller.getData
)

/*le decimos exportame todo esto para que pueda ser llamado en otro componenteen otro archivo aparte  */
module.exports = router