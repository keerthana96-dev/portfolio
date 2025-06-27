// import React from 'react'
// import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mail_icon from  '../../assets/mail_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
// import  call_icon from '../../assets/call_icon.svg'


// const Contact = () => {


//  const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "d9acc5e8-9518-4f14-b265-11a437c8abe6");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//      alert(res.message);
//     }
//   };



//   return (
//     <div id='contact' className='contact'>
//         <div className="contact-title">
//         <h1>
//             Get in touch </h1>
//             <img src={theme_pattern} alt=''/>
//             </div>
//     <div className='contact-section'>
//         <div className="contact-left">
//             <h1>let's talk</h1>
//             <p> I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>
//             <div className="contact-details">
//                 <div className="contact-detail">
//                  <img src ={mail_icon} alt="" /> <p>keerthanaravi075@gmail.com</p>
//                 </div>
//                 <div className="contact-detail">
//                  <img src={call_icon} alt="" /><p>8987675878</p>
                    
//                 </div>
//                 <div className="contact-detail">
//                     <img src={location_icon} alt="" /> <p>Chennai, Tamil Nadu</p>
                    
//                 </div>
//             </div>
//         </div>
//        <form  onSubmit={onSubmit}className="contact-right">
//         <lable> Your Name </lable>
//         <input type="text"  placeholder='Enter your name' name='name'/>
//         <lable>Your Email</lable>
//         <input type="email" placeholder='Enter your email' name='email' />
//         <lable> Write your message here</lable>
//         <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
//         <button type='submit' className='contact-submit'> Submit now</button>
//        </form>
       
//     </div>

// </div>

//   )
// }


// export default Contact



import React, { useRef } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    formData.append("access_key", "d9acc5e8-9518-4f14-b265-11a437c8abe6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      form.reset(); // clear form fields
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='contact-section'>
        <div className="contact-left">
          <h1>let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>keerthanaravi075@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>8987675878</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
          <lable>Your Name</lable>
          <input type="text" placeholder='Enter your name' name='name' />
          <lable>Your Email</lable>
          <input type="email" placeholder='Enter your email' name='email' />
          <lable>Write your message here</lable>
          <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
