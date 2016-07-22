app.directive('uiPhone', function(){
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {
      var _formatPhone = function (number) {
        number = number.replace(/[^0-9]+/g, "");
        if(number.length > 5) {
					number = number.substring(0,5) + "-" + number.substring(5,9);
				}
				return number;
      };

      element.bind("keyup", function () {
				ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
				ctrl.$render();
			});
    }
  };
});
