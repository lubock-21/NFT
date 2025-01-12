import './PartThree.css';
import photo1 from '../asset/photo1.png'
import photo2 from '../asset/photo2.png'
import photo3 from '../asset/photo3.png'
import photo4 from '../asset/photo4.png'
import photo5 from '../asset/photo5.png'
import photo6 from '../asset/photo6.png'
import photo7 from '../asset/photo7.png'
import photo8 from '../asset/photo8.png'
import guy1 from '../asset/guy1.png'
import guy2 from '../asset/guy2.png'
import guy3 from '../asset/guy3.png'
import guy4 from '../asset/guy4.png'

function PartThree() {
  return (
    <div className="part_three">
        <h1>Exclusive NFT.Ring drops</h1>
        <p>This NFT website is a website that features buying and selling, news and <br /> blogs. Designed with a minimalist and informative concept</p>
        <div className="three_cards">
            <div className="three_card">
                <img src={photo1} alt="" />
                <h3>Theresa Webb</h3>
                <h2>$475.22</h2>
                <div className="guy">
                    <img src={guy1} alt="" />
                    <h5>Darrell Steward</h5>
                </div>
            </div>

            <div className="three_card">
                <img src={photo2} alt="" />
                <h3>Eleanor Pena</h3>
                <h2>$710.68</h2>
                <div className="guy">
                    <img src={guy2} alt="" />
                    <h5>Cody Fisher</h5>
                </div>
            </div>

            <div className="three_card">
                <img src={photo3} alt="" />
                <h3>Darlene Robertson</h3>
                <h2>$928.41</h2>
                <div className="guy">
                    <img src={guy3} alt="" />
                    <h5>Esther Howard</h5>
                </div>
            </div>

            <div className="three_card">
                <img src={photo4} alt="" />
                <h3>Bessie Cooper</h3>
                <h2>$778.35</h2>
                <div className="guy">
                    <img src={guy4} alt="" />
                    <h5>Kristin Watson</h5>
                </div>
            </div>
        </div>

        {/*  */}

        <div className="three_cards">
            <div className="three_card">
                <img src={photo5} alt="" />
                <h3>Guy Hawkins</h3>
                <h2>$739.65</h2>
                <div className="guy">
                    <img src={guy4} alt="" />
                    <h5>Marvin McKinney</h5>
                </div>
            </div>

            <div className="three_card">
                <img src={photo6} alt="" />
                <h3>Savannah Nguyen</h3>
                <h2>$105.55</h2>
                <div className="guy">
                    <img src={guy3} alt="" />
                    <h5>Savannah Nguyen</h5>
                </div>
            </div>

            <div className="three_card">
                <img src={photo7} alt="" />
                <h3>Wade Warren</h3>
                <h2>$396.84</h2>
                <div className="guy">
                    <img src={guy2} alt="" />
                    <h5>Cody Fisher</h5>
                </div>
            </div>

            <div className="three_card">
                <img src={photo8} alt="" />
                <h3>Devon Lane</h3>
                <h2>$928.41</h2>
                <div className="guy">
                    <img src={guy1} alt="" />
                    <h5>Brooklyn Simmons</h5>
                </div>
            </div>
        </div>

    </div>
  );
}

export default PartThree;
