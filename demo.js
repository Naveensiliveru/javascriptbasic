 var deatails =[
    {brand: "apple",
     model :  "iphone",
      price :110000

 },
 {
 brand : "Sumsung",
  model : "Galxy",
  price :   1100000


 },
 { brand :"vivo,",
  model :" vivo A2",
  price : 40000,

 },

];
      var newArr =  details .filter(function(element ,index){
     return  element.brand== "apple";
      });

       console.log(newArr);