import './Navbar.css';
import logo from '../asset/Ellipse 1 (1).png'

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <h2>NFT.Ring</h2>
      <ul>
        <li>Market</li>
        <li>Activity</li>
        <li>Feature</li>
        <li>Community</li>
      </ul>
      <button>Login</button>
    </div>
  );
}

export default Navbar;
