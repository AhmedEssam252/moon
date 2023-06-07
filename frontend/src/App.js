import './css/App.css';
import {lazy,Suspense, useState} from 'react';
import axios from "axios";
import logo from './images/home/moon.svg';
import x from './images/x.svg';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import langAR from './lang/ar.js';
import langEN from './lang/en.js';
import Home from './Componants/Home';
import About from './Componants/About';
import Services from './Componants/Services';
import Projects from './Componants/Projects';
import ContactUs from './Componants/ContactUs';
import SaasProduct from './Componants/services/saasProduct';
import Wordpress from './Componants/services/wordpress';

const App = () => {

   let [lang,setLang] = useState(langEN);

   const changeLang = (e,langAR,langEN) => {
      e.target.classList.toggle("change");
      if(e.target.classList.contains("change")){
         e.target.innerText = 'en';
         document.querySelector('html').lang = 'ar'
         document.querySelector('html').dir = 'rtl'
         setLang(langAR)
      }else{
         e.target.innerText = 'ar';
         document.querySelector('html').lang = 'en'
         document.querySelector('html').dir = 'ltr'
         setLang(langEN)
      }
   }
   const navigate = useNavigate;

   const [Email,setEmail] = useState('')

   const sendEmail = async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('Email', Email)
      const path = window.location.hostname !== 'moonegypt.com' ? 'https://backend.test/api/subscrip': 'https://dashboard.moonegypt.com/api/subscrip';
      await axios.post(path, formData)
      .then(({data})=>{
          console.log(data.message)
          navigate('/')
      }).catch(({response})=>{
         if(response){
            if (response.data.status == 422) {
               console.log(response.data.errors)
           } else {
               console.log(response.data.message)
           }
         }
      })
  }

  // toggle on mobile view (navbar)
  const toggle = (e) => {
     if(e.target.className === ''){
         e.target.parentElement.parentElement.parentElement.querySelector('.toggle').classList.toggle("change")
     }else{
          e.target.classList.toggle("change");
     }
      document.querySelector('.navbar').classList.toggle("change");
  }
  const closeToggle = (e) => {
      if(e.target.className === ''){
         e.target.parentElement.parentElement.parentElement.querySelector('.toggle').classList.toggle("change")
      }else{
         e.target.parentElement.parentElement.querySelector('.toggle').classList.toggle("change");
      }
      document.querySelector('.navbar').classList.toggle("change");
   }
  

  
  return (

    <Router>
    
       <nav id="nav">
          <div className="logo">
             <Link to={"/"}>
                <img src={logo} alt="MoonLogo" width="80" height="80" />
                <h1>{lang.Moon}</h1>
             </Link>
          </div>
          <div className="navbar">
            <div className='closeToggle' onClick={(e) => {closeToggle(e)}}>
               <img src={x} alt="" width="15" height="15" />
            </div>
             <ul>
                <li><Link to={"/about"}>{lang.About}</Link></li>
                <li><Link to={"/services"}>{lang.Services}</Link></li>
                <li><Link to={"/projects"}>{lang.Projects}</Link></li>
                <li><Link to={"/contact-us"}>{lang.ContactUs}</Link></li>
             </ul>
             <div className="otherItems">
                <div className="lang">
                    <button onClick={(e) => {changeLang(e,langAR,langEN)}}>{lang.Lang}</button>
                </div>
             </div>
          </div>

          <div className="toggle" onClick={(e) => {toggle(e)}}>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </nav>
      
      <Routes>
         <Route path="/" exact element={<Home lang={lang} Link={Link}/>}></Route>
         <Route path="/about" element={<About lang={lang}  Link={Link} />}></Route>
         <Route path="/services" element={<Services lang={lang} />}></Route>
         <Route path="/projects" element={<Projects lang={lang} />}></Route>
         <Route path="/contact-us" element={<ContactUs lang={lang} />}></Route>
         <Route path="/services/saasproduct" element={<SaasProduct lang={lang} />}></Route>
         <Route path="/services/wordpress" element={<Wordpress lang={lang} />}></Route>
      </Routes>

    <section id="footer" className="section">
      <div className="title">
         <h1>{lang.ContactUs}</h1>
      </div>
      <div className="content">
         <div className="logo">
            <img src={logo} alt="MoonLogo" width="120" height="120" />
            <h1>{lang.Moon}</h1>
         </div>
         <div className="text">
            <p>{lang.smallCompany}</p>
            <p>{lang.Email}</p>
         </div>
      </div>
      <form onSubmit={sendEmail} id="subscrip">
         <div className="subscription">
               <h1>{lang.subscripUs}</h1>
               <input type="text" placeholder={lang.YourEmail} value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
               <button type='submit' form="subscrip">{lang.subscrip}</button>
         </div>
      </form>
      <p>{lang.copyrights}</p>
   </section>
    </Router>

  );
}

export default App;

