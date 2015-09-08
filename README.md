# angular-scope-params
Abstract controller to encapsulate scope params management.
Usefull with [angular-ext](https://github.com/knyga/angular-ext).

## Methods
`$scope.watchParam(name, fn, recursive)`
`$scope.getParam(name)`
`$scope.setParam(name, value)`

## Code usage examples
```
angular.extModule('SegmentModule')
  .extController('SegmentCreateCtrl', ['ScopeParams'], ['$scope',
    function ($scope) {
     ...
    }
  ]);
```

```
angular.module('SegmentModule')
  .controller('SegmentCreateDetailsCtrl', ['$scope',
    function ($scope) {
      ...
      $scope.isLoading = $scope.getParam('isLoading');
      $scope.watchParam('isLoading', function(isLoading) {
        $scope.isLoading = isLoading;
      });
      $scope.setParam('isLoading', true);
```
