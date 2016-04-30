'use strict';

angular.module('psJwtApp')
    .controller('HeaderCtrl', function (authToken) {
        var vm = this;
        vm.isAuthenticated = authToken.isAuthenticated;
    });