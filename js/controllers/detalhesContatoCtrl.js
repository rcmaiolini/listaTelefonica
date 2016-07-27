app.controller("detalhesContatoCtrl", ["$scope", "contato", "$filter", function ($scope, contato, $filter) {
	$scope.app = $filter("upper")("Lista Telefonica");
	$scope.contato = contato.data;
}]);
