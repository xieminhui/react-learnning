/*
 * @Date: 2021-04-22 14:52:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-25 11:02:27
 * @description: 
 */

import {
  HashRouter as Router,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux'

import RouteWithSubRoutes from  '../component/common/RouteWithSubRoutes'
import Index from '../pages/index'
import User from '../pages/user'
import Info from '../pages/user/info'
import edit from '../pages/user/edit'
import Swiper from '../pages/swiper'
import Header from '../component/common/Header'

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
    path: "/swiper",
    component: Swiper
  },
  {
    path: "/",
    component: Index
  }
];


export default function Routers ({ store }) {
  return (
    <Provider store={store}>
      <Router>     
        <Header></Header>
        <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
      </Router>
    </Provider>
  )
}

