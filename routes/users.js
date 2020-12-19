var express = require('express');
var router = express.Router();
var passport = require('passport');
const {check, validationResult} = require('express-validator')

router.get('/', function(req,res,next){
  res.render('users')
})
/* GET sign-in and sign-up page */
router.get('/signin', function(req, res, next) {
  // Hiển thị trang và truyển lại những tin nhắn từ phía server nếu có
  var messages = req.flash('error')
  res.render('signin',{ 
    messages: messages,
    hasErrors: messages.length > 0,
   })
});

router.get('/signup', function(req, res, next) {
  var messages = req.flash('error')

  res.render('signup',{ 
    messages: messages,
    hasErrors: messages.length > 0,
   })
});

/* Post sign-up page. */
// Xử lý thông tin khi có người đăng ký
router.post('/signup', 
[
  check('email', 'Your email is not valid').isEmail(),
  check('password', 'Your password must be at least 5 characters').isLength({ min: 5 })
 ],
  (function (req, res, next) {
  var messages = req.flash('error');
  const result= validationResult(req);
  var errors=result.errors;
  if (!result.isEmpty()) {
    var messages = [];
    errors.forEach(function(error){
        messages.push(error.msg);
    });
    res.render('signup',{
      messages: messages,
      hasErrors: messages.length > 0,
    });
  }else{
     next();
  }
  }),
  passport.authenticate('local.signup', { successRedirect: '/users/signin',
                                  failureRedirect: '/users/signup',
                                  failureFlash: true })
);
module.exports = router;