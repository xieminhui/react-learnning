import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions'

export default function Index (){
  return (
    <div>
      <h2>this is index page</h2>
      <p>react redux demo:</p>

      <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  )
}