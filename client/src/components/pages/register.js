import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/register.css'

const Register=()=>{

    // const [disabled,setDisabled]=useState(false);

    const navigate=useNavigate();

    const [user, setUser] = useState({
        name: "", email: "",phone: "",work: "",password: "",cpassword: ""
    });

    let name, value;

    const handleInputs = (e)=>{
        console.log(e);
        // name = e.target.name;
        name=e.target.name
        value = e.target.value;

        setUser({...user,[name]:value});
    };


    const PostLoginData=async(e)=>{
        e.preventDefault();

        const {name, email, phone, work, password, cpassword}=user;

        const resp =await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword  //name:name, email:email, password:password
            })
        });

        const data=await resp.json();

        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else{
            window.alert("Registration Successful");
            console.log("Registration Successful");

            navigate("/register");
        }
    }

    // const resetbtn =(e)=>{
    //     setDisabled(e.target.value);
    // }

    return(
        <>
    <div class="registration-container">
        <div>
            <img class="loginimg" src={require('../images/—Pngtree—customer login avatar_6015290.png')} alt="login avatar"/>
            <h2>Sign In</h2>
            <h3>Already have a user account?</h3>
            <NavLink className="register-to-login" to="/sign-up"><a href="/sign-up">Login!</a></NavLink>
        </div>
    <form className='register-form'  method="post" Content-Type="application/json" >
        <table>
        <tr><td>Name:</td><td><input type="text" name="name" value={user.name} onChange={handleInputs}/></td></tr>
        <tr><td>Email:</td><td><input type="email" name="email" value={user.email}  onChange={handleInputs} /></td></tr>
        <tr><td>Phone:</td><td><input type="number" name="phone" value={user.phone}  onChange={handleInputs}/></td></tr>
        <tr><td>Work:</td><td><input type="text" name="work"value={user.work}  onChange={handleInputs} /></td></tr>
        <tr><td>Password:</td><td><input type="password" name="password" value={user.password}  onChange={handleInputs} /></td></tr>
        <tr><td>Cpassword:</td><td><input type="text" name="cpassword" value={user.cpassword}  onChange={handleInputs} /></td></tr>
        <tr><td><input type="submit" className='register-submit' value="Register" onClick={PostLoginData} /></td><td><input className='register-reset' type="reset" value="Reset" /></td></tr>
        </table>
    </form>
    </div>
        </>
    )
}

export default Register;