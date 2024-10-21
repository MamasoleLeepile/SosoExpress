const express = require("express")
const app = express()
{/*
app.get('/',(req, res) => {
    console.log("Here")
})
*/}
app.use(express.static("public"))
app.set('view engine', 'ejs')
{/*
app.get("/", logger,  (req, res) =>{
    res.render("index", {text: "World"})//rendering out an html file
})

    res.send("Hi!")
    res.sendStatus(500)//generate error 
    res.json({message: "Error"})
    res.download("server.js")
    
    */}

//app.use(logger)
const userRouter = require('./routes/users')

app.use("/users", userRouter)
{/*
function logger(req, res, next){
    console.log(req.originalUrl)//printing out the Url of the respond(where it comes from)
    next() 
 }
*/}
app.listen(3000)
 