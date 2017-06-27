/**
 * Created by 何中伟 on 2017/4/26.
 */
window.appModule.config(function($stateProvider) {
    //定义活动中心路由
    $stateProvider
        .state('active',{
            parent: 'main',
            url: '/active',
            views:{
                //主文件
                'content@main': {
                    templateUrl: 'active/showPage',

                },
                'left@main': {
                    templateUrl: 'main/side/left_active'

                },
            }
        })
        .state('active.add',{

            url:'/add',
            views:{
                'content@main':{
                    templateUrl:'active/add',
                    controller:'AddController as vm'
                }
            }

        })





});