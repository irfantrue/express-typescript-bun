import cors from 'cors'

const corsHandler = (): any => {
  return cors({
    origin: ['*'],
    // Configures the Access-Control-Allow-Methods CORS header. Expects a comma-delimited string (ex: 'GET,PUT,POST') or an array (ex: ['GET', 'PUT', 'POST']).
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    // allowedHeaders: Configures the Access-Control-Allow-Headers CORS header. Expects a comma-delimited string (ex: 'Content-Type,Authorization') or an array (ex: ['Content-Type', 'Authorization']). If not specified, defaults to reflecting the headers specified in the request's Access-Control-Request-Headers header.
    allowedHeaders: 'Content-Type, Accept, Accept-Language, Authorization',
    // Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted.
    credentials: true,
    // Pass the CORS preflight response to the next handler.
    preflightContinue: false,
    // Provides a status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204
    optionsSuccessStatus: 204
  })
}

export default corsHandler