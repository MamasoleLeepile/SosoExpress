const express = require('express');
const router = express.Router();
{/*
// Routes
router.get("/", (req, res) => {
    res.send("User List");
});

router.get("/new", (req, res) => {
    res.send("User New Form");
});

router.post("/", (req, res) => {
    res.send("Create User");
});
*/}
{/*
// Routes with user id parameter
router.get("/:id", (req, res) => {
    res.send(`Get User With ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
});

// Middleware for 'id' parameter
router.param("id", (req, res, next, id) => {
    console.log(`User ID: ${id}`);
    next();
});
*/}
//Advanced Routing
router.use(logger)
.route("/:id")//defining routes in one location 
.get((req, res) => {
   res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) =>{
   res.send(`Update User With ID ${req.params.id}`) 
})
.delete((req, res) =>{
   res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{name:"Lerato"},{name:"Leepile"}]
router.param("id",(req, res, next, id) =>{
   //console.log(id)
   req.user = users[id]
   next()
}) //runs every time it finds a param function with the name passed in

module.exports = router
