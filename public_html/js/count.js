/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
   var output = 1;
   var end = 100;
   while(output <=end){
       if (output%3 === 0){
           if(output%5 === 0){
               $('body').append("FizzBuzz\n");
           }
           else {
               $('body').append("fizz\n");
           }
       }
       else if(output%5 === 0) {
           $('body').append("buzz\n");
       }
       else {
           $('body').append(output+"\n");
       }
       output+=1;
   }
   
});
