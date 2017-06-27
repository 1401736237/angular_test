window.appModule.config(function($stateProvider) {
    //定义首页登录路由
    $stateProvider
        .state('login',{
            url: '/login',

                    templateUrl: 'welcome/login/login',
                    controller: 'Login as vm'



        })

        .state('registry',{
            url: '/registry',
            templateUrl: 'welcome/registry/registry'
        })

        .state('registry-success',{
            url: '/registry-success',
            templateUrl: 'welcome/registry/success',
            onEnter: function (bodyUtil) {
                bodyUtil.addClass('pg_registry_success');
            },
            onExit: function (bodyUtil) {
                bodyUtil.removeClass('pg_registry_success');
            }
        })

});
