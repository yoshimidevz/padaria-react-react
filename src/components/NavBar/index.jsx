import "./styles.css";

import { Link } from 'react-router-dom'; 

export function NavBar() {
  return (
    <ul id="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Historia">História</Link>
      </li>
      <li>
        <Link to="/Galeria">Galeria</Link>
      </li>
      <li>
        <Link to="/Contato">Contato</Link>
      </li>
    </ul>
  );
}

export default NavBar;
