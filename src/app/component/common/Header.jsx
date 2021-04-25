

import {
  Link
} from "react-router-dom";
import './Header.less'

export default function footer () {
  return (
    <div className="footer">   
      <p>i am footer</p>
      <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/swiper">Swiper</Link>
          </li>
        </ul>
    </div>
  )
}