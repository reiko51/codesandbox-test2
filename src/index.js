// var val1 = "var変数";
// console.log(val1);

// //var上書き
// val1 = "val1上書き";
// console.log(val1);

// //var再定義
// var val1 = "val1再定義";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //let上書き
// val2 = "val2上書き";
// console.log(val2);

// //lat上書きはできるが再定義できない
// let val2 = "val2再定義";

// const val3 = "const変数";
// console.log(val3);

// //const上書きできない
// val3 = "const上書き";

// //const再定義もできない
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

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// 従来の書き方とアロー関数ではjavascriptのthisの扱いが違ってくる！？
// ここでは追求しない

/**
 * 分割代入
 */
// // オブジェクト
// const myProfile = {
//   name: "れいこ",
//   age: 54,
//   address: "愛知県春日井市"
// };
// // console.log(`名前は${myProfile.name}です。年齢は${myProfile.age}です。`);

// // const { namew, agew } = myProfile;
// // const message2 = `名前は${namew}です。年齢は${agew}です。`;
// // console.log(message2);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// // 配列
// const myProfile = ["れいこ", 54, "愛知県春日井市"];
// const message3 =
//   "名前は" + myProfile[0] + "です。年齢は" + myProfile[1] + "です。";
// console.log(message3);
// const message4 = `4: 名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message4);
// const [name, age] = myProfile;
// const message5 = `5: 名前は${name}です。年齢は${age}です。`;
// console.log(message5);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "reiko") => console.log(`こんにちは${name}さん`);
// sayHello("れいこ");

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1); //配列の中身を順番に処理して展開してくれる

// const sumFunc = (num1, num2) => console.log(num1+num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4]; //参照元の値だけをコピー
// arr6[0] = 100;
// console.log(`arr6:${arr6}`);
// console.log(`arr4:${arr4}`);

//for文で書くとこうなる
// for (let lp = 0; lp < arr4.length; lp++) {
//   arr6[lp] = arr4[lp] * 10;
// }
// console.log(`arr6:${arr6}`);
// console.log(`arr4:${arr4}`);

// const arr7 = [...arr4 , ...arr5];
// console.log (arr7);

// const arr8 = arr4; //参照元のアドレスをコピー

// arr8[0] = 100;
// console.log(arr8);
// const message6 = `arr4: ${arr4}です`;
// console.log(message6);

/**
 * mapやfilterを使った配列の管理
 */
// const nameArr = ["田中", "山田", "れいこ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

//ちょっと復習
// const [name1, name2, name3] = nameArr;
// const nameDsp = (nm1, nm2, nm3) => {
// console.log(nm1);
// console.log(nm2);
// console.log(nm3);
// }
// // nameDsp(name1, name2, name3);
// nameDsp(...nameArr);

//map
// const nameArr2 = nameArr.map((name)=>{return name;})
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));
// nameArr.map((name) => console.log(`名前は${name}です。`));

//fillter
//const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 ===1;
// });
// console.log(newNumArr);numArr.filter((num, index) => console.log(`${index + 1}番目は${name}です。`));

//map
// const newNameArr = nameArr.map((name) => {
//   if (name === "れいこ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//????なんかエラーがでる↓配列のメソッドのコールバックで return 文を強制的に実行します。
// nameArr.map((name) => {
//   if (name === "れいこ") {
//     console.log(name);
//   } else {
//     console.log(`${name}ちゃん`);
//   }
// });
// nameArr.map((name) => console.log(name));

// mapを使わないで書くと？？
// const nameFunc = (name) => {
//   if (name === "れいこ") {
//     console.log(name);
//   } else {
//     console.log(`${name}さま`);
//   }
// };
// for (let index =0; index < nameArr.length; index++){
//   nameFunc(nameArr[index]);
// };

// 自習
// const numbers = [0, 1, 2, 3, 4, 5, 6];
// // const doubledNumbers = numbers.map(function(n) {
// //   return n * 2;
// // });
// const doubledNumbers2 = numbers.map((n) => {
//   return n * 2;
// });
// console.log(doubledNumbers2); // [0, 2, 4, 6, 8, 10, 12]

/**
 * 三項演算子
 */
// ある条件　？　条件がTRUEのとき：　条件がFALSEの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

//const num = 1300;
// const num = "1300";

// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const arr1 = [50, 60];
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// };
// // console.log(checkSum(50, 60));
// console.log(checkSum(...arr1));

// const sumFunc = (num1, num2) => console.log(num1+num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右を返す
// const num = null;  //numがnullとはfalseの状態
// const num = 100;
// const fee = num || "金額未設定です"
// console.log(fee);
// &&は左側がtrueなら右を返す
// const num2 = null;
// //const num2 = 100;
// const fee2 = num2 && "何か設定されました"
// console.log(fee2);

// 三項演算子と論理演算子で書いてみた
// const num = null;
const num = 1500;
// const formattedNum =
// typeof num === "number" ? num.toLocaleString() : "数字を入力してね"
// console.log(formattedNum);
console.log(num);
const formattednum2 = num || "数字を入力してね";
console.log(formattednum2);
const formattednum3 = num && "数字が入力されました";
console.log(formattednum3);
