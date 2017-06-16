var chatApp = angular.module('chatApp', ['ngRoute']);


chatApp.controller('chatController', ['$scope', '$log', '$http', '$window','$timeout', function ($scope, $log, $http, $window,$timeout) {

    //$scope.user = 'Asanka';

    var message={};
    message.user='Asanka';
    message.content="this is a test content from user"
    message.ago="20 minutes ago";
    message.human=true;
    
       var message1={};
    message1.user='Bot';
    message1.content="this is a test content from chat bot"
    message1.ago="19 minutes ago";
    message1.human=false;
    $scope.messages=[];

     var message2={};
    message2.user='Asanka';
    message2.content="this is a test 2 content from user"
    message2.ago="18 minutes ago";
    message2.human=true;
    
    $scope.messages.push(message);
    $scope.messages.push(message1);
    $scope.messages.push(message2);

    $scope.msgString='';

    $scope.send=function(){

        var msg={};
        console.log($scope.msgString);
        msg.content=$scope.msgString;
        msg.user="Asanka";
        msg.ago="2 minutes ago"
        msg.human=true;

        $scope.messages.push(msg);
        $scope.msgString='';


        $timeout( function(){
        var msgr={};
        msgr.content="Oh is it ?. We can figure that out";
        msgr.user="Bot";
        msgr.ago="2 minutes ago"
        msgr.human=false;

        $scope.messages.push(msgr);
            
        }, 1000 );


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