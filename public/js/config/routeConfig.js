app.config(function($routeProvider){
  $routeProvider.when('/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'listaTelefonicaCtrl',
    resolve: {
      contatos: function(contatosAPI){
        return contatosAPI.getContatos();
      }
    }
  });
  $routeProvider.when('/novoContato', {
    templateUrl: 'partials/novoContato.html',
    controller: 'novoContatoCtrl',
    resolve: {
      operadoras: function(operadorasAPI){
        return operadorasAPI.getOperadoras();
      }
    }
  });
  $routeProvider.when("/detalhesContato/:id", {
		templateUrl: "partials/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});
  $routeProvider.otherwise({redirectTo: '/contatos'});
});
