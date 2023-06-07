import logo from "../images/home/moon.svg"
import SpaceShip from "../images/home/spaceShip-lg.svg"
import Star from "../images/home/star.svg"
import Earth  from "../images/home/earth.svg"
import BeyondCode from "../images/home/BeyondCode.svg"
import Bootstrap from "../images/home/bootstrap.svg"
import Express from "../images/home/Express.svg"
import Laravel  from "../images/home/laravel.svg"
import Node from "../images/home/node.svg"
import ReactLogo from "../images/home/React.svg"
import Spatie from "../images/home/Spatie.svg"
import Wordpress  from "../images/home/wordpress.svg"
import SpaceShipO  from "../images/home/spaceShip-y.svg"
import moonnow1  from "../images/home/moonnow1.svg"
import moonnow2  from "../images/home/moonnow2.svg"
import moonnow3  from "../images/home/moonnow3.svg"
import moonnow4  from "../images/home/moonnow4.svg"
import moonnow5  from "../images/home/moonnow5.svg"
import "../css/Home.css"

export default function Home(props) {
       
  let lang = props.lang;

  let Link = props.Link;
  
  return (
  
          <>
              <section id="Home" className='section'>
                 <h1 className="title2">Moon Egypt | Home for Web development</h1>
                  <div className="content">
                    <div className="first-line">
                        <p>{lang.Design}</p>
                        <p>{lang.SomeThing}</p>
                        <p data-word1={lang.Gread} data-word2={lang.Unique}></p>
                    </div>
                    <div className="second-line">
                        <p>{lang.And} {lang.Reach} {lang.To}</p>
                        <p>{lang.moonWord}</p>
                    </div>
                    <div className="More">
                          <Link to={"/services"}>{lang.SeeMore}</Link>
                    </div>
                  </div>
                  <div className='space'>
                        <div className='stars'>
                          <div className="star">
                            <img className='star1' src={Star} alt="Star" width="50" height="50" />
                          </div>
                          <div className="star">
                            <img className='star2' src={Star} alt="Star" width="50" height="50" />
                          </div>
                          <div className="star">
                            <img className='star3' src={Star} alt="Star" width="50" height="50" />
                          </div>
                          <div className="star">
                            <img className='star4' src={Star} alt="Star" width="50" height="50" />
                          </div>
                          <div className="star">
                            <img className='star5' src={Star} alt="Star" width="50" height="50" />
                          </div>
                          <div className="star">
                            <img className='star6' src={Star} alt="Star" width="50" height="50" />
                          </div>
                          <div className="star">
                            <img className='star7' src={Star} alt="Star" width="50" height="50" />
                          </div>
                        </div>
                        <img className='moon' src={logo} alt="Moon" width="898" height="890" />
                        <img className='spaceship' src={SpaceShip} alt="SpaceShip" width="150" height="250" />
                  </div>
              </section>

              <section id='os-softwares' className='section'>
                  <div className="title">
                    <h1>{lang.osSoftwares}</h1>
                  </div>
                  <img className='earth' src={Earth} alt="Earth" width="300" height="300" />
                  <div className='softwares'>
                      <div className='logos'>
                        <a href="https://beyondco.de/" target="_blank"><img className='BeyondCode' src={BeyondCode} alt="BeyondCode" width="150" height="auto" /></a>
                        <a href="https://getbootstrap.com/" target="_blank"><img className='Bootstrap' src={Bootstrap} alt="Bootstrap" width="150" height="auto" /></a>
                        <a href="https://spatie.be/" target="_blank"><img className='Spatie' src={Spatie} alt="Spatie" width="150" height="auto" /></a>
                        <a href="https://expressjs.com/" target="_blank"><img className='Express' src={Express} alt="Express" width="150" height="auto" /></a>
                        <a href="https://nodejs.org/en/" target="_blank"><img className='Node' src={Node} alt="Node" width="150" height="auto" /></a>
                        <a href="https://laravel.com/" target="_blank"><img className='Laravel' src={Laravel} alt="Laravel" width="150" height="auto" /></a>
                        <a href="https://reactjs.org/" target="_blank"><img className='ReactLogo' src={ReactLogo} alt="ReactLogo" width="150" height="auto" /></a>
                        <a href="https://wordpress.org/" target="_blank"><img className='Wordpress' src={Wordpress} alt="Wordpress" width="350" height="auto" /></a>
                      </div>
                  </div>
                  <img className='moon' src={logo} alt="Moon" width="280" height="280" />
              </section>

              <section id="stages" className='section'>
                <div className="customBorder">
                <img className="SpaceShipO" src={SpaceShipO} alt="SpaceShipO" width="180" height="180" />
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="customBorder">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>               
                </div>
                  <div className="title">
                    <h1>{lang.stages}</h1>
                  </div>
                  <div className="content">
                    <div className='stage'>
                      <div className='stageType'>
                        <div className="up">
                          <img src={Star} alt="star"  width="80" height="80" />
                          <div className="title">
                            <h1>{lang.idea}</h1>
                          </div>
                          <div className='line'></div>
                        </div>
                        <div className='down'>
                          <p>{lang.ideaDesc}</p>
                        </div>
                      </div>

                      <div className="moonnow">
                        <img src={moonnow1} alt="moonnow" />
                        <div className='traingle'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                      </div>

                      <div className="tools">
                        <div className='up'>
                          <div className='line'></div>
                          <div className="title">
                            <h1>{lang.tools}</h1>
                          </div>
                          <img src={Star} alt="star"  width="80" height="80" />   
                        </div>
                        <div className='down'>
                          <ol>
                            <li>{lang.uxdesign}</li>
                            <li>{lang.uidesign}</li>
                            <li>{lang.surveys}</li>
                          </ol>
                        </div>
                      </div>

                    </div>

                    <div className='stage'>
                      <div className='stageType'>
                        <div className="up">
                          <img src={Star} alt="star"  width="80" height="80" />
                          <div className="title">
                            <h1>{lang.coding}</h1>
                          </div>
                          <div className='line'></div>
                        </div>
                        <div className='down'>
                          <p>{lang.codingDesc}</p>
                        </div>
                      </div>

                      <div className="moonnow">
                        <img src={moonnow2} alt="moonnow" />
                        <div className='traingle'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                      </div>

                      <div className="tools">
                        <div className='up'>
                          <div className='line'></div>
                          <div className="title">
                            <h1>{lang.tools}</h1>
                          </div>
                          <img src={Star} alt="star"  width="80" height="80" />   
                        </div>
                        <div className='down'>
                          <ol>
                            <li>{lang.html}</li>
                            <li>{lang.css}</li>
                            <li>{lang.javascript}</li>
                            <li>{lang.php}</li>
                          </ol>
                          <ol>
                            <li>{lang.laravel}</li>
                            <li>{lang.sql}</li>
                            <li>{lang.nodejs}</li>
                            <li>{lang.expressjs}</li>
                          </ol>
                        </div>
                      </div>

                    </div>

                    <div className='stage'>
                      <div className='stageType'>
                        <div className="up">
                          <img src={Star} alt="star"  width="80" height="80" />
                          <div className="title">
                            <h1>{lang.testing}</h1>
                          </div>
                          <div className='line'></div>
                        </div>
                        <div className='down'>
                          <p>{lang.testingDesc}</p>
                        </div>
                      </div>

                      <div className="moonnow">
                        <img src={moonnow3} alt="moonnow" />
                        <div className='traingle'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                      </div>

                      <div className="tools">
                        <div className='up'>
                          <div className='line'></div>
                          <div className="title">
                            <h1>{lang.tools}</h1>
                          </div>
                          <img src={Star} alt="star"  width="80" height="80" />   
                        </div>
                        <div className='down'>
                          <ol>
                            <li>{lang.unittesting}</li>
                            <li>{lang.integrationtesting}</li>
                            <li>{lang.systemtesting}</li>
                            <li>{lang.acceptancetesting}</li>
                          </ol>
                        </div>
                      </div>

                    </div>

                    <div className='stage'>
                      <div className='stageType'>
                        <div className="up">
                          <img src={Star} alt="star"  width="80" height="80" />
                          <div className="title">
                            <h1>{lang.sitesweets}</h1>
                          </div>
                          <div className='line'></div>
                        </div>
                        <div className='down'>
                          <p>{lang.sitesweetsDesc}</p>
                        </div>
                      </div>

                      <div className="moonnow">
                        <img src={moonnow4} alt="moonnow" />
                        <div className='traingle'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                      </div>

                      <div className="tools">
                        <div className='up'>
                          <div className='line'></div>
                          <div className="title">
                            <h1>{lang.tools}</h1>
                          </div>
                          <img src={Star} alt="star"  width="80" height="80" />   
                        </div>
                        <div className='down'>
                          <ol>
                            <li>{lang.marketplace}</li>
                            <li>{lang.searchconsole}</li>
                            <li>{lang.analytics}</li>
                            <li>{lang.ad}</li>
                          </ol>
                          <ol>
                            <li>{lang.lighthouse}</li>
                            <li>{lang.searchengines}</li>
                            <li>{lang.metatags}</li>
                            <li>{lang.cloudflare}</li>
                          </ol>
                        </div>
                      </div>

                    </div>

                    <div className='stage'>
                      <div className='stageType'>
                        <div className="up">
                          <img src={Star} alt="star"  width="80" height="80" />
                          <div className="title">
                            <h1>{lang.deployment}</h1>
                          </div>
                          <div className='line'></div>
                        </div>
                        <div className='down'>
                          <p>{lang.deploymentDesc}</p>
                        </div>
                      </div>

                      <div className="moonnow">
                        <img src={moonnow5} alt="moonnow" />
                      </div>

                      <div className="tools">
                        <div className='up'>
                          <div className='line'></div>
                          <div className="title">
                            <h1>{lang.tools}</h1>
                          </div>
                          <img src={Star} alt="star"  width="80" height="80" />   
                        </div>
                        <div className='down'>
                          <ol>
                            <li>{lang.domain}</li>
                            <li>{lang.hosting}</li>
                            <li>{lang.ssl}</li>
                            <li>{lang.gitandgithub}</li>
                          </ol>
                          <ol>
                            <li>{lang.emailaccounts}</li>
                            <li>{lang.ownSmtp}</li>
                          </ol>
                        </div>
                      </div>

                    </div>

                  </div>
              </section>
          </>
  );
}

