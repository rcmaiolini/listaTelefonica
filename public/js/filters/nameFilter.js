app.filter('name', function(){
  return function(input){
    var listaDeNomes = input.split(' ');
    var listaDeNomesFormatada = listaDeNomes.map(function(nome){
      if (/^d(|a|e|o|as|es|os)$/.test(nome)) return nome;
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });
    return listaDeNomesFormatada.join(' ');
  };
});
