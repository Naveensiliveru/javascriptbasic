   

    var  obj1 ={

          username :  " Rajesh Verma",
           city  : "khammam",
            id : 101,
              gender : "male",
               email : "Rajesh@gmail.com",

    }; 



     var oobj2 ={


         ...obj1,
           city : " anjanapuram",
            
     }
     //console.log(oobj2);


      var  arr1 = [100, "Riya ", "female ", 9000, " mumbai"];
       var  arr2 =[ ...arr1, "Riya@gmail.com"];
        console.log(arr2);