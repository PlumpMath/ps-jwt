'use strict';

angular.module('psJwtApp')
  .directive('validateEquals', function () {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            ngModelCtrl.$validators.validateEqual = function(modelValue, viewValue) {
                var value = modelValue || viewValue;
                var valid = (value === scope.$eval(attrs.validateEquals));
                return valid;
            }

            scope.$watch(attrs.validateEquals, function () {
                ngModelCtrl.$validate();
            });
        }
    };
  });
