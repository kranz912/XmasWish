(function(){
    angular
    .module('app',['firebase'])
    .controller('mainCtrl',mainCtrl);
    mainCtrl.$inject =['$scope','$firebaseArray']
    function mainCtrl($scope,$firebaseArray){


        var ref = firebase.database().ref().child('Wishes');
        $scope.wishes = $firebaseArray(ref);
        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
       // syncObject.$bindTo($scope, "data");

        $scope.add = function(){
            $scope.wishes.$add({
                wish:'test'
            });
        }
       $scope.add();
    }
})();