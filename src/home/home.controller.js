window.appModule.controller('HomeController',controllerFn);

function controllerFn(){
    var vm = this;
    vm.myInterval = 3000;
    vm.noWrapSlides = false;//禁用幻灯片的循环

    vm.slides = [{
        image: 'assets/img/Q1.jpg',
        text: '安排春游活动'
    },{
        image: 'assets/img/Q4.png',
        text: '安排H5培训'
    },{
        image: 'assets/img/Q6.jpg',
        text: 'java学习活动'
    }];


    vm.contents=[{
            title:"关于转发《财政部关于贯彻落实金融企业国有资产转让管理办法有关事项的通知》的通知",
            image:'assets/img/Q1.jpg',
            text:'Circular on Dragon Boat Festival outings',
            timer:new Date('2017-06-31 24:00:00').getTime()
        }


        ,{
            title:"关于清明放假的通知",
            image:'assets/img/Q6.jpg',
            text:'Circular on Dragon Boat Festival outings123123,' +
            'Circular on Dragon Boat Festival outings123123,',
            timer:new Date('2017-07-12  23:59:59').getTime()

        },{
            title:"关于春节放假的通知",
            image:'assets/img/Q1.jpg',
            text:'Circular on Dragon Boat Festival outings',
            timer:new Date('2017-05-31 24:00:00').getTime()
        },
        {
            title:"关于春节放假的通知",
            image:'assets/img/Q1.jpg',
            text:'Circular on Dragon Boat Festival outings',
            timer:new Date('2017-06-01 10:45:00').getTime()
        },
        {
            title:"关于春节放假的通知",
            image:'assets/img/Q1.jpg',
            text:'Circular on Dragon Boat Festival outings',
            timer:new Date('2017-12-31 24:00:00').getTime()
        },
            {
                title:"关于春节放假的通知",
                image:'assets/img/Q1.jpg',
                text:'Circular on Dragon Boat Festival outings',
                timer:new Date('2017-09-31 24:00:00').getTime()
            }
            ,
            {
                title:"关于春节放假的通知",
                image:'assets/img/Q1.jpg',
                text:'Circular on Dragon Boat Festival outings',
                timer:new Date('2017-07-31 24:00:00').getTime()
            }
            ,
            {
                title:"关于春节放假的通知",
                image:'assets/img/Q1.jpg',
                text:'Circular on Dragon Boat Festival outings',
                timer:new Date('2017-04-31 24:00:00').getTime()
            }
            ,
            {
                title:"关于春节放假的通知",
                image:'assets/img/Q1.jpg',
                text:'Circular on Dragon Boat Festival outings',
                timer:new Date('2017-04-31 24:00:00').getTime()
            }
        ]


}
