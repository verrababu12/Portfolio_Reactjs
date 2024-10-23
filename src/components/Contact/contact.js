import React, { useEffect, useState } from "react";
import {
  FaPaperPlane,
  FaPhoneSquareAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw-_-NjTrC1UDirrmxNKXlZwJdq10uGQb4IVrZO3FrGwE_Acd97eYO6F4kXCUnJjcRL/exec";
    const form = document.forms["submit-to-google-sheet"];

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          setMessage("Message Sent Successfully");
          setTimeout(() => {
            setMessage("");
          }, 5000);
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <FaPaperPlane className="contact-icon" /> veeru@gmail.com
              </p>
              <p>
                <FaPhoneSquareAlt className="contact-icon" />
                9876543210
              </p>
              <div className="social-icons">
                <FaFacebook className="social-icon fa-facebook" />

                <FaInstagram className="social-icon fa-instagram" />

                <FaLinkedin className="social-icon fa-linkedin" />

                <FaXTwitter className="social-icon" />

                <FaGithub className="social-icon" />
              </div>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
              {message && (
                <p id="msg" className="success-message">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 My Portfolio | All rights reserved.</p>
      </div>
    </>
  );
};

export default Contact;

/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  <FaFacebook className="social-icon fa-facebook" />
</a>; */

// import React from "react";
// import {
//   FaPaperPlane,
//   FaPhoneSquareAlt,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import "./contact.css";

// const Contact = () => {
//   <script>
//   const scriptURL = '<https://script.google.com/macros/s/AKfycbw-_-NjTrC1UDirrmxNKXlZwJdq10uGQb4IVrZO3FrGwE_Acd97eYO6F4kXCUnJjcRL/exec>'
//   const form = document.forms['submit-to-google-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message))
//   })
// </script>
//   return (
//     <>
//       <div id="contact">
//         <div className="container">
//           <div className="row">
//             <div className="contact-left">
//               <h1 className="sub-title">Contact Me</h1>
//               <p>
//                 <FaPaperPlane className="contact-icon" /> sample@gmail.com
//               </p>
//               <p>
//                 <FaPhoneSquareAlt className="contact-icon" />
//                 0123456789
//               </p>
//               <div className="social-icons">
//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebook className="social-icon fa-facebook" />
//                 </a>
//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagram className="social-icon fa-instagram" />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedin className="social-icon fa-linkedin" />
//                 </a>
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaXTwitter className="social-icon" />
//                 </a>
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGithub className="social-icon" />
//                 </a>
//               </div>
//             </div>
//             <div className="contact-right">
//               <form name="submit-to-google-sheet">
//                 <input
//                   type="text"
//                   name="Name"
//                   placeholder="Your Name"
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="Email"
//                   placeholder="Your Email"
//                   required
//                 />
//                 <textarea
//                   name="Message"
//                   rows="6"
//                   placeholder="Your Message"
//                 ></textarea>
//                 <button type="submit" className="btn btn2">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="copyright">
//         <p>&copy; 2024 My Portfolio | All rights reserved.</p>
//       </div>
//     </>
//   );
// };

// export default Contact;
