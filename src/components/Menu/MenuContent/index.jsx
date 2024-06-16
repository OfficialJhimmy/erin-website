import { useContext } from "react";
import { MenuContext } from "../MenuManager/index";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub, FaDev } from "react-icons/fa";
import { FaLinkedin, FaHashnode } from "react-icons/fa6";

import cn from "classnames";

import "./index.css";
import { Link } from "react-router-dom";

const internalLinks = [
  {
    url: "/",
    component: <span>About</span>,
  },
  {
    url: "/tech",
    component: <span>works</span>,
  },
  {
    url: "/tech",
    component: <span>Articles</span>,
  },
  {
    url: "/tech",
    component: <span>Let's Talk</span>,
  },
];

const externalLinks = [
  {
    url: "https://github.com/officialjhimmy",
    component: <FaGithub size={40}/>,
  },
  {
    url: "https://linkedin.com/in/feyijimierinle",
    component: <FaLinkedin size={40}/>,
  },
  {
    url: "https://the-erin.hashnode.dev",
    component: <FaHashnode size={40}/>,
  },
  {
    url: "https://instagram.com/jhimmyofficial",
    component: <FaDev size={40}/>,
  },
  {
    url: "https://instagram.com/jhimmyofficial",
    component: <RiTwitterXFill size={40}/>,
  },
];

function MenuContent() {
  const { open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.component}</Link>
                
              </li>
            ))}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
