/**
 * const x;
 * it throws an error, we should always assign something
 */

/**
 * const x = {};
x['a'] = 1
x['b'] = 2
console.log(x);
output :
{ a: 1, b: 2 }
 */

/**
 * const x = [];
x.push(`1`)
x.push(`2`)
console.log(x);
output :
[ '1', '2' ]
 */

const codes = [1,2,3,4,5];
function appendCode(users){
users.forEach(user => {
    return codes.push(user.code)
})
}
appendCode([{code:10}])
console.log(codes)