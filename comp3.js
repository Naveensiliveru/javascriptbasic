  var details =[
{
    brand  :  "Apple",
     price : 700000,
      model :  "Iphone",


},
{
   
     brand : " vivo",
      price : 40000,
       model : "vivi21",
    
}
,
{
     brand : "samsung",
      price : 46000,
       model :"samsungA12",
       
      
},
{
    brand : "samsung",
     price : 56000,
      model :"samsungA14",
      
     
}


  ];

   var   FilterData = details.filter( function(element){
     return element.brand=="Apple"|| element.brand=="samsung";


   });
    console.log(FilterData);
