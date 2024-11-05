 function  outer(){
 var city ="Delhi";
  console.log("outer function ", city);



   function Inner(x,y){
     console.log(x+y);
     console.log(" Inner Function ", city);



   }
    return  Inner;

  


 }
  var  fninner = outer();
   fninner(5,5);
   