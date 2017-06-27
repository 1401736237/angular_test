window.appModule.controller('PersonalController',controllerFn);
function controllerFn(){
    var  vm=this;

    vm.infos=[
        {
        id:'1001001',
        name:'张三',
        phone:'13312344321',
        sex:'男',
        address:'阿斯蒂芬'
    },
    {
        id:'011011001',
        name:'李四',
        phone:'18898765432',
        sex:'女',
        address:'阿斯多夫'
        }

    ];
    vm.counts=[
        {
            id:1,
            Addresses:"Washington, D.C."
        },
        {
            id:2,
            Addresses:"NewYourk"
        },
        {
            id:3,
            Addresses:"Seattle"
        },
        {
            id:4,
            Addresses:"Beijing"
        },
        {
            id:5,
            Addresses:"上海浦东新区陆家嘴路"
        }


    ];

    /**
     * 找一个元素的索引
     * */

    var findIndex=function (id) {

        var index=-1;
        angular.forEach(vm.counts,function (count,key) {
            if (count.id===id){
                index=key;

            }
        });
        return index;
    };


//添加

    vm.addAddress=function(){
        // var index=findIndex(id);
        // if(index !=-1){
        //     ++vm.counts[index].id;
        // }
        vm.newId='';
        vm.newAddresses='';
         vm.counts.push({id:vm.newId,Address:vm.newAddresses});



    };

    //删除
    vm.deleteAddress=function (index) {

       // var index= findIndex(id);
       //  if(index !== -1){
       //      vm.counts.splice(index,1);
       //  }
        vm.counts.splice(index,1)
    }

}