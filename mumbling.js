// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
   console.log(s)
   s = s.toUpperCase()
   let arr = []
   for(i=0; i<=s.length-1; i++){
    //  console.log(s[i].concat(s[i].
    //  toLowerCase().repeat(i)))
        arr.push(s[i].concat(s[i].toLowerCase().repeat(i)))
   }
   console.log(arr.join('-'))
}
accum("abcd")
console.log('========')
accum('RqaEzty')
console.log('========')
accum('cwAt')