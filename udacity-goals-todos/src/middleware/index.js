import checker from './checker'
import logger from './logger'
import thunk from 'react-thunk'
import { applyMiddleware } from 'redux'

applyMiddleware(
  thunk,
  checker,
  logger
)

export default applyMiddleware
