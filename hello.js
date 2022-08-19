let regex1 = /^[\w]+@[a-z]+\.(com|in)/;

console.log(regex1.exec('!username@gmail.com'));
console.log(regex1.exec('username@gmail.com'));

console.log(regex1.test('raj@raj.com'))

let str = 'Hello class'
console.log(str.search(/ell/));
console.log(str.match(/lass/));

console.log(str.replace(/l/g, 'o'));