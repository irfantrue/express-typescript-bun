import morgan from 'morgan'

const morganLog = (): any => {
  return morgan('dev')
}

export default morganLog