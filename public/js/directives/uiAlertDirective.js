app.directive('uiAlert', function(){
  return {
    templateUrl: "partials/alert.html",
    replace: true, //remove do dom a tag da diretiva e carrega apenas o conteudo do templateUrl
    restrict: "AE",
    scope: {
      title: "@"
    },
    transclude: true
  };
});
