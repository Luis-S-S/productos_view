import { Link } from 'react-router-dom';
import '../../App.css';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="header">
        <Link className="header__link" to="/">Home</Link>
        <Link className="header__link" to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
