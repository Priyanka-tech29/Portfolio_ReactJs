
import React,{useState} from "react";

import workapi from "./Api/Workapi";



const HowitWorks = () => {
    const [workData,setWorkData]=useState(workapi);
    console.log(workData);
  return (
    <div>
      
     <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it work</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <div className="logo-style-one">
                  <i class="uil uil-download-alt logo-style"></i></div>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-paraa w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default HowitWorks;

