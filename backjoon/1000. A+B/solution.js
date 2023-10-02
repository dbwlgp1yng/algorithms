const fs = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(fs[0]);
const b = parseInt(fs[1]);
console.log(a+b);