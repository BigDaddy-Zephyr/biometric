var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/biometric',(req,res)=>{
  console.log((req.body.RealTime.PunchLog.UserId))
  //save data in db
  res.send({status:1})
})
module.exports = router;
