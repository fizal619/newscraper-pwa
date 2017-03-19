import { combineReducers } from 'redux'

import news from './news'
import ui from './ui'

export default combineReducers({
  news,
  ui
})