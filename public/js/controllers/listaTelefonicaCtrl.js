app.controller('listaTelefonicaCtrl', function($scope, contatosAPI, operadorasAPI, serialGen){
  $scope.app = "Lista Telefônica";
  $scope.contatos = [];
  $scope.operadoras = [];
  $scope.message = '';

  var carregarContatos = function(){
    contatosAPI.getContatos().success(function(data){
      $scope.contatos = data;
    }).error(function(error){
      $scope.message = 'Aconteceu um problema! ' + error;
    });
  };

  var carregarOperadoras = function(){
    operadorasAPI.getOperadoras().success(function(data){
      $scope.operadoras = data;
    }).error(function(error){
      $scope.message = 'Aconteceu um problema! ' + error;
    });
  };

  $scope.adicionarContato = function(contato){
    contato.serial = serialGen.generate();
    contato.data = new Date();
    contatosAPI.saveContato(contato).success(function(data){
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $scope.message = 'Contato inserido com sucesso!';
      carregarContatos();
    }).error(function(error){
      $scope.message = 'Aconteceu um problema! ' + error;
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

  carregarContatos();
  carregarOperadoras();
});
