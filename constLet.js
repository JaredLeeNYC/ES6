/*const和Let不能重复声明
 * Identifier 'message' has already been declared*/
// var message = "Hello!";
// let age = 25;

//  以下两行都会报错
// const message = "Goodbye!";
// const age = 30;


/***在单行的条件或循环语句中，不允许使用let表达式***/
// for(i=0;i<2;i++)
// let x = 1;


/***函数表达式&&块级作用域内声明函数类似于var***/
function f() { console.log('I am outside!'); }

(function () {
 
  if (false) {
    function f() { console.log('I am inside!'); }
  }
  f();
}());