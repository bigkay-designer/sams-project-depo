let log = console.log
let express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    async = require('async')

let middleware = require('../middleware/index');

let user = require('../models/user')
const { route } = require('./posts')

router.get('/signup', middleware.isLoggedIn, (req, res) => {
    res.render('./admin/signup')
})

router.post('/signup', (req, res) => {
    let name = req.body.name;
    let email = req.body.email
    let username = req.body.username
    let role = req.body.role

    user.register(new user({
        name: name,
        email: email,
        username: username,
        role: role
    }), req.body.password, (err, newuser) => {
            if (err) {
                req.flash('error', 'A user with the given username already exist')
                return res.redirect('/signup')
            }
            passport.authenticate('local')(req, res, () => {
                log(newuser)
                req.flash('success', 'welcome ' + req.body.username)
                res.redirect('/admin/managepost')
            })
    })
})

//login
router.get('/login', (req, res) => {
    res.render('./admin/login')
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/admin/managepost', 
    failureRedirect: '/login',
    failureFlash: 'invalid username or password'
}), (req, res) => {
        
})

//logout
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success', 'successfully logged out')
    res.redirect('/')
})

// delete

router.
route('/:id')
.delete((req, res)=>{
    user.findByIdAndDelete(req.params.id, (err, removeuser)=>{
        if(err){
            log(err)
        }else{
            log(req.user)
            res.redirect('/admin/managepost')
        }
    })
})


module.exports = router