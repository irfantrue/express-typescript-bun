import {
  Router,
  type Request,
  type Response
} from 'express'

const router = Router()

router.get('/', (_req: Request, res: Response): Response => {
  return res.json({
    status: true,
    message: 'OK',
    result: 'Welcome Bun API'
  })
})

export default router
