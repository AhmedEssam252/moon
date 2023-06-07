import logo from '../images/home/moon.svg';
import x from '../images/x.svg';
import axios from "axios";
import '../css/App.css';
import langAR from '../lang/ar.js';
import langEN from './lang/en.js';

import {
    Link,
    Outlet,
    useNavigate,
} from "react-router-dom";

const RootLayout = () => {


   const navigate = useNavigate;

   const [Email,setEmail] = useState('')

   const sendEmail = async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('Email', Email)
      const path = window.location.hostname !== 'moonegypt.com' ? 'http://127.0.0.1:8000/api/subscrip': 'https://api1.moonegypt.com/api/subscrip';
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
    <>
        <nav id="nav">
        <div className="logo">
        <Link to={"/"} target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="MoonLogo" width="80" height="80" />
            <h1>{lang.Moon}</h1>
        </Link>
        </div>
        <div className="navbar">
        <div className='closeToggle' onClick={(e) => {closeToggle(e)}}>
            <img src={x} alt="" width="15" height="15" />
        </div>
        <ul>
            <li><Link to={"/about"} target="_blank" rel="noopener noreferrer">{lang.About}</Link></li>
            <li><Link to={"/services"} target="_blank" rel="noopener noreferrer">{lang.Services}</Link></li>
            <li><Link to={"/projects"} target="_blank" rel="noopener noreferrer">{lang.Projects}</Link></li>
            <li><Link to={"/contact-us"} target="_blank" rel="noopener noreferrer">{lang.ContactUs}</Link></li>
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
    
    <main>
        <Outlet lang={{lang}}/>
    </main>
 
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
    </>
   );
 }
 
 export default RootLayout;
 
 