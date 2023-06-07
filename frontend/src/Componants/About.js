import "../css/About.css";
import spaceShip from "../images/home/spaceShip-lg.svg";

export default function About(props) {
  const lang = props.lang;

  let Link = props.Link;

  return (
    <>
      <section id="about">
        <h1 className="main-header text-center">{lang.About}</h1>
        <div className="container py-4">
          <div className="row align-items-center gy-3 ">
            <div className="col-md-4 d-flex justify-content-center">
              <img className="img-fluid" src={spaceShip} alt="spaceShip" width="120" height="auto" />
            </div>
            <div className="col-md-6">
              <div className="box">
                <p className="p-4">{lang.smallCompany}</p>
              </div>
            </div>
          </div>
        </div>
        <section className="vision py-4">
          <div className="container py-4">
            <div className="row gy-3">
              <div className="col-md-4 text-center  position-relative">
                <h2 className="vision-title pb-2 fw-bolder">
                  {lang.vision}
                </h2>
                <div className="customBorder position-absolute  translate-middle start-50 ">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container  py-4 ">
            <div className="row align-items-center justify-content-center  py-3 gy-3">
              <div className="col-md-6 me-0 me-md-5">
                <div className="box">
                  <p className="p-4">{lang.communitiesWithPeople}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="and">
          <div className="container  py-4 ">
            <div className="row gy-3">
              <div className="col-md-4 text-center  position-relative">
                <h2 className="and-title pb-2 fw-bolder">
                  {lang.And}
                </h2>
                <div className="customBorder position-absolute  translate-middle start-50 ">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <div className="row  align-items-center justify-content-center py-3 gy-3">
              <div className="col-md-6 me-0 me-md-5">
                <div className="box">
                  <p className="p-4">{lang.CreativeWebsite}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="note py-4">
          <div className="container">
            <div className="row justify-content-center gy-3">
              <div className="box position-relative">
                <p className="p-4">{lang.headquarters}</p>
                <h3 className="position-absolute translate-middle-y top-0 text-white px-3">
                  {lang.note}
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="policies py-4 my-5">
          <h1 className="main-header text-center">{lang.policies}</h1>
          <div className="container">
            <div className="text">
              <h2 className="second-title fw-bolder position-relative ms-3 my-5">
                {lang.copyrightsPolicy}
                <div className="num position-absolute">
                  {/* <i className="fa-solid fa-1 number"></i> */}
                  <span className="number">{lang.one}</span>
                </div>
              </h2>
              <div className="row">
                <div className="col-md-7">
                  <ul>
                    <li>
                      <p>{lang.notToUseYourIdea}</p>
                    </li>
                    <li>
                      <p>{lang.codeDoesNotFallUnderCopyrightsRights}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text">
              <h2 className="second-title fw-bolder position-relative ms-3 my-5">
                {lang.AcceptProjects}
                <div className="num position-absolute">
                <span className="number">{lang.two}</span>
                </div>
              </h2>
              <div className="row">
                <div className="col-md-7">
                  <ul>
                    <li>
                      <p>{lang.SubjectToOurCapacity}</p>
                    </li>
                    <li>
                      <p>{lang.choosePreviousProject}</p>
                    </li>
                    <li>
                      <p>{lang.ThePriority}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text">
              <h2 className="second-title fw-bolder position-relative ms-3 my-5">
                {lang.PricingPolicy}
                <div className="num position-absolute">
                <span className="number">{lang.three}</span>
                </div>
              </h2>
              <div className="row">
                <div className="col-md-7">
                  <ul>
                    <li>
                      <p>{lang.effortAndTechnologies}</p>
                    </li>
                    <li>
                      <p>{lang.limitedNumberOfProjects}</p>
                    </li>
                    <li>
                      <p>{lang.projectIsLarge}</p>
                    </li>
                    <li>
                      <p>{lang.discloseAnyPrices}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text">
              <h2 className="second-title fw-bolder position-relative ms-3 my-5">
                {lang.ProjectPolicy}
                <div className="num position-absolute">
                <span className="number">{lang.four}</span>
                </div>
              </h2>
              <div className="row">
                <div className="col-md-7">
                  <ul>
                    <li>
                      <p>{lang.seriesOfMeetings}</p>
                    </li>
                    <li>
                      <p>{lang.projectIsDivided}</p>
                    </li>
                    <li>
                      <p>{lang.ModernTechnologies}</p>
                    </li>
                    <li>
                      <p>{lang.beforeStartingToWriteTheCode}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text">
              <h2 className="second-title fw-bolder position-relative ms-3 my-5">
                {lang.ProjectPolicy}
                <div className="num position-absolute">
                <span className="number">{lang.five}</span>
                
                </div>
              </h2>
              <div className="row gy-3">
                <div className="col-md-7">
                  <ul>
                    <li>
                      <p>{lang.trainingToManage}</p>
                    </li>
                    <li>
                      <p>{lang.encryptAnyData}</p>
                    </li>
                    <li>
                      <p>{lang.completingYourProject}</p>
                    </li>
                  </ul>
                  {/* <h4 className="text-white position-relative ps-3">{lang.trainingToManage}</h4> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
