var ui = angular.module('ui', []);

ui.run(function($templateCache){
  $templateCache.put('partials/accordion.html', '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});

ui.directive('uiAccordions', function(){
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
});

ui.directive('uiAccordion', function(){
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
