import './Part_one.css';
import vektor from '../asset/Vector (8).png'
import girl from '../asset/Ellipse 2.png'

function PartOne() {
  return (
    <div className="part_one">
      <div className="smth">
      <h1>The Home of <br />
        Minimalist Buying  <br />
        and Selling</h1>
       <p>This NFT website is a website that features <br /> buying and selling, news and blogs. <br /> Designed with a minimalist and  <br />informative concept</p> 
       <button className='explore'>Explore</button>
       <button className='create'>Create</button>
      </div>

       <div className='price'>
        <h4>Current price</h4>
        
        <h2> <img src={vektor} alt="" /> 1.98 <span>($5,822.47)</span></h2>
        <img src={girl} alt="" />
        <pre>  Wade Warren</pre>
       </div>
    </div>
  );
}

export default PartOne;
