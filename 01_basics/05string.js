const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "value");

//string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)

console.log(anotherString);

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());//remove spaces

const url = "https://hitesh.com/hitesh%20chobey"
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'));







