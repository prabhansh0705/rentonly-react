import React from "react";
// import { Link } from "react-router-dom";
import arrow_right from "../images/arrow-right.png";

export const GetInTouch = (props) => {
    
    // let handleGetInTouch = () => {
        // e.preventDefault();
        // console.log('hehe');
        // let mailto="mailto:@gmailsaadm28399.com";
        // window.location.href = mailto;
        // < Link to="#" onClick={(e) => { window.location.href = mailto; e.preventDefault();}} ></Link>
    // }
  return (
    <>  
        {/* <a onClick={handleGetInTouch}> */}

        <div className="explore_cards_container_button explore_cards_container_second_button" 
            // onClick={handleGetInTouch}
            >
            <p className="explore_cards_container_button_text">
                Get in touch today
            </p>
            <img className="arrow_right_image" src={arrow_right} />
        </div>

        {/* </a> */}
    </>
  );
};
