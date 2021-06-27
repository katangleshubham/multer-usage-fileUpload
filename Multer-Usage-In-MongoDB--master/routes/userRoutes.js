

const userControllers=require('../controllers/userController')
const express=require('express');

const router=express.Router();



router.route('/signup')
.post(userControllers.registerUser)

router.route('/login')
.post(userControllers.loginUser)

router.route('/logout')
.post(userControllers.logoutUser)

router.route('/current')
.get(userControllers.checktoken,userControllers.currentUser)

router.route('/profile')
.post(userControllers.checktoken,userControllers.profile)

router.route('/uploadimage')
.post(userControllers.checktoken,userControllers.upload.single('photo'),userControllers.handlefile)

module.exports=router;