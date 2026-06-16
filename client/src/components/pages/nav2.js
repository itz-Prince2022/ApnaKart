import React, { useState } from "react";
import '../css/nav2.css';
import { NavLink } from "react-router-dom";

const Navbar2 = () => {

    const [rotate, setRotate] = useState(false);

    const [showMenu, setShowMenu] = useState(false);  //initial condition is set to false
    return (
        <>
            <div className="nav-container">
                <h2 className="logo">Apna<span className="logo-color">Kart</span></h2>
                <form>
                    <i class="ri-search-line"></i>
                    <input type="search" placeholder="Search for Products, Brands and More" />
                </form>
                <div className="right-nav">
                    <NavLink className="navbar-link" to="/Seller"><a className="navbar-link" href="/seller"><i class="ri-store-2-line size" title="Become a Seller"></i></a></NavLink>
                    <div className="nav-user cursor" onClick={() => { setRotate(!rotate) }}>
                        {/* <div className={setShowMenu?"nav-user":"nav-user "}> */}
                        <i class="ri-user-line size nav-user"></i>
                        <i class="ri-arrow-down-s-line size" className={rotate?"ri-arrow-down-s-line-after ri-arrow-down-s-line size":"ri-arrow-down-s-line-before ri-arrow-down-s-line size"}></i>
                        {/* <ul className={rotate ? " more-menu-after-click" : "more-menu"}>
                            <NavLink className="navbar-link" to="/my-profile"><a className="navbar-link" href="/my-progile"><li className="more-cursor">My Profile</li></a></NavLink>
                            <NavLink className="navbar-link" to="/ApnaKart-Plus-Zone"><a className="navbar-link" href="/ApnaKart-Plus-Zone"><li className="more-cursor">ApnaKart Plus Zone</li></a></NavLink>
                            <NavLink className="navbar-link" to="/Advertise"><a className="navbar-link" href="/Advertise"><li className="more-cursor">Orders</li></a></NavLink>
                            <NavLink className="navbar-link" to="/Wishlist"><a className="navbar-link" href="/Wishlist"><li className="more-cursor-last more-cursor">Wishlist</li></a></NavLink>
                            <NavLink className="navbar-link" to="/Rewards"><a className="navbar-link" href="/Rewards"><li className="more-cursor-last more-cursor">Rewards</li></a></NavLink>
                            <NavLink className="navbar-link" to="/Gift-Cards"><a className="navbar-link" href="/Gift-Cards"><li className="more-cursor-last more-cursor">Gift Cards</li></a></NavLink>
                        </ul> */}
                            <ul className="drop-menu">
                                <NavLink className="navbar-link" to="/sign-up"><li className="more-cursor">New customer?<a className="navbar-link-signup" href="/sign-up">Sign Up</a></li></NavLink>
                                <hr />
                                <NavLink className="navbar-link" to="/my-profile"><a className="navbar-link" href="/my-progile"><li className="more-cursor"><i class="ri-user-3-line nav-list-img"></i>My Profile</li></a></NavLink>
                                <NavLink className="navbar-link" to="/ApnaKart-Plus-Zone"><a className="navbar-link" href="/ApnaKart-Plus-Zone"><li className="more-cursor"><i class="ri-add-circle-line nav-list-img"></i>ApnaKart Plus Zone</li></a></NavLink>
                                <NavLink className="navbar-link" to="/Advertise"><a className="navbar-link" href="/Advertise"><li className="more-cursor"><i class="ri-box-3-line nav-list-img"></i>Orders</li></a></NavLink>
                                <NavLink className="navbar-link" to="/Wishlist"><a className="navbar-link" href="/Wishlist"><li className="more-cursor-last more-cursor"><i class="ri-heart-2-line nav-list-img"></i>Wishlist</li></a></NavLink>
                                <NavLink className="navbar-link" to="/Rewards"><a className="navbar-link" href="/Rewards"><li className="more-cursor-last more-cursor"><i class="ri-gift-line nav-list-img"></i>Rewards</li></a></NavLink>
                                <NavLink className="navbar-link" to="/Gift-Cards"><a className="navbar-link" href="/Gift-Cards"><li className="more-cursor-last more-cursor"><i class="ri-money-dollar-box-line nav-list-img"></i>Gift Cards</li></a></NavLink>
                            </ul>
                    </div>
                    <NavLink className="navbar-link" to="/shopping cart"><a className="navbar-link" href="/shopping cart"><i class="ri-shopping-cart-2-line size" title="Cart"></i></a></NavLink>
                    <i class="ri-more-2-fill size more cursor" onClick={() => { setShowMenu(!showMenu) }}>  {/*Here we are changing the state*/}
                    {/* <ul className="more-menu"> */}
                    {/* <ul className={showMenu ? " more-menu-after-click" : "more-menu"}>
                        <NavLink className="navbar-link" to="/notification"><a className="navbar-link" href="/notification"><li className="more-cursor"><i class="ri-notification-4-line nav-list-img"></i>Notification preferences</li></a></NavLink>
                        <NavLink className="navbar-link" to="/24*7customer"><a className="navbar-link" href="/24*7customer"><li className="more-cursor"><i class="ri-customer-service-2-line nav-list-img"></i>24*7Customer Care</li></a></NavLink>
                        <NavLink className="navbar-link" to="/Advertise"><a className="navbar-link" href="/Advertise"><li className="more-cursor"><i class="ri-funds-box-line nav-list-img"></i>Advertise</li></a></NavLink>
                        <NavLink className="navbar-link" to="/Download App"><a className="navbar-link" href="/Download App"><li className="more-cursor-last more-cursor"><i class="ri-download-2-line nav-list-img"></i>Download App</li></a></NavLink>
                    </ul> */}
                         <ul className="test-nav">
                            <NavLink className="navbar-link" to="/notification"><a className="navbar-link" href="/notification"><li className="more-cursor"><i class="ri-notification-4-line nav-list-img"></i>Notification preferences</li></a></NavLink>
                            <NavLink className="navbar-link" to="/24*7customer"><a className="navbar-link" href="/24*7customer"><li className="more-cursor"><i class="ri-customer-service-2-line nav-list-img"></i>24*7Customer Care</li></a></NavLink>
                            <NavLink className="navbar-link" to="/Advertise"><a className="navbar-link" href="/Advertise"><li className="more-cursor"><i class="ri-funds-box-line nav-list-img"></i>Advertise</li></a></NavLink>
                            <NavLink className="navbar-link" to="/Download App"><a className="navbar-link" href="/Download App"><li className="more-cursor-last more-cursor"><i class="ri-download-2-line nav-list-img"></i>Download App</li></a></NavLink>
                        </ul>
                    </i>
                </div>
            </div>
        </>
    );
};

export default Navbar2;