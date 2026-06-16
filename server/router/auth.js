const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const cors=require('cors');

// const ejs=require('ejs');
// //set the view engine to ejs
// router.set('view engine','ejs');

//requiring database and schema
require("../db/conn");
const User=require("../model/userSchema");

router.get('/',(req,res)=>{
    res.send("This is from router");
});


/********************************************************************************************
 * Name:Prince Patel
 *Description:this is my testing project
 *Date:20/10/23
********************************************************************************************/

//this is for test
// router.get('/login/:username',(req,res)=>{
//     // let name="Prince";
//     let name=req.params.username; //this s used to get params //route parameters
//     res.status(500).render('index',{name});
// });

router.get('/register',(req,res)=>{
    res.render('register');
});

router.get('/login',(req,res)=>{
    // let name="Prince";
    res.status(500).render('login');
    // res.json({message:"HELLO FROM SERVER Prince"});
});

/********************************************************************************************
 * Name:Prince Patel
 *Description:this is my main project
 *Date:20/10/23
********************************************************************************************/


//using promises

// router.post('/register',(req,res)=>{

//     const{name,email,phone,work,password,cpassword}=req.body;
//     /*// console.log(req.body.name);
//     //console.log(name);
//     //res.json({message:req.body});*/
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"Plz fill out the fields properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//         return res.status(422).json({error:"Email Already Exist"});
//         }

//         const user=new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user register successfully"});
//         }).catch((err)=>res.status(500).json({error:"Failed to register"}));
//     }).catch(err=>{console.log(err);});
// });

//using async and await
router.post('/register',async(req,res)=>{
    /*console.log(req.body.name);*/
    const{name,email,phone,work,password,cpassword}=req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Plz fill out the fields properly"});
    }

    try{

        const userExist=await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"Email Already Exist"});
        }else if(password!=cpassword){
            return res.status(422).json({error:"Passwords are not matching"});
        }else{
            const user=new User({name,email,phone,work,password,cpassword});
        
            await user.save();

            res.status(201).json({message:"user register successfully"});
        }
    } catch(err){
        console.log(err);
    }
});


//login route
router.post('/login',async(req,res)=>{
    try{
        let token;
        const{name,email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please fill details Properly"});
        }
        const loginUser=await User.findOne({email:email});

        if(loginUser.name!=name){
            return res.status(400).json({error:"Invalid userName"});
        }

        if(loginUser){
                const isMatch=await bcrypt.compare(password,loginUser.password);
                // console.log(isMatch);
                token = await loginUser.generateAuthToken();
                console.log(token);

                res.cookie("jwtToken",token,{
                    expires:new Date(Date.now() + 25892000000),
                    httpOnly:true
                });

                if(isMatch){     /*loginUser.password==password*/
                    res.json({message:"Login Successful"});
                }
                else{
                    res.status(400).json({message:"Invalid Details"});
                }
        }
        else{
            res.status(400).json({message:"Invalid Details"});
        }

    }catch(err){
         console.log(err);
    }
});

router.get('/contact',(req,res)=>{
    res.cookie("Test",'Prince');
    res.send('Hello from contact page');
});

module.exports=router;