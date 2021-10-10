const express = require('express');
const router = express.Router();
const podcasts = require('../models/podcasts.js');
require('dotenv').config();
const api = require('podcast-index-api')(process.env.THIRDAPI, process.env.THIRDSECRET)


//search by term
router.get('/', (req, res)=>{
    term = req.body.term
    api.searchByTerm(term).then(results => {
    res.setHeader('Content-Type', 'application/json')
    res.send(results)})
  })




//edit show individual
router.get('/:id/edit', (req, res)=>{
  podcasts.findById(req.params.id, (error, selectedPodcasts)=>{
    res.send( {
        podcast : selectedPodcasts,

     })	
   })
})



router.put('/:id', (req,res) => {
    let id = req.params.id
    podcasts.findByIdAndUpdate(id, req.body, (err, media) =>{
        res.send("done")
    })    
})


//delete
router.delete('/:id', (req, res)=> {
    podcasts.findByIdAndRemove(req.params.id, (error, deletedPodcast)=>{
        if (error){
            console.log(error);
            res.send(error)
        } 
        else {
            res.send('podcast deleted');
        }
        
    })
})


//show
router.get('/showall', (req,res) => {
    podcasts.find({}, (error, podcasts, next)=>{
        if(error){
            console.log(err)
            next(err)
        }else {
        console.log( {
            podcasts : podcasts
        });
        res.send(podcasts)
    }
    });
});


//save podcast 
router.post('/save', (req,res)=>{
        podcasts.create(req.body, (err, podcastNew)=>{
            if(err){
                res.send(err)
            } else {
                console.log(podcastNew)
            }
        })
        res.send("done")
        })

//for future searching purposes within db
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
};



module.exports = router;