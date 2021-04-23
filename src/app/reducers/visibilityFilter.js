/*
 * @Date: 2021-04-23 15:52:55
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-04-23 16:40:02
 * @description: 
 */

const VisibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default VisibilityFilter;