

import {
  Switch,
  Link
} from 'react-router-dom'

import RouteWithSubRoutes from  '../../component/common/RouteWithSubRoutes'


export default function User ({routes}) {
  return (
    <div>
      <h2>this is user page</h2>
      <ul>
        <li>
          <Link to="/user/info">Info</Link>
        </li>
        <li>
          <Link to="/user/edit">Edit</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}