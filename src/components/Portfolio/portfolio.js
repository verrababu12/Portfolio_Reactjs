import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./portfolio.css"; // Import your CSS file for styling

const Portfolio = () => {
  // State to manage the visibility of additional projects
  const [showMore, setShowMore] = useState(false);

  // Function to toggle additional projects visibility
  const handleSeeMoreClick = () => {
    setShowMore((prev) => !prev); // Toggle the state
  };

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="Nxt Trendz"
            />
            <div className="layer">
              <h3>Nxt Trendz App</h3>
              <p>
                Implemented Nxt Trendz application which is a clone for
                ECommerce applications like Amazon, Flipkart where users can
                login and can see list of products with search, filters, sort
                by, etc..
              </p>
              <a
                href="https://vbnxttrendz.ccbp.tech/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>

          <div className="work">
            <img
              src="https://res.cloudinary.com/daehuqvdc/image/upload/v1729238425/Premium_Vector___Clipboard_with_checklist_todo_check_list_business_education_task_management_and_productivity_concept_3d_vector_icon_cartoon_minimal_style_q2itep.jpg"
              alt="Todo-List"
            />
            <div className="layer">
              <h3>Todo-List App</h3>
              <p>
                A comprehensive todo management tool designed to enhance
                productivity. User-friendly interface with HTML, CSS, and
                Bootstrap for ease of use. Effortless task management through
                JavaScript-based CRUD operations with dynamic UI updates. Your
                tasks are always safe with local storage methods to ensure task
                persistence.
              </p>
              <a
                href="https://vbtodolist.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>

          <div className="work">
            <img
              src="https://res.cloudinary.com/daehuqvdc/image/upload/v1729238698/Rectangle_1456_1_qv0kmz.png"
              alt="Tasty Kitchens"
            />
            <div className="layer">
              <h3>Tasty Kitchens App</h3>
              <p>
                Constructed an engaging Online Food Ordering Service akin to
                Swiggy/Zomato, enabling users to discover top restaurants,
                obtain in-depth restaurant details, manage their cart, and
                process payments. Technologies used: HTML, CSS, JavaScript,
                React JS, Bootstrap, React Slick, Figma, client storage.
              </p>
              <a
                href="https://vbrestaurant.ccbp.tech/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>

          {/* Additional Projects */}
          {showMore && (
            <>
              <div className="work">
                <img
                  src="https://res.cloudinary.com/daehuqvdc/image/upload/v1729243498/Login_Design_for_Rental_App_iogwb2.jpg"
                  alt="Login App"
                />
                <div className="layer">
                  <h3>Login App</h3>
                  <p>
                    "A secure login application developed with ReactJS for the
                    front end, offering a seamless user interface. Node.js
                    powers the backend, handling authentication processes, while
                    MongoDB is used as the database to store user credentials
                    securely. The app includes features like password hashing,
                    session management, and real-time data validation."
                  </p>
                  <a
                    href="https://reactjs-mongodb-mern-app.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>

              <div className="work">
                <img
                  src="https://res.cloudinary.com/daehuqvdc/image/upload/v1729243759/How_to_Create_a_Restaurant_App__An_Essential_Guide_for_Business_Owners_pzutsf.jpg"
                  alt="Food Munch App"
                />
                <div className="layer">
                  <h3>Food Munch Restaurant App</h3>
                  <p>
                    Food Munch is a restaurant app designed to offer a
                    user-friendly interface for browsing menus, placing orders,
                    and tracking deliveries. Built with a responsive design, it
                    features a seamless ordering process and secure payment
                    options."
                  </p>
                  <a
                    href="https://foodmunchveeru.ccbp.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>

              <div className="work">
                <img
                  src="https://res.cloudinary.com/daehuqvdc/image/upload/v1729243982/IPL_ARRIVING_qzntwt.jpg"
                  alt="IPL Dashboard App"
                />
                <div className="layer">
                  <h3>IPL Dashboard App</h3>
                  <p>
                    The app offers a user-friendly interface, enabling fans to
                    follow their favorite teams and players throughout the
                    tournament.
                  </p>
                  <a
                    href="https://veeruiplapp.ccbp.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
        <button className="btn" onClick={handleSeeMoreClick}>
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Portfolio;

// import React from "react";
// import { Link } from "react-scroll";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import "./portfolio.css"; // Import your CSS file for styling

// const Portfolio = () => {
//   return (
//     <div id="portfolio">
//     <div className="container">
//       <h1 className="sub-title">My Work</h1>
//       <div className="work-list">
//         <div className="work">
//           <img
//             src="https://res.cloudinary.com/daehuqvdc/image/upload/v1728014972/harry_Potter_pfp_HarryPotter_background_Potterhead_Hogwarts_pic_harry_Potter_icon_thv7pr.jpg"
//             alt="img"
//           />
//           <div className="layer">
//             <h3>Social Media</h3>
//             <p>Some Description</p>
//             <a href="https://your-external-link-for-social-media.com" target="_blank" rel="noopener noreferrer">
//               <FaArrowUpRightFromSquare />
//             </a>
//           </div>
//         </div>

//         <div className="work">
//           <img
//             src="https://res.cloudinary.com/daehuqvdc/image/upload/v1728014971/The_Hardest__Harry_Potter__Spelling_Test_You_ll_Ever_Take_yh3pdd.jpg"
//             alt="img"
//           />
//           <div className="layer">
//             <h3>E-commerce</h3>
//             <p>Some Description</p>
//             <a href="https://your-external-link-for-e-commerce.com" target="_blank" rel="noopener noreferrer">
//               <FaArrowUpRightFromSquare />
//             </a>
//           </div>
//         </div>

//         <div className="work">
//           <img
//             src="https://res.cloudinary.com/daehuqvdc/image/upload/v1728014971/6acfd06e-498f-4bc5-af90-38ab3682ffb1_esvihf.jpg"
//             alt="img"
//           />
//           <div className="layer">
//             <h3>Nxt Trendz</h3>
//             <p>Some Description</p>
//             <a href="https://your-external-link-for-nxt-trendz.com" target="_blank" rel="noopener noreferrer">
//               <FaArrowUpRightFromSquare />
//             </a>
//           </div>
//         </div>
//       </div>
//         <Link className="btn">See More</Link>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
