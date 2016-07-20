app.controller('listaTelefonicaCtrl', function($scope, $http){
  $scope.app = "Lista Telefônica";
  $scope.contatos = [];
  $scope.operadoras = [];
  $scope.message = '';

  var carregarContatos = function(){
    $http.get('http://192.169.33.10:3412/contatos').success(function(data){
      $scope.contatos = data;
    }).error(function(error){
      $scope.message = 'Aconteceu um problema! ' + error;
    });
  };

  var carregarOperadoras = function(){
    $http.get('http://192.169.33.10:3412/operadoras').success(function(data){
      $scope.operadoras = data;
    }).error(function(error){
      $scope.message = 'Aconteceu um problema! ' + error;
    });
  };

  $scope.adicionarContato = function(contato){
    contato.data = new Date();
    $http.post('http://192.169.33.10:3412/contatos', contato).success(function(data){
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $scope.message = 'Contato inserido com sucesso!'
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
