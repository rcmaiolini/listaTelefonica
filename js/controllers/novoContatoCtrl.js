app.controller("novoContatoCtrl", ["$scope", "contatosAPI", "serialGen", "$location", "operadoras", "idGen", "$filter", function($scope, contatosAPI, serialGen, $location, operadoras, idGen, $filter){
  $scope.app = $filter("upper")("Lista Telefonica");
  $scope.operadoras = operadoras.data;
  $scope.contato = {
		data: new Date()
  };

  $scope.adicionarContato = function(contato){
    contato.id = idGen.generate();
    contato.serial = serialGen.generate();
    contatosAPI.saveContato(contato).success(function(data){
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $location.path("/contatos");
    });
  };
}]);
