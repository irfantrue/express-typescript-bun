import bodyParser from 'body-parser'
import express, { NextFunction, Request, Response } from 'express'
import compression from 'compression'
import * as mongoDatabase from 'mongoDatabase'
import morganLog from 'morganConfig'
import handlerHelmet from 'helmetConfig'
import staticFile from 'staticConfig'
import corsHandler from 'staticConfig'
import router from 'routes'
const app = express()

// mongoDatabase.connect()

app.set('trust proxy', true)
app.use(handlerHelmet())
app.use(corsHandler())
app.use(staticFile())
app.use(morganLog())
app.use(compression())
app.use(bodyParser())
app.use(router)

app.use((err: Error, _: Request, res: Response) => {
  return res.status(500).json({
    status: false,
    message: 'Internal Server Error',
    errors: err
  })
})

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    status: false,
    message: 'Not Found',
    errors: err
  })
})

app.listen(3000, () => {
  console.info('Server listening on port 3000')
})