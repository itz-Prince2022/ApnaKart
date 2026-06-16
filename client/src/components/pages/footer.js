import React from "react";
import '../css/footer.css'
const Footer=()=>{
    return(
        <footer>
            <div className="footer-main">
                <ul>
                    <h3>About</h3>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Apnakart Wholesale</li>
                    <li>Cleartrip</li>
                    <li>Corporate Information</li>
                </ul>
                <ul>
                    <h3>Help</h3>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringements</li>
                </ul>
                <ul>
                    <h3>Consumption</h3>
                    <li>Cancellation & Returns</li>
                    <li>Terms of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>Grievance Redressal</li>
                    <li>ERP Compliance</li>
                </ul>
                <ul>
                    <h3>Social</h3>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
                {/* <div className="inside-footer-div"> */}
                    <ul className="inside-footer-li">
                        <h3 className="inside-li">Mail Us:</h3>
                        <li>ApnaKart Internet Private Limited</li>
                        <li>Buildings</li>
                        <li>Clove Embassy Tech Village</li>
                        <li>OuterRing Road, Devarabeesanahalli Village</li>
                        <li>Bengluru, 560103</li>
                        <li>Karnataka, India</li>
                    </ul>
                    <ul>
                        <h3 className="inside-li">Registered Office Address:</h3>
                        <li>ApnaKart Internet Private limited</li>
                        <li>Buildings Alyssa, Begonia &</li>
                        <li>Clove Embassy Tech Village</li>
                        <li>Outer Ring Road,Devarabeesanahali Village</li>
                        <li>Bengaluru,56010503</li>
                        <li>Karnataka, India</li>
                        <li>CIN:U51109K2012ptcKLDNCL340</li>
                        <li>Telephone:<span className="telephone-no">044-456246700</span></li>
                    </ul>
                {/* </div> */}
            </div>
        </footer>
    );
}

export default Footer;