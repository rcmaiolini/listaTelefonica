app.controller('novoContatoCtrl', function($scope, contatosAPI, serialGen, $location, operadoras){
  $scope.operadoras = operadoras.data;
  // $scope.contato = {
	// 	data: new Date()
	// };

  $scope.adicionarContato = function(contato){
    contato.serial = serialGen.generate();
    contatosAPI.saveContato(contato).success(function(data){
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $location.path('/contatos');
    });
  };
});
