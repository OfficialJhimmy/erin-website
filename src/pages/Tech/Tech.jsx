import AboutErin from "../../components/About/AboutErin";
import Articles from "../../components/Articles/Articles";
import SkillsCarousel from "../../components/Carousel/SkillsCarousel";
import TechHero from "../../components/Hero/TechHero";
import Menu from "../../components/Menu/index";
import MenuManager from "../../components/Menu/MenuManager";
import TechWork from "../../components/Works/TechWork";

const Tech = () => {
  return (
    <>
      <MenuManager>
        <Menu />
      </MenuManager>
      <TechHero />
      <AboutErin />
      <SkillsCarousel />
      <TechWork />
      <Articles />
    </>
  );
};

export default Tech;
