import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      
      <Link to="/" className="logo">Faiz Dev & Co.</Link>

      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
}