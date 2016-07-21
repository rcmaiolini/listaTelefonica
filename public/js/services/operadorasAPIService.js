//Service - Funcao construtora
app.service('operadorasAPI', function($http, config){
  this.getOperadoras = function(){
    return $http.get(config.baseUrl + '/operadoras');
  };
});

//Factory - funcao fabrica
// app.factory('operadorasAPI', function($http){
//   var _getOperadoras = function(){
//     return $http.get(config.baseUrl + '/operadoras');
//   };
//
//   return {
//     getOperadoras: _getOperadoras
//   };
// });
