'use strict';

angular.module('psJwtApp')
  .controller('RegisterCtrl', function ($http, alert, authToken) {
    var vm = this;
    
    this.submit = function() {
        var url = "http://localhost:3000/register";
        var user = {
            email: vm.email,
            password: vm.password
        };
        
        $http.post(url, user)
        .success(function(resp) {
            alert('success', 'Account created!', 'Welcome ' + resp.user.email + '!');
            authToken.setToken(resp.token);
        })
        .error(function (err) {
            alert('warning', 'Oops!', 'Could not register');
        });
    }
  });
