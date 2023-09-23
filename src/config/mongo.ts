import mongoose from 'mongoose'
import { mongodb } from 'bible'

let connection: mongoose.Connection | undefined

export const connect = () => {
  if (connection != null) {
    console.warn('Mongodb connection already established')
    return
  }

  mongoose.connect(mongodb)
    .then(() => {
      connection = mongoose.connection
      console.log('Connected to Mongodb')
    })
    .catch((error) => {
      console.error('Error connecting to Mongodb', error)
    })
}

export const getConnection = () => {
  return connection
}

export const disconnect = () => {
  if (connection != null) {
    connection.close()
      .then(() => {
        console.log('Mongodb connection closed.')
      })
      .catch((error) => {
        console.error('Error closing Mongodb connection')
      })
  }
}
