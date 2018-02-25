function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var app = angular.module('app', []);
app.controller('ctrl',function ($scope, $http) {

  $scope.submit = function () {
    var data = {};
      data.email = $scope.email;
      data.password = $scope.password;
    $http.post(
      "/api/access/",
      data
    ).then(function (res) {
      setCookie('token', res.data.token, 1);
      // location.href="/inicio"
    })
  };

  $scope.register = function () {
    var data = {
      name: $scope.name2,
      lastName: $scope.lastName2,
      phone: $scope.phone2,
      email: $scope.email2,
      password: $scope.password2
    }
    console.log(data);
    $http.post(
      "/api/register/",
      data
    ).then(function (res) {
      console.log(res.data);
    })
  };

  $scope.frame = "fdnlsjflk";
  $scope.text = "fdnlsjflk";

  var view = io();
  view.on('message', function (data) {
    console.log(data);
    $scope.frame = data.message;
    $scope.text = data.message;
    $scope.$apply();
  });
});
