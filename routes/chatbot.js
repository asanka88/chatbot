var express = require('express');
var router = express.Router();

var conversationManager=require('../server/CoversationManager')

/* GET users listing. */
router.post('/receive', function(req, res, next) {
  var sess=req.session;

  //console.log(req);
 // console.log('session id '+req.sessionId);
  var body=req.body;
  var sessionId=req.sessionID;

  console.log('session id '+req.sessionID);
  console.log(body.msg);

  conversationManager(body.msg,sessionId,function (response) {

    res.send(response);
  },function (err) {
    console.log('Error occured');
    console.log(err);

    res.sendStatus(500);

  })

});

module.exports = router;
