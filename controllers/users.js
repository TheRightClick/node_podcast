const express = require('express');
const router = express.Router();
const User = require('../models/users')
const bcrypt = require('bcrypt')



//index
router.get('/showall', (req,res) => {
    User.find({}, (error, users, next)=>{
        if(error){
            console.log(err)
            next(err)
        }else {
        console.log( {
            users: users
        });
        res.send(users)
    }
    });
});

//edit
router.get('/:id/edit',  (req, res)=>{
    //code for future admin use/sessions
    // if(req.session.currentUser.isAdmin){
    //     req.params.id = req.params.id
    // } else{
    // req.params.id = req.session.currentUser._id
    // }
    User.findById(req.params.id, (error, selectedUser)=>{
      res.send({
          user: selectedUser,
          index: req.params.id
       })	
     })
  })
  
  router.put('/:id', (req,res) => {
    //code for future admin user  
    // if (req.body.isAdmin === "on") {
    //     req.body.isAdmin = true;
    // }
    // else {
    //     req.body.isAdmin = false;
    // }
      if(!(req.body.password)){
            User.findByIdAndUpdate(req.params.id, { 
                "$set": { 
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                isAdmin: req.body.isAdmin
            } }, (err, product) =>{
                res.redirect('/users/showall')
            })
        }else {
            req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
            User.findByIdAndUpdate(req.params.id, { 
                "$set": { 
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
                isAdmin: req.body.isAdmin
            } }, (err, product) =>{
                res.send(product)
            })
        }
    })
      
    


  

//delete use
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send("user deleted")
        }
    })
})




//user create
router.post('/newuser', (req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

        User.create(req.body, (err, userNew)=>{
            if(err){
                res.send(err)
            } else {
                console.log(req.body.username)
            }
        })
        res.send("done")
        })


module.exports = router;