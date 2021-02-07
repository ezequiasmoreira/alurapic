angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    $scope.foto = {};
    $scope.mensagem = "";

    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            console.log(foto)
            $scope.foto = foto
        })
        .error(function(erro){
            $scope.mensagem = "Não foi possível obter a foto.";
            console.log(erro)
        });
    }
    $scope.submeter = function(){
       if ($scope.formulario.$valid){
           if($scope.foto._id){
            $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
            .success(function(){
                $scope.mensagem = "Foto atualizada com sucesso";
            })
            .error(function(erro){
                $scope.mensagem = "Não foi possível atualizar a foto";
                console.log(erro)
            });
           }else{
                $http.post('v1/fotos',$scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = "Foto incluída com sucesso";
                })
                .error(function(erro){
                    $scope.mensagem = "Não foi possível incluir a foto";
                    console.log(erro)
                });
           }
            
       }
        
    };
});