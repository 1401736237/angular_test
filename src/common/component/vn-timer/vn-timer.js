window.appModule.directive('vnTimer', vnTimerComponent);
 //   .controller('clickSwiper',clickSwiper)


function vnTimerComponent($interval) {
    return {
        restrict: 'AE',
        scope: {
            timer: '@'
        },
        templateUrl: 'common/component/vn-timer/template',
        link: function(scope, element, attrs) {

            //var s1 = 1458215300001;
            //获取服务器时间
            // var url = API+"/appointment/showTime";
            // httpService.getFunc(url).then(
            //     function(res){
            //         if(res.data.code == '10000'){
            //             s1 = res.data.obj;
            //             updateClock();
            //         }
            //     }
            // )
            var s1 = (new Date()).getTime();//获取当前时间
            scope.isTimeOver  = false;
            updateClock();

            function updateClock() {

                var s2 = scope.timer;

                $interval(function(){
                    if(s2 < s1){
                        scope.isTimeOver  = true;
                    }else{
                        var total = (s2 - s1) / 1000;
                        var day = parseInt(total / (24 * 60 * 60));//计算整数天数
                        var afterDay = total - day * 24 * 60 * 60;//取得算出天数后剩余的秒数
                        var hour = parseInt(afterDay / (60 * 60));//计算整数小时数
                        var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;//取得算出小时数后剩余的秒数
                        var min = parseInt(afterHour / 60);//计算整数分
                        var afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60;//取得算出分后剩余的秒数
                        var sec = parseInt(afterMin);
                        scope.time = {
                            day: day,
                            hour: hour,
                            min: min,
                            sec: sec
                        };
                        s1 += 1000;
                    }

                },1000);
            };
            updateClock();
        }
    }

}
