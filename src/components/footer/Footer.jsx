import './Footer.css';
import second from '../asset/Ellipse 1 (1).png'

function Footer() {
  return (
    <div>
      <footer className="footer">
    <div className="footer-column">
       <div className="logo_name">
       <img src={second} alt="" />
       <h2>NFT.Ring</h2> 
       </div>
        <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.</p>
    </div>

    <div className="footer-column">
      <h3>Marketplace</h3>
      <ul>
        <li>All NFTs</li>
        <li>New</li>
        <li>Art</li>
        <li>Music</li>
        <li>Domain Names</li>
        <li>Virtual Worlds</li>
        <li>Trading Cards</li>
        <li>Collectibles</li>
        <li>Sports</li>
        <li>Utility</li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>My Account</h3>
      <ul>
        <li>My Profile</li>
        <li>My Collections</li>
        <li>My Favorites</li>
        <li>My Account Settings</li>
        <li>About</li>
        <li>Careers</li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Resources</h3>
      <ul>
        <li>Help Center</li>
        <li>Partners</li>
        <li>Suggestions</li>
        <li>Discord Community</li>
        <li>Blog</li>
        <li>Docs</li>
        <li>Newsletter</li>
      </ul>
    </div>
  </footer>
  <br /><br /><br /> <br /> <br />
    </div>
  );
}

export default Footer;
