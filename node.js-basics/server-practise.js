// console.log('server file is running');

// let  add  = (a,b) => {
//   return a + b;
// }

// var res = add(4,11);
// console.log('addn: '+res);

// console.log('--------------------');

// (function(){
//   console.log("hii im sumer khan!")
// })();

// function callback() {
//   console.log("this is callback function called after result. ");
// }

// let sum = (a,b,callback) => {
//   var res = a + b;
//   console.log('result: '+ res);

  //callback invoking
  // callback();

// }
// sum(10,30,function() {console.log('wow it works')});
// sum(10,30,() => console.log('wow it works'));


//-----------fs & Os modules in node.js-------------//


// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();

// console.log(user.username);  //giving outupt as user info-object

// fs.appendFile('greeting.txt','Hiii ' + user.username + '!\n', ()=> console.log('file is created'));

// console.log(os);


//--------------file importing -----------//

// const notes = require('./notes.js');


// console.log('server file loaded');

// var age = notes.age;
// var res = notes.addNum(age+4,3);;

// console.log(age);
// console.log('add function: '+res);


//------------lodash library -------------//

const _ = require('lodash');

let data =  [1,2,3,3,2,2,1,8,5,2];

var filter = _.uniq(data);  //uniq(), isString() etc..
console.log(filter);


//-----------------------------------------------------//


















