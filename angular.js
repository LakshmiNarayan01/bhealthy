//Sample Angular JS for calculation... 
// Author: Lakshmi Narayan Agora Moorthi

<!DOCTYPE html>
<html>

<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>

<div ng-app="myApp" ng-controller="costCtrl">

Quantity: <input type="number" ng-model="quantity">
<br>
Price: <input type="number" ng-model="price">
<br>
Price: <input type="number" ng-model="price2">
<br>
<p>Total = {{ (quantity * price2 * price) | currency }}</p>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('costCtrl', function($scope) {
    $scope.quantity = 1;
    $scope.price = 10;
$scope.price2 = 10;
});
</script>

</body>
</html>
