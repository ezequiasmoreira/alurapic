angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];
    /*var promisse = $http.get('v1/fotos');
    promisse.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    });*/
    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    }).error(function(erro){
        console.log(erro);
    });
});