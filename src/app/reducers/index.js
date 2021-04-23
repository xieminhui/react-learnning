/*
 * @Date: 2021-04-23 15:54:43
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-04-23 16:31:03
 * @description: 
 */

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})