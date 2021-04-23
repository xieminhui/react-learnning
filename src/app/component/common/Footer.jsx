

import {
  Link
} from "react-router-dom";
export default function footer () {
  return (
    <>   
    <p>i am footer</p>
    <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </>
  )
}