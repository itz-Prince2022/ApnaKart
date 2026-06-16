import React from "react";
import '../css/home.css';
// import image from '../images/img1.jpg'
import ScrollItems from "./scroll_items";
// import Electronics from "./electronics";
// import HomeKitchen from "./Home_kitchen";
import MainPage from "./mainPage";
import Footer from "./footer";

// import img1 from '../images/41bc0960f1ac51c3.webp';
// import img2 from '../images/785781fd1237d832.webp';
// import img3 from '../images/d5a2a6481656bb58.webp';
// import img4 from '../images/537c6ef6554072c1.webp';
// import img5 from '../images/b21b5be304d115cd.webp';

const Home = () => {

    // const change_img=()=>{
    //     var element = document.querySelector(".topimages");
    //     element.style.background='url('+img1+')';
    // }

    // var [count,setCount]=useState(0);

    // useEffect(()=>{
    //     const interal= setInterval(()=>{
    //         // setCount(count+1);
    //         if(count===0){
    //            document.querySelector(".topimages").style.background='url('+img1+')';
    //            setCount(2);
    //         }
    //         else if(count===2){
    //             document.querySelector(".topimages").style.background='url('+img2+')';
    //             setCount(3);
    //         }
    //         else if(count===3){
    //             document.querySelector(".topimages").style.background='url('+img3+')';
    //             setCount(4)
    //         }
    //         else if(count===4){
    //             document.querySelector(".topimages").style.background='url('+img4+')';
    //             setCount(5)
    //         }
    //         else if(count===5){
    //            document.querySelector(".topimages").style.background='url('+img5+')';
    //            setCount(0);
    //         }
    //         // else if(count===6)
    //         //       setCount(0);
    //     },2000);

    //     return ()=>{clearInterval(interal)};

    // },[count]);



    // let count=0;
    // const use= function slideimages(){ 
    //     count++;
    //     if(count === 1)
    //         document.backgroundColors="green";
    //     else if(count === 2){
    //         document.backgroundColors="yellow";
    //         count=0;
    //     }
    //     console.log('hello')
    // }

    // onLoad={setInterval(use,600)}

    const handleScroll = () => {
        var scroller = document.querySelector('.topimages');
        // scroller.scrollBy({
        //     left:760,
        //     behavior:"smooth",
        //     // behavior:"auto",
        // });

        // scroller.scrollTo(0,0);

        // scroller.scrollBy(window.innerWidth+2,0);


        let count = 1;
        setInterval(() => {
            if (count < 5) {
                scroller.scrollBy({
                    left: window.innerWidth + 2,
                    behavior: "smooth",
                });
                count++;
            }
            else {
                scroller.scrollTo({
                    left: -0,
                    behavior: "smooth",
                });
                count = 1;
            }
        }, 3000)
    };

    const scrollRight = () => {
        document.querySelector('.topimages').scrollBy({
            left: window.innerWidth + 2,
            behavior: "smooth"
        });
    };


    const scrollLeft = () => {
        document.querySelector('.topimages').scrollBy({
            left: -window.innerWidth + 2,
            behavior: "smooth",
        });
    };


    return (
        <body className="homebg" onLoad={handleScroll} >   {/*onLoad={change_img}*/}
            <ScrollItems />
            <div className="scroll-img">
                <div className="home-container">
                    <div title="Previous Slide" className="top-img-btn-right">
                        <button onClick={scrollLeft}><i class="ri-arrow-left-s-line top-img-arrow"></i></button>
                    </div>
                    <div className="topimages mainImg">
                        {/* <img className="mainImg" src={image} alt='this is image'/> */}
                        {/* {count} */}
                        <div>
                            <a href="/test">
                                <picture>
                                    <img loading="auto" src={require('../images/41bc0960f1ac51c3.webp')} alt="this is scroll advertisement" />
                                </picture>
                            </a>
                        </div>
                        <div>
                            <a href="/test">
                                <picture>
                                    <img loading="auto" src={require('../images/785781fd1237d832.webp')} alt="this is scroll advertisement" />
                                </picture>
                            </a>
                        </div>
                        <div>
                            <a href="/test">
                                <picture>
                                    <img loading="auto" src={require('../images/d5a2a6481656bb58.webp')} alt="this is scroll advertisement" />
                                </picture>
                            </a>
                        </div>
                        <div>
                            <a href="/test">
                                <picture>
                                    <img loading="auto" src={require('../images/537c6ef6554072c1.webp')} alt="this is scroll advertisement" />
                                </picture>
                            </a>
                        </div>
                        <div>
                            <a href="/test">
                                <picture>
                                    <img loading="auto" src={require('../images/b21b5be304d115cd.webp')} alt="this is advertisement" />
                                </picture>
                            </a>
                        </div>
                    </div>
                </div>
                <div title="Next Slide" className="top-img-btn-left">
                    <button onClick={scrollRight}><i class="ri-arrow-right-s-line top-img-arrow"></i></button>
                </div>
            </div>
            {/* <Electronics />
            <HomeKitchen /> */}
            {/* <PickYourStyle /> */}
            <MainPage/>
            <Footer/>
            {/* <div className="container2">
                <div className="card">card1
                   <img src="img1.jpg" alt="this is card image" />
                </div>
                <div className="card">card2</div>
                <div className="card">card3</div>
                <div className="card">card4</div>
                <div className="card">card5</div>
                <div className="card">card6</div>
            </div> */}
        </body>
    );
};

export default Home;