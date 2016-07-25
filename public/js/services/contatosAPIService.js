//Factory - funcao fabrica
app.factory('contatosAPI', function($http, config){
  var _getContatos = function(){
    return $http.get(config.baseUrl + '/contatos');
  };

  var _getContato = function (id) {
		return $http.get(config.baseUrl + "/contatos/" + id);
	};

  var _saveContato = function(contato){
    return $http.post(config.baseUrl + '/contatos', contato);
  };

  return {
    getContatos: _getContatos,
    getContato: _getContato,
    saveContato: _saveContato
  };
});

//Service - Similar ao factory mas funciona como uma Funcao construtora
// app.service('contatosAPI', function($http){
//   this.getContatos = function(){
//     return $http.get(config.baseUrl + '/contatos');
//   };
//
//   this.saveContato = function(contato){
//     return $http.post(config.baseUrl + '/contatos', contato);
//   };
// });
