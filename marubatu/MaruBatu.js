'use strict';
const resultDivided = document.getElementById("qanswer");
const nextq = document.getElementById("next")//次の問題のボタン

//わからん
const result2Divided = document.getElementById("result-area2");
const Fs = document.createElement("h2");
Fs.innerText = '正解は...×';
//わかんね
const questionDivided = document.getElementById("questions");
const IncoDivided = document.getElementById("incorrect");
const CorreDivided = document.getElementById("correct");
//知らん

//問題文(まる)
let Maru = ['マツコ・デラックスの本名は松井貴博（まついたかひろ）である',
    'ああああ',
    'ああああああああああああ',
    'ああああああああ',
    'ああああああああああ',
    'あああああああああああああああああ',
    'ああああああああああああああああ',
    'あああああああああ',
    'ああああああああああああああああああああああ',
    'あああああああああああああああああああああ',
];
//問題文(ばつ)
let Batu = [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
    'aaaaaaa',
    'aaaaaaaa',
    'aaaaaaaaa',
    'aaaaaaaaaa',
    'aaaaaaaaaaa',
    'aaaaaaaaaaaa',
    'aaaaaaaaaaaaa',
    'aaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaaa',

];
//ランダム問題生成機
let a = Math.floor(Math.random() * 2);
let Result = null;
if (a === 0) {
    Result = Maru;
} else {
    Result = Batu;
};
let num = Math.floor(Math.random() * Result.length);
console.log(Result);

console.log(Result[num]);
questionDivided.innerText = Result[num];

nextq.onclick = () => {
    let a = Math.floor(Math.random() * 2);
    let Result = null;
    let innu = null;
    innu=''
    if (click_tf === 1) {
        if (a === 0) {
            Result = Maru;
        } else {
            Result = Batu;
        };
        let num = Math.floor(Math.random() * Result.length);
        console.log(Result);

        console.log(Result[num]);
        questionDivided.innerText = Result[num];
        click_tf = 0;
        resultDivided.innerText(innu);
    } else {
        let a = Math.floor(Math.random() * 2);
        let Result = null;
        next.play()
        if (a === 0) {
            Result = Maru;
        } else {
            Result = Batu;
        };
        let num = Math.floor(Math.random() * Result.length);
        console.log(Result);

        console.log(Result[num]);
        questionDivided.innerText = Result[num];
        click_tf = 0;
        resultDivided.innerText(innu);

    }


}//次のボタン



let click_tf = null;


let next = new Audio("./next.mp3");
let tse = new Audio("./maru.mp3");
let fse = new Audio("./batu.mp3");

IncoDivided.onclick = () => {
    let Kotae = null
    click_tf = 1;
    if (a === 1) {
        tse.play()
        Kotae = '正解'
    } else {
        fse.play()
        Kotae = '不正解'
    } resultDivided.innerText = (Kotae);
};//バツボタン
CorreDivided.onclick = () => {
    let kotae = null
    click_tf = 1;
    if (a === 0) {
        tse.play()
        kotae = '正解'
    } else {
        fse.play()
        kotae = '不正解'
    } resultDivided.innerText = (kotae);
};//マルボタン

let ad = new Audio("./なぞなぞ.mp3");


let elem_loop = document.getElementById("loop");
elem_loop.addEventListener("click", function () {
    ad.play();
    ad.loop = true;
}, false);


let mstop = document.getElementById("stop");
mstop.addEventListener("click", function () {
    ad.pause();
    ad.loop = false;
}, false);


//答えもしないの？
//時間かかってようやく正解かよ
//お前こんなんもわかんないの？