const ctrl = require('./test.ctrl')
const router = express.Router()

/**
 * @swagger
 *
 * /api/test:
 *   get:
 *     summary: 스웨거 테스트
 *     tags:
 *       - test
 *     description: 스웨거 테스트
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 */
router.get('/', ctrl.test)    // 테스트용
router.post('/login', ctrl.login)    // 테스트용

module.exports = router
