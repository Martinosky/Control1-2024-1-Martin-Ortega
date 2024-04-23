import Router from 'koa-router'
import getHealth from './health/health'
import items from './items/items'

// /api/get-promotions

const router = new Router()

router.get('/health', getHealth)

router.post('/api/get-promotions', items.getPromotion)


export default router
