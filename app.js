(function(){
    angular
    .module('app',['firebase','ui.bootstrap'])
    .controller('mainCtrl',mainCtrl);
    mainCtrl.$inject =['$scope','$firebaseArray','modalService']
    function mainCtrl($scope,$firebaseArray,modalService){


        var ref = firebase.database().ref().child('Wishes');
        $scope.wishes = $firebaseArray(ref);
        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
       // syncObject.$bindTo($scope, "data");
       $scope.wish = {};
        $scope.add = function(){
            var modalOptions = {
                data: $scope.wish,
            }
            modalService.showModal(modalOptions, {}).then(function (response) {
            console.log(response);
            $scope.wishes.$add({
                wish:response
             });
            });
        }
     //  $scope.add();
    }
})();


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date('2018-12-25 00:00:00');

  document.addEventListener("DOMContentLoaded", function() {
    initializeClock('clock', deadline);
  });