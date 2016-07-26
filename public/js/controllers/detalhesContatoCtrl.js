app.controller("detalhesContatoCtrl", function ($scope, contato, $filter) {
	$scope.app = $filter('upper')("Lista Telefonica");
	$scope.contato = contato.data;
});
