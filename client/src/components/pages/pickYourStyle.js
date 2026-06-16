import React from "react";
import '../css/pickYourStyle.css'

const PickYourStyle=()=>{
    return(
        <>
         <div id="pickyourStyle-main">
                <div className="testpick">
                    <div className="Electronics-header">
                        <h3 className="Electronics-h3">Pick Your styles</h3>
                        <a href="/test"><i class="ri-arrow-right-circle-fill electronics-arrow"></i></a>
                    </div>
                    <div className="Electronic-scroller">
                        <div className="electronics-items">
                            <div className="img-div-pickstyle">
                                <img src={require('../images/stylepick.webp')} alt="Electronic products" />
                            </div>
                            <div>
                             <div>Men Solid Bomber Jacket</div>
                             <h4>From $2399</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="img-div-pickstyle">
                                <img src={require('../images/sylepick1.webp')} alt="Electronic products" />
                            </div>
                             <div>Men Regular Fit Printed Spread Collar Casual Shirt
                             <h4>From $1429</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="img-div-pickstyle">
                                <img src={require('../images/stylepick2.webp')} alt="Electronic products" />
                            </div>
                            <div>Men Printed Round Neck Blue Sweater
                            <h4>$5000</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="powerbankstyle img-div-pick">
                                <img src={require('../images/stylepick3.webp')} alt="Electronic products" />
                            </div>
                            <div>Men Colorblock Round Neck White Sweater
                            <h4>$1999</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="img-div-pickstyle">
                                <img  src={require('../images/stylepick4.webp')} alt="Electronic products" />
                            </div>
                            <div>Men Solid Bomber Jacket
                            <h4>$2649</h4>
                            </div >
                        </div>
                        <div className="electronics-items">
                            <div className="img-div-pickstyle">
                                <img src={require('../images/stylepick5.webp')} alt="Electronic products" />
                            </div>
                            <div>Men Striped Round Neck Maroon Sweater
                            <h4>$3200</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="img-div-pickstyle">
                                <img src={require('../images/stylepick6.webp')} alt="Electronic products" />
                            </div>
                            <div>Men Colorblock Tailored Jacket
                            <h4>$1599</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="img-div-pickstyle">
                                <img src={require('../images/stylepick7.webp')} alt="Electronic products" />
                            </div>
                            <div>Men Colorblock Round Neck White Sweater
                            <h4>$990</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PickYourStyle;