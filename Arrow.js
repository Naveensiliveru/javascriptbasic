 function fn(){
     return  " I  am Returning from  a Normal  function ";

     

 }
  var myArrowfn =()=>" I am returning  from arrow  function ";

   console.log(myArrowfn());

    var obj1 ={
        userName : "Raj",
        city : "banglore",
         print : function(){
            console.log(this.userName, this.city);
         },


    };
    obj1.print();


    var obj2={

        userName : "Raj",
        city : "banglore",
         print : ()=>
        {
            console.log(this.userName, this.city);
         },
         
    };
     obj2.print();