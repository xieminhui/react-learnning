/*
 * @Date: 2021-04-22 11:00:33
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-04-23 16:58:58
 * @description: 
 */
// import logo from './logo.svg';
import './App.css';
import Routers from './app/router'
import { createStore } from 'redux'
import rootReducer from './app/reducers'
const store = createStore(rootReducer);

function App() {
  return (
    <Routers store={store} />
  )
}

export default App;
