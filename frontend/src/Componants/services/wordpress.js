import "../../css/services/services.css";
import spaceShip1 from "../../images/home/spaceShip-lg.svg";
import website from "../../images/services/website.svg";
import moonWithSP from "../../images/services/moonWithSP.svg";

export default function Wordpress(props) {
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
            <h1>{lang.Wordpress}</h1>
            <p>{lang.WordpressDesc}</p>
        </div>
      </section>

      <section id="ServicesStatistics" className="wordpress">
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
              <h1>{lang.WordpressStatistics}</h1>
              <div className='traingle'>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>

          <div className="statistics">
              <p>{lang.WordpressStatisticsdDesc1}</p>
              <p>{lang.WordpressStatisticsdDesc2}</p>
              <p>{lang.WordpressAndOtherCMS}</p>
              <div className="country country1">
                <p>{lang.Wordpress}</p>
                <div></div>
                <p>{lang.WordpressNum}</p>
              </div>
              <div className="country country2">
                <p>{lang.Shopify}</p>
                <div></div>
                <p>{lang.ShopifyNum}</p>
              </div>
              <div className="country country3">
                <p>{lang.Wix}</p>
                <div></div>
                <p>{lang.WixNum}</p>
              </div>
              <div className="country country4">
                <p>{lang.Squarespace}</p>
                <div></div>
                <p>{lang.squarespaceNum}</p>
              </div>
              <div className="country country5">
                <p>{lang.Joomla}</p>
                <div></div>
                <p>{lang.JoomlaNum}</p>
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
                <p>{lang.makeYourWordpress}</p>
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
                 <p>{lang.MoonWordpress}</p>
                 <img src={website} alt="website" width="300px" height="auto" />
                 <button>{lang.More}</button>
              </div>
              <div className="product">
                 <p>{lang.MoonWordpress}</p>
                 <img src={website} alt="website" width="300px" height="auto" />
                 <button>{lang.More}</button>
              </div>
          </div>
      </section>
    </>
  );
}
