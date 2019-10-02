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
router.post('/redundancy_check', ctrl.redundancy_check)    // 테스트용
router.post('/login', ctrl.login)    // 테스트용
router.post('/overview', ctrl.overview)    // 테스트용
router.post('/data_search_id', ctrl.data_search_id)    // 테스트용
router.post('/data_search', ctrl.data_search)    // 테스트용
router.post('/data_search_detail', ctrl.data_search_detail)    // 테스트용
router.post('/graph_odu', ctrl.graph_odu)    // 테스트용
router.post('/graph_idu', ctrl.graph_idu)    // 테스트용
router.post('/graph_hru', ctrl.graph_hru)    // 테스트용
router.post('/graph_calolimeter', ctrl.graph_calolimeter)    // 테스트용
router.post('/graph_sidu_casecade', ctrl.graph_sidu_casecade)    // 테스트용
router.post('/graph_sidu_dxc', ctrl.graph_sidu_dxc)    // 테스트용
router.post('/graph_sidu_fau', ctrl.graph_sidu_fau)    // 테스트용
router.post('/graph_sidu_showcase', ctrl.graph_sidu_showcase)    // 테스트용
router.post('/graph_sidu_whu', ctrl.graph_sidu_whu)    // 테스트용


module.exports = router
