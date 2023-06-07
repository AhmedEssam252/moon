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
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="image">
                <img className="img-fluid" src={spaceShip} alt="spaceShip"  width="120" height="auto" />
              </div>
            </div>
            <div className="col-md-8">
                <h2> {lang.seeOurProjects}</h2>
            </div>
          </div>
        </div>
        <section className="e-commerce py-3 position-relative">
          <h2 className="second-header">{lang.ecommerce}</h2>
          <div className="layer position-relative">
            <div className="container">
              <div className="row justify-content-center ">
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={ecommerce}
                      alt="moda"
                    />
                    <Link
                      target="_blank" rel="noopener noreferrer"
                      href={lang.ecommerceLink}
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="website py-3 position-relative">
          <h2 className="main-header">{lang.website}</h2>
          <div className="layer position-relative">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={muslim}
                      alt="muslim"
                    />
                    <Link
                      href="https://muslim.moonegypt.com/"
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={website}
                      alt="spaceShip"
                    />
                    <Link
                      to={``}
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={website}
                      alt="spaceShip"
                    />
                    <Link
                      to={``}
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="website py-3 position-relative">
          <h2 className="main-header">{lang.cms}</h2>
          <div className="layer position-relative">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={cms}
                      alt="moda cms"
                    />
                    <Link
                      to={`/contact-us`}
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.demo}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="saas py-3 position-relative">
          <h2 className="second-header">SaaS Product</h2>
          <div className="layer position-relative">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={website}
                      alt="spaceShip"
                    />
                    <Link
                      to={``}
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={website}
                      alt="spaceShip"
                    />
                    <Link
                      to={``}
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={website}
                      alt="spaceShip"
                    />
                    <Link
                      to={``}
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wordpress py-3 position-relative">
          <h2 className="main-header">wordpress</h2>
          <div className="layer position-relative">
            <div className="container">
              <div className="row justify-content-center ">
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={website}
                      alt="spaceShip"
                    />
                    <Link
                      to={``}
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content position-relative">
                    <img
                      className="img-fluid my-3"
                      src={website}
                      alt="spaceShip"
                    />
                    <Link
                      to={``}
                      target="_blank" rel="noopener noreferrer"
                      className="position-absolute start-50 translate-middle"
                    >
                      {lang.More}
                    </Link>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Projects;
