import "../../css/services/services.css";
import spaceShip1 from "../../images/home/spaceShip-lg.svg";
import website from "../../images/services/website.svg";
import moonWithSP from "../../images/services/moonWithSP.svg";

export default function SaasProduct(props) {
  const lang = props.lang;

  return (
    <>
      <section id="Services" className="section">
        <div className="customBorder">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>               
        </div>
        <img src={website} alt="website" width="400px" height="auto" />
        <div className="content">
            <h1>{lang.saasProduct}</h1>
            <p>{lang.saasProductDesc}</p>
        </div>
      </section>

      <section id="ServicesStatistics" className="saasProduct">
        <img src={spaceShip1} alt="spaceShip"  width="200px" height="200px"/>
        <div className="customBorder">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>               
        </div>
         <div className="content">
          <div className="title">
              <div className='traingle'>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              <h1>{lang.SaaSProductStatistics}</h1>
              <div className='traingle'>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>

          <div className="statistics">
              <p>{lang.SaaSProductStatisticsdDesc}</p>
              <p>{lang.SaaSProductInCountries}</p>
              <div className="country country1">
                <p>{lang.USA}</p>
                <div></div>
                <p>{lang.k17}</p>
              </div>
              <div className="country country2">
                <p>{lang.UK}</p>
                <div></div>
                <p>{lang.k2}</p>
              </div>
              <div className="country country3">
                <p>{lang.Canada}</p>
                <div></div>
                <p>{lang.k2}</p>
              </div>
              <div className="country country4">
                <p>{lang.Germany}</p>
                <div></div>
                <p>{lang.k1}</p>
              </div>
              <div className="country country5">
                <p>{lang.France}</p>
                <div></div>
                <p>{lang.k1}</p>
              </div>
              <div className="country country6">
                <p>{lang.others}</p>
                <div></div>
                <p>{lang.k2}</p>
              </div>
          </div>
         </div>
      </section>

      <section id="ourServices">
          <h1>{lang.howCanHelpYou}</h1>
          <div className="content">
              <div className="customBorder">
                  <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                  <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                  <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                  <div></div><div></div><div></div><div></div><div></div><div></div>
                  <div></div><div></div><div></div><div></div><div></div><div></div>
              </div>
              <div className="stage stage1">
                <span>{lang.one}</span>
                <p>{lang.createYourIdea}</p>
              </div>
              <div className="stage stage2">
                <span>{lang.two}</span>
                <p>{lang.makeYourProduct}</p>
              </div>
              <div className="stage stage3">
                <span>{lang.three}</span>
                <p>{lang.integrationProduct}</p>
              </div>
              <div className="stage stage4">
                <span>{lang.four}</span>
                <p>{lang.deploymentYourProduct}</p>
              </div>
              <div className="stage stage5">
                <img src={moonWithSP} alt="moonWithSP" width="80px" height="auto" />
                <p>{lang.welcomeInMoon}</p>
              </div>
          </div>
      </section>

      <section id="ourProducts" className="section">
          <div className="title">
              <h1>{lang.ourProduct}</h1>
          </div>
          <div className="content">
              <div className="product">
                 <p>{lang.MoonForms}</p>
                 <img src={website} alt="website" width="300px" height="auto" />
                 <button>{lang.More}</button>
              </div>
              <div className="product">
                 <p>{lang.MoonForms}</p>
                 <img src={website} alt="website" width="300px" height="auto" />
                 <button>{lang.More}</button>
              </div>
          </div>
      </section>
    </>
  );
}
