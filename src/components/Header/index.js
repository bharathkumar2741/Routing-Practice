import {Link} from 'react-router-dom'
import './index.css'
const Header = () => (
  <nav className="nav">
    <div className="bg1">
      <img
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1>Wave</h1>
    </div>
    <ul className="items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)
export default Header
