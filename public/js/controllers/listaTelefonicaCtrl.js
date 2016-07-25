app.controller('listaTelefonicaCtrl', function($scope, contatos, serialGen){
  $scope.contatos = contatos.data;

  var gerarSerial = function(contatos){
      contatos.forEach(function(item){
        item.serial = serialGen.generate();
      });
  };

  $scope.apagarContatos = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if(!contato.selecionado) return contato;
    });
  };

  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(function(contato){
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function(campo){
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  gerarSerial(contatos.data);
});
