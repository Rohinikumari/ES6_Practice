/**
 * x;
 * // temporal dead zone
 * const x = 1;
 */
"use strict"
{
    function fn() { return 1 }
    console.log(fn()) // 1
    {
        function fn() { return 2 }
        console.log(fn()) // 2
    }
    console.log(fn()) // 1
}