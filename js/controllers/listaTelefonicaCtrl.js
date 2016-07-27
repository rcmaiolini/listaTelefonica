app.controller("listaTelefonicaCtrl", ["$scope", "contatos", "serialGen", "idGen", "$filter", function($scope, contatos, serialGen, idGen, $filter){
  $scope.app = $filter("upper")("Lista Telefonica");
  $scope.contatos = contatos.data;

  var init = function(){
    calcularImpostos($scope.contatos);
    gerarSerial(contatos.data);
  };

  var calcularImpostos = function(contatos) {
    contatos.forEach(function(contato) {
      contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
    });
  };

  var gerarSerial = function(contatos){
      contatos.forEach(function(item){
        item.serial = serialGen.generate();
      });
  };

  $scope.apagarContatos = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if(!contato.selecionado) return contato;
    });
    $scope.verificarContatoSelecionado($scope.contatos);
  };

  $scope.verificarContatoSelecionado = function(contatos){
    $scope.hasContatoSelecionado = contatos.some(function(contato){
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function(campo){
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  var calcularImposto = function(preco) {
  var imposto = 1.2;
    return preco * imposto;
  };

  $scope.reset = function () {
		$scope.contatos = angular.copy($scope.contatos);
	};

  init();
}]);
