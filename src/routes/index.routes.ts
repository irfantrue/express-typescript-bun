import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (_: Request, res: Response): Response => {
  return res.json({
    status: true,
    message: 'OK',
    result: 'Welcome Rest API Bun V1'
  })
})

export default router