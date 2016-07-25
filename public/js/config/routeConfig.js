app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    redirectTo: '/contatos'
  })
  .when('/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'listaTelefonicaCtrl',
    resolve: {
      contatos: function(contatosAPI){
        return contatosAPI.getContatos();
      }
    }
  })
  .when('/novoContato', {
    templateUrl: 'partials/novoContato.html',
    controller: 'novoContatoCtrl',
    resolve: {
      operadoras: function(operadorasAPI){
        return operadorasAPI.getOperadoras();
      }
    }
  })
  .when("/detalhesContato/:id", {
		templateUrl: "partials/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	})
  .when("/error", {
		templateUrl: "partials/error.html"
	})
  .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
});
