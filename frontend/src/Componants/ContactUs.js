import '../css/ContactUs.css';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContactUs(props) {

  let lang = props.lang

  const navigate = useNavigate;

  const [Name,setName] = useState('')
  const [Email,setEmail] = useState('')
  const [Type,setType] = useState('')
  const [Message,setMessage] = useState('')

  const sendInfo = async(e)=>{
     e.preventDefault();
     const formData = new FormData();
     formData.append('Email', Email)
     formData.append('Name', Name)
     formData.append('Type', Type)
     formData.append('Message', Message)

     const path = window.location.hostname !== 'moonegypt.com' ? 'https://backend.test/api/message': 'https://api1.moonegypt.com/api/message';

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


  return (

        <div className="contactus">
          <section id="contactUs" className='section'>
            <div className="title">
              <h1>{lang.ContactUs}</h1>
            </div>
            <form onSubmit={sendInfo} id="message">
              <div>
              <input type="text" placeholder={lang.YourName} value={Name} onChange={(e)=>{setName(e.target.value)}}/>
              </div>
              <div>
              <input type="text" placeholder={lang.YourEmail} value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div>
              <input type="text" placeholder={lang.TypeOfService} value={Type} onChange={(e)=>{setType(e.target.value)}}/>
              </div>
              <div>
              <textarea placeholder={lang.YourMessage} value={Message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              </div>
              <button type='submit' form="message">{lang.submit}</button>
            </form>
            <div className='other'>
                  <h1>{lang.or}</h1>
                  <h1>{lang.Email}</h1>
            </div>
          </section>
        </div>

  );
}

