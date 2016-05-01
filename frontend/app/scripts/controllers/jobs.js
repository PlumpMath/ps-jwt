'use strict';

angular.module('psJwtApp')
    .controller('JobsCtrl', function () {
        var vm = this;
        vm.jobs = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    });