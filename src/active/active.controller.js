window.appModule.controller('ActiveController',controllerFn);

function controllerFn(){
    var vm = this;
    vm.submit=function(){
        $http({
            url:'active/add',
            method:'post',
            data:{name:'hello',address:'funny'}

        }).success(function () {
            console.log()
        })
    };

}
