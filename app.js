 /*     1)   var x=[12,23,45,22,11];
 var y=[2,5,7,9,25];
 var z=x.concat(y);
 console.log(z);*/

/*       2 )  var x=[1,5,8,3,7];
var y,z;
z=x.indexOf(5);
y=x.indexOf(5,2);
console.log(y);
console.log(z);*/

/*       3)     var x=[1,5,3,7,4];
var y=x.join();
var z=x.join("*");
var a=x.join("@");
console.log(y,z,a);*/


/*        4)    var x=[4,2,5,1,4,1,3];
var y,z,a;
y=x.lastIndexOf(1);
z=x.lastIndexOf(1,4);
a=x.lastIndexOf(1,2);
console.log(y,z,a);*/

/*        5)    var x=[1,5,7,2,9];
var y=x;
console.log(y.reverse());*/


/*        6)   var x=[1,2,3,4,5];
var y,z,a,b;
y=x.slice(0,3);
z=x.slice(3);
a=x.slice(1,-1);
b=x.slice(-3,-2);
console.log(y,z,a,b);*/

/*          7)  var x=[10,23,56,78,34];
var y=x;
console.log(y.sort());*/

/*           8)   var x=[1,2,3,4,5];
var y=x;
y=x.splice(0,1);
 
console.log(y);
// x.splice(2,0,20));
// x.splice(2,2,25));*/

/*            9) var x=[1,4,7,6,2,3];
console.log(x.toString());*/

/*             10)  var x=[1,4,7,3,9,6];
var y;
y=x.valueOf();
 console.log(y);*/



 //Kangaroo program

 var x1=3;
 var x2=0;
 var v1=1;
 var v2=2;
 var a,b;
 while(x1!=x2)
{
 if ( (x1<x2 && v1<v2)||(x1>x2 && v1>v2)) 
 {
     console.log("No");
     
 } else if(x1<x2 && v1>v2)
 
 {
   a=x2;
   b=x1;
   if((a-b)>0) 
   {
       console.log("Infinity");
   }
 }
 else
 {
a=x1;
b=x2;
if((a-b)<0)
{
    console.log("Infinity");
}
 }
 x1=x1+v1;
 x2=x2+v2;
}
console.log("Yes");
     
 
 
