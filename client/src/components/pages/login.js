import React, { useState } from "react";
import '../css/login.css';
import { NavLink, useNavigate } from 'react-router-dom';


const Loginapp = () => {

    const navigate=useNavigate();

    // const [state,setState]=useState({});
    // // const [message, setMessage] = useState("");
    // console.log(state);
    // useEffect(() => {
    //     fetch('http://localhost:5000/login',{
    //         method:"POST",
    //         headers:{
    //           'Content-type':'application/json'
    //     },
    //     // body:JSON.stringify(this.state)
    //     })
    //     .then((res) =>{
    //          return res.json()
    //         })
    //     // .then((data) => setMessage(data.message));
    //     .then((data) => setState(data));
    // },[]);



    const [user, setUser] = useState({
        name: "", email: "", password: ""
    });

    // let name, value;

    const handleInputs = (e)=>{
        console.log(e);
        // name = e.target.name;
        let name=e.target.name;
        let value = e.target.value;

        setUser({...user,[name]:value});
    };


    const PostLoginData=async(e)=>{
        e.preventDefault();

        const {name, email, password}=user;

        const resp =await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, password  //name:name, email:email, password:password
            })
        });

        const data=await resp.json();

        // console.log(resp.status)

        if(resp.status === 400 || !data){
            window.alert("Invalid Registration Details");
            console.log("Invalid Registration Details");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");

            navigate("/");
        }
    }

    // const onClickReset=(e)=>{
    //      e.preventDefault();
    //     //  const [name,setName]=useState("");

    // }

    return (

        <body className="loginbody">
            <div className="containerlogin">
                <div className="logodivlogin">
                    <img className="login-img" src={require('../images/—Pngtree—customer login avatar_6015290.png')} alt="login img" />
                    {/* </div> <img class="avatar" src="../images/—Pngtree—customer login avatar_6015290.png" alt="login avatar" /> */}
                    <h3>Sign In</h3>
                    <h4>Get access to your Orders, Wishlist and Recommendations</h4>
                    <h4 className="login-page-dont-have-account">Don't have account?</h4>
                    <NavLink className="login-page-dont-have-account2" to="/register"><a href="/register">Sign Up!</a></NavLink>
                </div>
                <form className="loginform" method="post">
                    <fieldset className="loginfieldset">
                        <legend>Personal Details</legend>
                        <table>
                            <tr>
                                <td className="headline"><label for="name">Username:</label></td>
                                <td><input type="text" name="name" id="name" autofocus value={user.name}  onChange={handleInputs} /></td>
                            </tr>
                            <tr>
                                <td className="headline"><label for="email">Email:</label></td>
                                <td><input type="email" name="email" id="email" value={user.email} onChange={handleInputs} /></td>
                            </tr>
                            <tr>
                                <td className="headline"><label for="password">Password:</label></td>
                                <td><input type="password" name="password" id="password" value={user.password} onChange={handleInputs} /></td>
                            </tr>
                            <tr>
                                <td><input type="submit" className="login-submit-btn" value="LOGIN" onClick={PostLoginData} /></td>
                                {/* <td><input type="reset" className="login-reset-btn" value="Reset" onClick={onClickReset} /></td> */}
                                <td></td>
                            </tr>
                        </table>
                    </fieldset>
                </form>
            </div>
            {/* <h2>{message}</h2> */}
        </body>
    );
};

// console.log(Loginapp);

export default Loginapp;