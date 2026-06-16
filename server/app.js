const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ejs=require('ejs');
const cors=require('cors');
app.set('view engine','ejs')

dotenv.config({ path: "./config.env" });

require("./db/conn");
const port = process.env.PORT;

app.use(cors({
    origin:process.env.Origin,
    optionsSuccessStatus:200
}));
//   console.log(process.env.Origin);


// const User=require('./model/userSchema');

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));//withot this express body will not get data from form page
//we link the route files
app.use(require('./router/auth'));

app.use(express.static('./public'));

// Middleware
// const Middleware = (req, res, next) => {
//     try {
//         console.log("middleware");
//         if (req.query.name == "Prince") next();
//         else console.log("hello ji");
//         return res.send(
//             '<form>Name:<input type="text" name="name"/><br />Email:<input type="email" name="email"/><br /><input type="submit" value="submit" name="s"/></form>'
//         );
//     } catch {
//         (err) => {
//             console.log(err);
//         };
//     }
// };

// app.get("/", Middleware, (req, res) => {
//     res.send("<h1>Hello from server</h1>");
// });

app.listen(port || 8000, () => {
    console.log("Server is Running at Port :" + port);
});
