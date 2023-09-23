import { join } from 'path'
import serveStatic from 'serve-static'

const staticFile = (): any => {
  return serveStatic(join(__dirname, '../../public'))
}

export default staticFile