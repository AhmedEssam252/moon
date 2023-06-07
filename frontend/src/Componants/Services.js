import "../css/Services.css";
import spaceShip from "../images/home/spaceShip-lg.svg";
import website from "../images/services/website.svg";
import { Link } from "react-router-dom";
function Services(props) {
  const lang = props.lang;
  return (
    <>
      <section id="services">
        <div className="container">
          <h1 className="main-header text-center">{lang.Services}</h1>
          <div className="row align-items-center justify-content-center gy-3 py-3">
            <div className="col-md-4 offset-1 d-flex justify-content-center">
              <img
                className="img-fluid"
                src={spaceShip}
                alt="spaceShip"
                width="120"
                height="auto"
              />
            </div>
            <div className="col-md-4">
              <h3 className="text-white text-center text-md-start ">
                {lang.threeParts}
              </h3>
            </div>
          </div>
          <div className="row py-3 justify-content-center align-items-center">
            <div className="col-md-4 front-end">
              <div className="content">
                <div className="title d-flex justify-content-center mb-4">
                  <h2 className="px-2 ">Frontend</h2>
                  <div className="customBorder  d-flex justify-content-center align-items-center w-50 top-50 ">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="box">
                  <p className="p-4">{lang.beautifulDesign}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 image-website">
              <img
                className="position-relative image img-fluid"
                src={website}
                alt="spaceShip"
              />
            </div>
            <div className="col-md-4 back-end">
              <div className="content">
                <div className="title d-flex justify-content-center mb-4">
                  <div className="customBorder  d-flex justify-content-center align-items-center w-50 top-50 ">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <h2 className="px-2 ">Backend</h2>
                </div>
                <div className="box">
                  <p className="p-4">{lang.saveData}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 dev-ops d-flex flex-column justify-content-center mt-4">
              <div className="content">
              <div className="title d-flex align-items-center flex-column-reverse">
                  <h2 className="text-center mt-4 ">dev-ops</h2>
                  <div className="customBorder ">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="box">
                  <p className="p-4">{lang.union}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3">
          <div className="row gy-5 gx-3">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="content">
                <h3 className="text-center text-white ">SaaS Product</h3>
                <img
                  className="position-relative image img-fluid"
                  src={website}
                  alt="spaceShip"
                />
                <Link to={`/services/saasproduct`} target="_blank" rel="noopener noreferrer"> More</Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="content">
                <h3 className="text-center text-white ">CMS Development</h3>
                <img
                  className="position-relative image img-fluid"
                  src={website}
                  alt="spaceShip"
                />
                <Link to={``} target="_blank" rel="noopener noreferrer"> More</Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="content">
                <h3 className="text-center text-white ">LMS systems</h3>
                <img
                  className="position-relative image img-fluid"
                  src={website}
                  alt="spaceShip"
                />
                <Link to={``} target="_blank" rel="noopener noreferrer"> More</Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="content">
                <h3 className="text-center text-white ">e-Commerce</h3>
                <img
                  className="position-relative image img-fluid"
                  src={website}
                  alt="spaceShip"
                />
                <Link to={``} target="_blank" rel="noopener noreferrer"> More</Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="content">
                <h3 className="text-center text-white ">website development</h3>
                <img
                  className="position-relative image img-fluid"
                  src={website}
                  alt="spaceShip"
                />
                <Link to={``} target="_blank" rel="noopener noreferrer"> More</Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="content">
                <h3 className="text-center text-white ">
                  wordpress development
                </h3>
                <img
                  className="position-relative image img-fluid"
                  src={website}
                  alt="spaceShip"
                />
                <Link to={`/services/wordpress`} target="_blank" rel="noopener noreferrer"> More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
