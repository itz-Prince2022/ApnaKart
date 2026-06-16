import React from "react";
import '../css/scroll_items.css';
// import img1 from 'https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100';

const ScrollItems = () => {
 
  // const list = [
  //   'Grocery','Mobiles','Fashion','Electronics','Home & Furniture'
  // ]

  return (
<div className="scroll-main">
      <div className="item-container">
        <div className="items">
          <img src={require('../images/img2.webp')} alt="grocery" />
          <h3>Grocery</h3>
        </div>
        <div className="items">
          <img src={require('../images/img3.jpeg')} alt="Mobiles" />
          <h3>Mobiles</h3>
        </div>
        <div className="items fashion-items">
          <img src={require('../images/img4.webp')} alt="Fashion" />
          <h3 className="fashionh3">Fashion <i class="ri-arrow-down-s-line arrow-rotate-in-items"></i></h3>
          <ul className="fashion-extended-info">
            <li className="list-hover-elements">Men's Top wear
            <ul className="test-ul">
            <li><h4>More in Men's Top Wear</h4></li>
            <li>All</li>
            <li>Men's T-Shirts</li>
            <li>Mens's Causal Shirts</li>
            <li>Men's Formal Shirt</li>
            <li>Men's Ethnic Sets</li>
            <li>Men's Blazers</li>
            <li>Men's Windcheaters</li>
            <li>Men's Suit</li>
            </ul>
            </li>
            <li>Men's Bottom wear</li>
            <li>Women Ethics</li>
            <li>Women Western</li>
            <li>Men Footwear</li>
            <li>Watches and footwear</li>
            <li>Bags, Suitcase & Luggages</li>
            <li>kids</li>
            <li>Essentials</li>
            <li>Winter</li>
          </ul>
          
          {/* <select id="fashion" className="fashion-extended-info">
            <option>Choose Your Option</option>
            <option>Men's Top wear</option>
            <option>Men's Bottom wear</option>
            <option>Women Ethics</option>
            <option>Women Western</option>
          </select> */}
        </div>
        <div className="items fashion-items" aria-label="fashion">
          <img src={require('../images/laptop.webp')} alt="Electronics" />
          <h3 className="fashionh3">Electronics <i class="ri-arrow-down-s-line arrow-rotate-in-items"></i></h3>
          <ul className="fashion-extended-info">
            <li>Audio</li>
            <li>Electronics GST Store</li>
            <li>Cameras & Accessories</li>
            <li>Gaming</li>
            <li>Health & Personal Care</li>
            <li>laptop Accessories</li>
            <li>laptop and Desktop</li>
            <li>Mobile Accessory</li>
            <li>PowerBank</li>
            <li>Smart Home Automation</li>
            <li>Smart Wearables</li>
          </ul>
            {/* {
              list.map((item)=>(
                <li className="scrolling">{item}</li>
              ))
            } */}
             {/* <select id="fashion" className="fashion-extended-info">
               <option>Choose Your Option</option>
               <option>Men's Top wear</option>
               <option>Men's Bottom wear</option>
               <option>Women Ethics</option>
            <option>Women Western</option>
          </select> */}
        </div>
        <div className="items fashion-items"aria-label="fashion">
          <img src={require('../images/home.webp')} alt="Home & Furnitures" />
          <h3 className="fashionh3 fashionh-home-furniture">Home & Furniture<i class="ri-arrow-down-s-line arrow-rotate-in-items"></i></h3>
          <ul className="fashion-extended-info">
            <li>Home furnishings</li>
            <li>Furniture studio</li>
            <li>Living Room furniture</li>
            <li>kitchen & Dining</li>
            <li>Space Saving Furniture</li>
            <li>Home Decor</li>
            <li>Tools & Utility</li>
            <li>Work Space Furniture</li>
            <li>Kids Furniture</li>
            <li>lightings & Electricals</li>
            <li>Cleaning & Bath</li>
          </ul>
        </div>
        <div className="items">
          <img src={require('../images/wash.webp')} alt="Appliances" />
          <h3>Appliances</h3>
        </div>
        <div className="items">
          <img src={require('../images/airtkt.webp')} alt="Travel" />
          <h3>Travel</h3>
        </div>
        <div className="items fashion-items" aria-label="fashion">
          <img src={require('../images/baby.webp')} alt="Beauty, Toys & More" />
          <h3  className="fashionh3 fashionh-home-furniture">Beauty, Toys & More<i class="ri-arrow-down-s-line arrow-rotate-in-items"></i></h3>
          <ul className="fashion-extended-info">
            <li>Beauty & Personal Care</li>
            <li>Men's Grooming</li>
            <li>Food & Drinks</li>
            <li>Nutrition & Health Care</li>
            <li>Baby Care</li>
            <li>Toys & School Supplies</li>
            <li>Sports & Fitness</li>
            <li>Books</li>
            <li>Musics</li>
            <li>Statonery & office Supplies</li>
            <li>Auto Accessories</li>
          </ul>
        </div>
        <div className="items fashion-items">
          <img src={require('../images/twowheel.webp')} alt="Two Wheelers" />
          <h3 className="fashionh3 fashionh-home-furniture">Two Wheelers<i class="ri-arrow-down-s-line arrow-rotate-in-items"></i></h3>
          <ul className="fashion-extended-info">
            <li>Petrol Vehicles</li>
            <li>Electric Vehicles</li>
          </ul>
        </div>
      </div>
      </div>
  );
};

export default ScrollItems;