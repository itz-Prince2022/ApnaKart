import React from "react";
import '../css/home_kitchen.css'

const Home_Kitchen=()=>{
    return(
        <>
          <section className="Home-Kitchen-main">
            <div id="Electronics-container">
                <div>
                    <div className="Electronics-header">
                        <h3 className="Electronics-h3">Home & Kitchen Essentials</h3>
                        <a href="/test"><i class="ri-arrow-right-circle-fill electronics-arrow"></i></a>
                    </div>
                    <div className="Electronic-scroller">
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/home1.webp')} alt="Electronic products" />
                            </div>
                            <div>
                             <div>Printers</div>
                             <h4>From $399</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/home2.webp')} alt="Electronic products" />
                            </div>
                             <div>Wall Decor items
                             <h4>From $649</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/home3.webp')} alt="Electronic products" />
                            </div>
                            <div>Clocks
                            <h4>$500</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="powerbank">
                                <img src={require('../images/home4.webp')} alt="Electronic products" />
                            </div>
                            <div>Decor lightinings
                            <h4>$999</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img  src={require('../images/home5.webp')} alt="Electronic products" />
                            </div>
                            <div>Bulbs
                            <h4>$16</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/home6.webp')} alt="Electronic products" />
                            </div>
                            <div>Appliance Covers
                            <h4>$300</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/home7.webp')} alt="Electronic products" />
                            </div>
                            <div>Vases
                            <h4>$599</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/home8.webp')} alt="Electronic products" />
                            </div>
                            <div>Bed Cover
                            <h4>$45990</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </>
    );
}

export default Home_Kitchen;