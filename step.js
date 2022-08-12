// Math.random(): 0 以上 1 未満のランダムな数を得る
// Math.floor: 指定された数値以下の最大の整数を表す数値です。https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
let atai = 15;

if (atai%5 === 0) {
    document.write('Fizz<br>');
} else if (atai%3 === 0) {
    document.write('Buzz<br>');
} else if (atai%15 === 0) {
    document.write('FizzBuzz<br>');
} else {
    document.write(atai + '<br>');
}