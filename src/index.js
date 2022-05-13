// var val1 = "var変数";
// console.log(val1);

// //var上書き
// val1 = "val1上書き";
// console.log(val1);

// //var再定義
// var val1 = "val1再定義";
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// //let上書き
// val2 = "val2上書き";
// console.log(val2);

// //lat再定義
// let val2 = "val2再定義";

// const val3 = "const変数";
// console.log(val3);

// //const上書き
// val3 = "const上書き";

// //const再定義
// const val3 = "const再定義";

// const val4 = {
//   name :"れいこ",
//   age : 54,
// }
// console.log(val4);

// //objectはconstも上書き可能
// val4.name = "reiko";
// console.log(val4);

// //objectはconstも再定義可能
// val4.address = "春日井市";
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);

// //配列はconstも上書き可能
// val5[0] = "bird";
// console.log(val5);

// //配列はconstも再定義可能
// val5.push("monkey");
// console.log(val5);

// /*
//   Reactの開発ではオブジェクト、配列はconst
//   動的な変数としてはstateを使うことが多い
// */

// /**
//  * テンプレート文字列
//  */
// const name = "れいこ";
// const age = 54;
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です.`;
// console.log(message2);

// // `はバッククワートっていうよ

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"))

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

//アロー関数にすると
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です。"));

// const func2 = str => {
//   return str;
// }
// console.log(func2("func2です"));

//  const func2 = (str) => str;
//  console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10,20))

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

// 従来の書き方とアロー関数ではjavascriptのthisの扱いが違ってくる！？
// ここでは追求しない
