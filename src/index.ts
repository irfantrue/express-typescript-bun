import express, {
  type Express,
  type Request,
  type Response,
  NextFunction,
  urlencoded,
  json
} from 'express'
import indexRouter from 'routes'

const app: Express = express()

app.set('trust proxy', true)
app.use(json(
  {
    type: [
      'application/json',
      'application/csp-report',
      'application/reports+json'
    ]
  }
))
app.use(urlencoded({ extended: false }))
app.use(indexRouter)

app.use((err: Error, _req: Request, res: Response) => {
  return res.status(500).json({
    status: false,
    message: 'INTERNAL SERVER ERROR',
    errors: err
  })
})

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(404).json({
    status: false,
    message: 'NOT FOUND',
    errors: err
  })
})

app.listen(3000, () => {
  console.info(`Running on PORT 3000`);
})
