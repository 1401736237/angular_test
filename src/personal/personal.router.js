window.appModule.config(function($stateProvider){
    $stateProvider
        .state('personal',{
            parent:'main',
            url:'/personal',
            views:{
                'content@main':{
                    templateUrl:'personal/info',
                    controller:'PersonalController as vm'
                },
                'left@main': {
                    templateUrl: 'main/side/left_personal'

                }
            }
        })
        .state('personal.address',{

            url:'/address',
            views:{
                'content@main':{
                    templateUrl:'personal/address',
                    controller:'PersonalController as vm'
                }
            }
        })
        .state('personal.modifyPwd',{

            url:'/modifyPwd',
            views:{
                'content@main':{
                    templateUrl:'personal/modifyPwd',
                    controller:'PersonalController as vm'
                }
            }
        })
});