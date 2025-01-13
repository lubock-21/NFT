import './PartFour.css';
import rasm from '../asset/Rectangle 22.png';
import img from '../asset/Group 5.png';
import imgg from '../asset/Group 6 (1).png';
import foto from '../asset/Rectangle 20.png';

function PartFour() {
  return (
    <div className="part_four">
      <h1>Now With More News and Blogs</h1>
      <p>
        This NFT website is a website that features buying and selling, news and <br />
        blogs. Designed with a minimalist and informative concept
      </p>
      <button className="see-all-button">See All</button>
      <div className="container">
        <div className="card_4 eliminate">
          <img src={rasm} alt="Group 4" />
        </div>
        <div className="card_4">
          <img src={img} alt="Group 5" />
        </div>
        <div className="card_4">
          <img src={imgg} alt="Group 6" />
        </div>
        <div className="card_4 eliminate">
          <img src={foto} alt="Group 7" />
        </div>
      </div>
    </div>
  );
}

export default PartFour;