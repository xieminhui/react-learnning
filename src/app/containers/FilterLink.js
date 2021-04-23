/*
 * @Date: 2021-04-23 15:33:41
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-04-23 16:13:53
 * @description: 
 */

import { connect } from 'react-redux'
import { setVisibilityFilter} from '../actions'
import Link from '../component/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)