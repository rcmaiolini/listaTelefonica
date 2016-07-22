app.directive('uiAccordions', function(){
  return {
    controller: function($scope, $element, $attrs){
      var accordions = [];

      this.registerAccordion = function(accordion){
        accordions.push(accordion);
      };

      this.closeAll = function(){
        accordions.forEach(function(accordion){
          accordion.isOpened = false;
        });
      };
    }
  };
}).directive('uiAccordion', function(){
  return {
    templateUrl: "partials/accordion.html",
    transclude: true,
    scope: {
      title: "@"
    },
    require: "^uiAccordions",
    link: function(scope, element, attrs, ctrl){
      ctrl.registerAccordion(scope);
      scope.open = function(){
        ctrl.closeAll();
        scope.isOpened = true;
      };
    }
  };
});
