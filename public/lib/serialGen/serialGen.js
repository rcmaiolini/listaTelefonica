//Criação de serviços configuraveis - usar sempre this.$get
var serialGen = angular.module('serialGen', []);

serialGen.provider('serialGen', function(){
  //console.log(config);
  var _length = '';

  // this.getlength = function(){
  //   return _length;
  // };

  this.setLength = function(length){
    _length = length;
  };

  this.$get = function(){
    return {
      generate: function(){
        var serial = '';
        while(serial.length < _length) {
          serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
        }
        return serial;
      }
    };
  };
});
