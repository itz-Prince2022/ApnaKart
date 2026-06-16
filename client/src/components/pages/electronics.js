import React from "react";
import '../css/Electronics.css';

const Electronics = () => {
    return (
        <>
        <div className="electronic-main-section">
            <div id="Electronics-container">
                <div>
                    <div className="Electronics-header">
                        <h3 className="Electronics-h3">Best of Electronics</h3>
                        <a href="/test"><i class="ri-arrow-right-circle-fill electronics-arrow"></i></a>
                    </div>
                    <div className="Electronic-scroller">
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.webp')} alt="Electronic products" />
                            </div>
                            <div>
                             <div>Printers</div>
                             <h4>From $399</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/sdsqua4-256g-gn6mn-sandisk-original-imagdv34rzuhp9f2.webp')} alt="Electronic products" />
                            </div>
                             <div>sandisk SD card
                             <h4>From $429</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.webp')} alt="Electronic products" />
                            </div>
                            <div>Nikon
                            <h4>$50000</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="powerbank">
                                <img src={require('../images/power-bank-dx09-20000-mah-dx09-20k-callmate-original-imagfgc35gr2grph.webp')} alt="Electronic products" />
                            </div>
                            <div>Power Bant
                            <h4>$999</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div className="shaver-img">
                                <img  src={require('../images/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.webp')} alt="Electronic products" />
                            </div>
                            <div>Shavers
                            <h4>$1649</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/f2023-aula-original-imagnhc44uakb4zb.webp')} alt="Electronic products" />
                            </div>
                            <div>Dell Keyboard
                            <h4>$300</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/-original-imaggd38vfwc6h7v.webp')} alt="Electronic products" />
                            </div>
                            <div>Monitors
                            <h4>$6599</h4>
                            </div>
                        </div>
                        <div className="electronics-items">
                            <div>
                                <img src={require('../images/-original-imagtr8npfrsbx6s.webp')} alt="Electronic products" />
                            </div>
                            <div>Projector
                            <h4>$6990</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Electronics;