angular.module('ScopeParams', [])
.controller('ScopeParams', ['$scope', function($scope) {
    $scope._params = {};
    $scope.setParam = function(name, value) {
      $scope._params[name] = value;
    };
    $scope.getParam = function(name) {
      return $scope._params[name];
    };
    $scope.watchParam = function(name, fn, recursive) {
      $scope.$watch('_params["'+name+'"]', fn, recursive);
    };
  }]);

