(function(){
    angular
    .module('app',['firebase'])
    .controller('mainCtrl',mainCtrl);
    mainCtrl.$inject =['$scope','$firebaseObject']
    function mainCtrl($scope,$firebaseObject){


        var ref = firebase.database().ref().child('Wishes');
        var syncObject = $firebaseObject(ref);
        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
        syncObject.$bindTo($scope, "data");
    }
})();