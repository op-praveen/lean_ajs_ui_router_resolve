app.config(["dataServiceProvider",function(dataServiceProvider) {
    dataServiceProvider.config('http://localhost/api');
}]);
app.provider("dataService", function () {
  var baseUrl = "";
  this.config = function (url) {
    baseUrl = url;
  };

  this.$get = [
    "$http",
    "$log",
    function ($http, $log) {
      var oDataService = {};
      oDataService.add = function (a, b) {
        return $http({
          url: baseUrl + "/add.php?a=" + a + "&for=add&b=" + b,
          method: "GET",
        });
      };
      oDataService.multiply = function (a, b) {
        return $http({
            url: baseUrl + "/add.php?a=" + a + "&for=mul&b=" + b,
            method: "GET",
        });
      };
      return oDataService;
    },
  ];
});
