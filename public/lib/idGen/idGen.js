//Criação de serviços configuraveis - usar sempre this.$get
var idGen = angular.module('idGen', []);

idGen.provider('idGen', function(){
  var _numbers = '0123456789';
  var _length = '';

  this.setLength = function(length){
    _length = length;
  };

  this.$get = function(){
    return {
      generate: function() {
        var id = '';
        for (var i = 0; i < _length; i++) {
          id += _numbers.charAt(Math.floor(Math.random() * _numbers.length));
        }
        return id;
      }
    };
  };
});
