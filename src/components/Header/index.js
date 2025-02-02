import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="nav-container">
    <Link to="/" className="nav-link">
      <li className="list-item">Home</li>
    </Link>
    <Link to="/about" className="nav-link">
      <li className="list-item">About</li>
    </Link>
  </ul>
)

export default Header
