const express = require('express');
const app = express();
require('dotenv').config();
const methodOverride = require('method-override');
const session = require('express-session')
const PORT = process.env.PORT
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
// const api = require('podcast-index-api')(process.env.THIRDAPI, process.env.THIRDSECRET)

//database below
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODBURI;
const db = mongoose.connection;
//mongoose stuff
mongoose.connect(mongoURI,  { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Database Connected Successfully", mongoURI))
.catch(err => console.log(err))


app.use(express.static('public'))


app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Code for session below
// const isAuthenticated = (req, res, next) => {
//   if (req.session.currentUser) {
//       return next()
//   } else {
//       res.redirect(<view>)
//   }
// }


//code for future admin
// const isAdministrator = (req, res, next) => {
// if (req.session.currentUser.isAdmin === true) {
//     return next()
// } else {
//     res.redirect('/media')
// }
// }

//controllers
const podcastControllers = require('./controllers/podcasts');
app.use('/podcasts', podcastControllers);

const usersControllers = require('./controllers/users')
app.use('/users', usersControllers);

const sessionsControllers = require('./controllers/sessions')
app.use('/sessions', sessionsControllers);


// app.get('/', (req, res)=>{
//   api.podcastsByFeedId(41504).then(results => {
//   res.setHeader('Content-Type', 'application/json')
//   res.send(results)})
// })



app.listen(PORT, ()=>{
    console.log('server listening')
});