// import React from "react"
// import "./Resume.css"
// import ResumeApi from "./ResumeApi"
// import Card from "./Card"

// const Resume = () => {
//   return (
//     <>
//       <section className='Resume' id='resume'>
//         <div className='container top'>
//           <div className='heading text-center'>
//             {/* <h4>7+ YEARS OF EXPERIENCE</h4> */}
//             <h1>My Resume</h1>
//           </div>

//           <div className='content-section mtop d_flex'>
//             <div className='left'>
//               <div className='heading'>
//                 {/* <h4>2007-2010</h4> */}
//                 <h1>Education Quality</h1>
//               </div>

//               <div className='content'>
//                 {ResumeApi.map((val, id) => {
//                   if (val.category === "education") {
//                     return <Card key={id} title={val.title} year={val.year} rate={<i class="fa-solid fa-graduation-cap"></i>} desc={val.desc} />
//                   }
//                 })}
// {/* 
//                 <div className='box btn_shadow'>
//                   <div className='title_content d_flex'>
//                     <div className='title'>
//                       <h2>Personal Portfolio April Fools</h2>
//                       <span>University of DVI (1997 - 2001)</span>
//                     </div>
//                     <div className='rate'>
//                       <button className='btn_shadow '>4.30/5</button>
//                     </div>
//                   </div>
//                   <hr />
//                   <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
//                 </div> */}
//               </div>
//             </div>
//             <div className='left'>
//               <div className='heading'>
//                 {/* <h4>2007-2010</h4> */}
//                 <h1>Experience</h1>
//               </div>

//               <div className='content'>
//                 {ResumeApi.map((val, index) => {
//                   if (val.category === "experience") {
//                     return <Card key={index} title={val.title} year={val.year} rate={<i class="fa-solid fa-award"></i>} desc={val.desc} />
//                   }
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Resume
import React from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  // Helper function to render content based on category
  const renderContent = (category, iconClass) => {
    return ResumeApi.filter((val) => val.category === category).map((val, id) => (
      <Card
        key={id}
        title={val.title}
        year={val.year}
        rate={<i className={iconClass}></i>}
        desc={val.desc}
      />
    ));
  };

  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h1>My Resume</h1>
          </div>

          <div className="content-section mtop d_flex">
            {/* Education Section */}
            <div className="left">
              <div className="heading">
                <h1>Education Qualification</h1>
              </div>
              <div className="content">{renderContent("education", "fa-solid fa-graduation-cap")}</div>
            </div>

            {/* Experience Section */}
            <div className="left">
              <div className="heading">
                <h1>Experience</h1>
              </div>
              <div className="content">{renderContent("experience", "fa-solid fa-award")}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
