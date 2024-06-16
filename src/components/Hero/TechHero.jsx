import "./Hero.css";
import down from "../../assets/icons/down.svg";

const TechHero = () => {
  const handleScroll = () => {
    const nextSection = document.querySelector(".abouterin__container");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="techhero__container">
      <div className="techhero__child-right">
        <p className="tech__main-paragraph">
          Crafting seamless digital <br /> experiences through code
        </p>
        <p className="tech__main-heading u-align-right">
          SOFTWARE <br /> ENGINEER
        </p>
        
      </div>
      <div className="techhero__child-left">
        <p className="tech__main-heading u-align-left">
          TECHNICAL <br />
          WRITER
        </p>
        <div>
          <p className="tech__main-paragraph tech__main--small--para">
            Check out my resume here:--&#62;{" "}
          </p>
          <button>My Resume</button>
        </div>
      </div>
      <img src={down} alt="sample icon" onClick={handleScroll} />
    </div>
  );
};

export default TechHero;
