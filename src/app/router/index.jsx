/*
 * @Date: 2021-04-22 14:52:11
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-04-23 11:40:28
 * @description: 
 */

import {
  HashRouter as Router,
  Switch
} from "react-router-dom";

import RouteWithSubRoutes from  '../component/common/RouteWithSubRoutes'
import Index from '../pages/index'
import User from '../pages/user'
import Info from '../pages/user/info'
import edit from '../pages/user/edit'
import Footer from '../component/common/Footer'

const routes = [
  {
    path: "/user",
    component: User,
    routes: [
      {
        path: "/user/info",
        component: Info
      },
      {
        path: "/user/edit",
        component: edit
      }
    ]
  },
  {
    path: "/",
    component: Index
  },
];


export default function Routers () {
  return (
    <Router>     
      <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      <Footer></Footer>
    </Router>
  )
}

