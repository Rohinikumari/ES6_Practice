/**
 * x;
 * // temporal dead zone
 * const x = 1;
 */

 {
     const fn = function (){return 1}
     console.log(fn()) // 1
     {
         const fn = function(){return 2}
         console.log(fn()) // 2
     }
     console.log(fn()) // 1
 }