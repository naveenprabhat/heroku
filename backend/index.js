const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const path = require("path");

const fs = require('fs');
// const key = fs.readFileSync('../localhost.decrypted.key');
// const cert = fs.readFileSync('../localhost.crt');

const passportSetup = require("./passport");
const authRoute = require("./routes/auth")
const passport = require("passport");

const app= express();

app.use(
    cookieSession({name:"session",keys:["lama"], maxAge:24*60*60*100})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
})
);

app.use("/api/auth", authRoute)

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./build/index.html"))
})

app.listen("5000",()=>{
    console.log("Server is running...")
})

// const http = require('http');
// const server = http.createServer({ key, cert }, app);

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server is listening on http://localhost:${port}`);
// });