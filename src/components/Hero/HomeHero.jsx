import "./Hero.css";
import send from '../../assets/icons/send.svg'
import senddark from '../../assets/icons/send-dark.svg'
import { Link } from "react-router-dom";
const HomeHero = () => {
  return (
    <div className="homehero__container">
      <div className="homehero__child">
        <h2 className="letter">e</h2>
        <div className="hidden-content">
          <h2>e</h2>
          <p className="hidden-content-subtitle">For Energetic</p>
          <p className="hidden-content-info">Welcome to My Portfolio!</p>
        </div>
        <p className="label">Home</p>
        <img src={senddark} alt="Send Icon" className="homehero__child--icon"/>

      </div>
      <div className="homehero__child">
        <h2 className="letter">r</h2>
        <div className="hidden-content">
          <h2>r</h2>
          <p className="hidden-content-subtitle">For Resourceful</p>
          <p className="hidden-content-info">Check Out My Tech Portfolio Here!</p>
          <Link to="/tech">
          <img src={send} alt="Send Icon" />
          </Link>
          
        </div>
        <p className="label">Tech</p>
        <img src={senddark} alt="Send Icon" className="homehero__child--icon"/>
      </div>
      <div className="homehero__child">
        <h2 className="letter">i</h2>
        <div className="hidden-content">
          <h2>i</h2>
          <p className="hidden-content-subtitle">For Innovative</p>
          <p className="hidden-content-info">Check Out My Music Playlist Here!</p>
          <img src={send} alt="Send Icon" />
        </div>
        <p className="label">Music</p>
        <img src={senddark} alt="Send Icon" className="homehero__child--icon"/>

      </div>
      <div className="homehero__child">
        <h2 className="letter">n</h2>
        <div className="hidden-content">
          <h2>n</h2>
          <p className="hidden-content-subtitle">For Nobility</p>
          <p className="hidden-content-info">Learn More About <br/> Me Here!</p>
          <img src={send} alt="Send Icon" />
        </div>
        <p className="label">Lifestyle</p>
        <img src={senddark} alt="Send Icon" className="homehero__child--icon"/>

      </div>
    </div>
  );
};

export default HomeHero;
