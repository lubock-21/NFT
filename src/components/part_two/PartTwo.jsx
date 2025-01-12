import './Part2.css';
import rams from '../asset/ball1.png'
import photo from'../asset/ball2.png'
import img from'../asset/ball3.png'
import imgg from'../asset/ball4.png'

function PartTwo() {
  return (
    <div className="Part_two">
    <h1>New Generation of <br />
    Online Shopping</h1>
    <p>This NFT website is a website that features buying and selling, news and <br /> blogs. Designed with a minimalist and informative concept</p>
    <div className='Katta'>
    <div className='card'>
      <img src={rams} alt="" />
      <h1>Green Ring</h1>
      </div>

      <div className='card'>
      <img src={imgg} alt="" />
      <h1>Red Ring</h1>
      </div>
      <div className='card'>
      <img src={img} alt="" />
      <h1>Purple Ring</h1>
      </div>
      <div className='card'>
      <img src={photo} alt="" />
      <h1>Blue Ring</h1>
      </div>
      </div>
    
    </div>
  );
    
}


export default PartTwo;