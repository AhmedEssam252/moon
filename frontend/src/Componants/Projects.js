import "../css/Projects.css";
import spaceShip from "../images/home/spaceShip-lg.svg";
import website from "../images/services/website.svg";
import cms from "../images/projects/cms.png";
import ecommerce from "../images/projects/ecommerce.png";
import muslim from "../images/projects/muslim.png";
import { Link } from "react-router-dom";

function Projects(props) {
  let lang = props.lang;
  return (
    <>
      <section id="projects" className="pb-5">
        <div className="container py-5">
          <h1 className="main-header"> {lang.Projects}</h1>
        </div>
        <div className="projects_info">
          <div className="content">
            <img
              className="img-fluid my-3"
              src={ecommerce}
              alt="moda"
            />
            <a href={lang.ecommerceLink}
               rel="noopener noreferrer"
            >
              {lang.More}
            </a>
          </div>
          <div className="content">
            <img
              className="img-fluid my-3"
              src={cms}
              alt="moda cms"
            />
            <Link
              to={`/contact-us`}
              target="_blank" rel="noopener noreferrer"
              
            >
              {lang.demo}
            </Link>
          </div>
          <div className="content">
            <img
              className="img-fluid my-3"
              src={muslim}
              alt="muslim"
            />
            <a
              href="https://muslim.moonegypt.com/"
              rel="noopener noreferrer"
              
            >
              {lang.More}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
