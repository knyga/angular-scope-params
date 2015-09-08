# angular-scope-params
Abstract controller to encapsulate scope params management.
Usefull with [angular-ext](https://github.com/knyga/angular-ext).

## Installation
```bower install --save angular-scope-params``` or add `angular-scope-params` to your bower.json and do ```bower install```.

Require script after angular!

## Functions
* `$scope.watchParam(name, fn, recursive)`
* `$scope.getParam(name)`
* `$scope.setParam(name, value)`

## Code usage examples
```
angular.extModule('SegmentModule')
  .extController('SegmentCreateCtrl', ['ScopeParams'], ['$scope',
    function ($scope) {
     ...
    }
  ]);
```

Scope of `SegmentCreateCtrl` is parent scope of `SegmentCreateDetailsCtrl`.

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
