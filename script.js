var vm = new Vue({
    el: "#app",
    data: {
       color: 'red',
        time1: 30,
        //количество смены раз цвета светофора
        count: 0,
        //логическая переменная, отвечающая за смену периода
        logic: false
    }
});

var vm2 = new Vue({
    el: "#app2",
    data: {
       color: 'green',
        time1: 30,
    }
});

    setInterval(function(){

       //период 1
        if(vm.logic == false){
            if(vm.time1 < 1){ 
                if(vm.color == 'red'){
                    vm.color = 'yellow';
                    vm.time1 = 2;
                }  
                else if(vm.color == 'yellow'){
                    vm.color = 'green'
                    vm.time1 = 30;
                }
                else{
                    vm.color = 'red'
                    vm.time1 = 30;
                }
               vm.count+=1;
            }
            if(vm2.time1 < 1){ 
                if(vm2.color == 'green'){
                    vm2.color = 'yellow'
                    vm2.time1 = 2;
                }  
                else if(vm2.color == 'yellow'){
                    vm2.color = 'red';
                    vm2.time1 = 30;
                }
                else{
                    vm2.color = 'green'
                    vm2.time1 = 30;
                }
                
                
            }
        }
        if(vm.count >= 6){
            vm.logic = true
        }
        //период 2
        if(vm.logic == true && vm.count >= 6){
            if(vm.time1 < 1){ 
                if(vm.color == 'red'){
                    vm.color = 'yellow';
                    vm.time1 = 2;
                }  
                else if(vm.color == 'yellow'){
                    vm.color = 'green'
                    vm.time1 = 20;
                }
                else{
                    vm.color = 'red'
                    vm.time1 = 20;
                }
               vm.count+=1;
            }
            if(vm2.time1 < 1){ 
                if(vm2.color == 'green'){
                    vm2.color = 'yellow'
                    vm2.time1 = 2;
                }  
                else if(vm2.color == 'yellow'){
                    vm2.color = 'red';
                    vm2.time1 = 20;
                }
                else{
                    vm2.color = 'green'
                    vm2.time1 = 20;
                }
                
                
            }
        }
        //период 3
        if(vm.count >= 15 && vm.logic == true){
            if(vm.time1 < 1){ 
                if(vm.color == 'red'){
                    vm.color = 'yellow';
                    vm.time1 = 2;
                }  
                else if(vm.color == 'yellow'){
                    vm.color = 'green'
                    vm.time1 = 10;
                }
                else{
                    vm.color = 'red'
                    vm.time1 = 10;
                }
               vm.count+=1;
            }
            if(vm2.time1 < 1){ 
                if(vm2.color == 'green'){
                    vm2.color = 'yellow'
                    vm2.time1 = 2;
                }  
                else if(vm2.color == 'yellow'){
                    vm2.color = 'red';
                    vm2.time1 = 10;
                }
                else{
                    vm2.color = 'green'
                    vm2.time1 = 10;
                }
                
                
            }
        }
        //возвращает к первому периоду
        if(vm.count == 24){
            vm.logic = false;
            vm.count = 0;
        }
        
        vm2.time1--;
        vm.time1--;
        
        
    }, 1000);


    
    



