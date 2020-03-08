'use strict';

// 1 からコマンドラインの引数で与えられた数までを
// 合計するプログラム
// node app.js 100 -> 5050
const number = process.argv[2] || 0;
// process.argv[2]
// Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列
// || 0
// Truthy であれば、その値を結果
// Falsy （0 や null や undefinedなど）であれば、その右側の値を結果として使う
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);