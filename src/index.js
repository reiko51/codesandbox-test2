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

const val5 = ["dog", "cat"];
console.log(val5);

//配列はconstも上書き可能
val5[0] = "bird";
console.log(val5);

//配列はconstも再定義可能
val5.push("monkey");
console.log(val5);

/* 
  Reactの開発ではオブジェクト、配列はconst
  動的な変数としてはstateを使うことが多い
*/
