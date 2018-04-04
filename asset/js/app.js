var app = angular.module('FoodsbyApp', ['ngSanitize']);

app.controller('FetchCtrl',['$scope','$http',function($scope,$http){
  var url = 'asset/deliveries-sample.json';
  $http.get(url).then(function(response){
    $scope.dropoff = response.data.dropoffs;
    $scope.Monday = response.data.dropoffs[0];
    $scope.Tuesday = response.data.dropoffs[1];
    $scope.Wednesday = 'No deliveries today!';
    $scope.Thursday = response.data.dropoffs[2];
    $scope.Friday = response.data.dropoffs[3];
    $scope.sellingOut = 'Hurry! Only 5 meals left!';
  }, function(response){
      console.log("Request failed");
  });
}]);
