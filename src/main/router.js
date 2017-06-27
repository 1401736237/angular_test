window.appModule.config(function($stateProvider){

    $stateProvider
        .state('main',{
            abstract: true,
            cache:      'false',
            params:{
                search : ""
            },
            views:{
                '':{
                    templateUrl: 'main/main',
                    controller:'Main as content'
                },

                //头部文件
                'header@main': {
                    templateUrl: 'main/header/header',
                    controller:  'HeaderController as header'
                },
                //底部文件
                'footer@main': {
                    templateUrl: 'main/footer/footer'
                }
            }
        })
});