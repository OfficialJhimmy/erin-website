import "./About.css";
import user from "../../assets/icons/user.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const AboutErin = () => {
  const [typeEffect] = useTypewriter({
    words: ["Hello", "Hallo", "E nle o", "Hola", "Salut", "Salve", "Olá"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 80,
  });
  return (
    <div className="abouterin__container">
      <img src={user} alt="User Icon" />
      <h2>
        &#60; <span>{typeEffect}</span> &#62;
      </h2>
      <p>
        I'm ERIN, a self-taught software engineer and technical writer from
        Lagos, Nigeria. I transform imaginative ideas into real-world products.
        My passion lies at the intersection of technology and creativity,
        constantly exploring new possibilities to innovate and inspire 🚀.{" "}
        I specialize in using JavaScript to develop scalable,
        pixel-perfect, and maintainable solutions. However, I'm always eager to
        dive into other programming languages and tools.
        
        In addition to software development, I am a 2x AWS Certified as a
        Solutions Architect and Developer Associate. This expertise allows me to
        design and implement robust, scalable cloud solutions that meet modern
        business needs.
        I also excel in technical writing, which is essential for
        communicating complex ideas clearly and effectively.✨
      </p>
    </div>
  );
};

export default AboutErin;
