window.appModule.controller('Login',controllerFn);

function controllerFn(welcomeAPI,$state,$rootScope){

  var vm = this;

  // vm.login = loginFn;
  vm.loginUser=loginUser;
  /**********************************************************/

  function loginFn(){
    welcomeAPI.login(vm.form, function (result) {
      // meAPI.getUser({id: 0},function(result){
      //   $rootScope.vsGlobal.currUser = result;
      //   var currUser = $rootScope.vsGlobal.currUser;
      //   currUser.roleNames = currUser.roleList.map(function (item) {
      //     return item.name;
      //   }).join(',');
      //   currUser.isApprove = currUser.roleNames.indexOf('approve') != -1;
      //   $state.go('article',{tag: 'all'});
      // });

    })
  }
  function loginUser() {
    var userName=vm.username;
    var pwd= vm.password;

    if(userName=="admin"&&pwd=="123"){
        confirm("success");
       $state.go('personal');
        return true;
    }else{
        confirm("帐号或密码错误");
        return false;
    }

  }
}
