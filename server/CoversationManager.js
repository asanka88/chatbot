/**
 * Created by a559481 on 6/16/17.
 */
var apiai = require('apiai-proxy');
var CheckPreconditions = require("check-preconditions"); //For the minified version: window.CheckPreconditions
var check = CheckPreconditions.check;
var apiaiaccesskey = process.env.API_AI_ACCESS_KEY;
console.log("key : "+apiaiaccesskey);
check(apiaiaccesskey,"API_AI_ACCESS_KEY env var should be defined with api.ai access key").is.not.empty();
var app = apiai(apiaiaccesskey);
var options = {
    proxyHost: 'http.proxy.fmr.com',
    proxyPort: 8000
};
module.exports=function(msg,sessionId,onResponseCB,onErrorCB){

options.sessionId=sessionId;
    var request = app.textRequest(msg, options);

    request.on('response',onResponseCB);

    request.on('error',onErrorCB);

    request.end();
}



