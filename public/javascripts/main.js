var chatApp = angular.module('chatApp', ['ngRoute']);


chatApp.controller('chatController', ['$scope', '$log', '$http', '$window','$timeout', function ($scope, $log, $http, $window,$timeout) {

    //$scope.user = 'Asanka';

       var message1={};
    message1.user='Bot';
    message1.content="Welcome to Bank Bot by what you want to do?"
    message1.ago="19 minutes ago";
    message1.human=false;
    $scope.messages=[];

    $scope.messages.push(message1);

    $scope.msgString='';

    $scope.send=function(){
        var req={};
        req.msg=$scope.msgString;
        var msg={};
        console.log($scope.msgString);
        msg.content=$scope.msgString;
        msg.user="Asanka";
        msg.ago="2 minutes ago"
        msg.human=true;
        $scope.messages.push(msg);
        $http.post('/chat/receive', req).success(function (data, status, headers, config) {
            console.log("Success::" + status);
            var msgr={};
            msgr.content=data.result.fulfillment.speech;
            msgr.user="Bot";
            msgr.ago="2 minutes ago"
            msgr.human=false;
            $scope.messages.push(msgr);

        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.


            console.log("Error::" + status);
        });




        $scope.msgString='';


        // $timeout( function(){
        // var msgr={};
        // msgr.content="Oh is it ?. We can figure that out";
        // msgr.user="Bot";
        // msgr.ago="2 minutes ago"
        // msgr.human=false;
        //
        // $scope.messages.push(msgr);
        //
        // }, 1000 );


    }
     

}]);

// myApp.directive("reminderElement",function(){
//     return {
//         templateUrl:'directives/reminderElement.html',
//         restrict:"AE",
//         replace:true,
//         scope:{
//             reminderObject: "="
//         }
//     }
// });