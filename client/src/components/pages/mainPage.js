import React from "react";
import '../css/Mainpage.css';
import PickYourStyle from "./pickYourStyle";
import Electronics from "./electronics";
import HomeKitchen from "./Home_kitchen";

const MainPage=()=>{
    return(
          <div className="main-page-div">
            <Electronics/>
            <HomeKitchen/>
            <PickYourStyle/>
          </div>
    );
}

export default MainPage;