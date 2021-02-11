angular.module('alurapic').controller('FotoController', function($scope, /*$http, $resource* */recursoFoto, cadastroDeFotos, $routeParams){
    $scope.foto = {};
    $scope.mensagem = "";
    /*
    var recursoFoto = $resource('v1/fotos/:fotoId', null,{
        update :{
            method: 'PUT'
        }
    })*/

    if($routeParams.fotoId){
        recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){
            $scope.foto = foto
        },function(erro){
            $scope.mensagem = "Não foi possível obter a foto.";
            console.log(erro);
        })
        /*
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            console.log(foto)
            $scope.foto = foto
        })
        .error(function(erro){
            $scope.mensagem = "Não foi possível obter a foto.";
            console.log(erro)
        });
        */
    }
    $scope.submeter = function(){
       if ($scope.formulario.$valid){

           cadastroDeFotos.cadastrar($scope.foto)
           .then(function(dados) {
                $scope.mensagem = dados. mensagem;
                if(dados.inclusao) $scope.foto = {};
                //$scope.focado = true;                
           })
           .catch(function(dados) {
                $scope.mensagem = dados. mensagem;
           });
           /*if($scope.foto._id){
                recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto,function(){
                    $scope.mensagem = "Foto atualizada com sucesso";
                },function(erro){
                    $scope.mensagem = "Não foi possível atualizar a foto";
                    console.log(erro)
                });
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.mensagem = "Foto atualizada com sucesso";
                })
                .error(function(erro){
                    $scope.mensagem = "Não foi possível atualizar a foto";
                    console.log(erro)
                });
           }else{
                recursoFoto.save($scope.foto, function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                });
               /* $http.post('v1/fotos',$scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = "Foto incluída com sucesso";
                })
                .error(function(erro){
                    $scope.mensagem = "Não foi possível incluir a foto";
                    console.log(erro)
                });*/

           //}
            
       }
        
    };
});