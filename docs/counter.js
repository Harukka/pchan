//グローバル変数（関数の外で定義）
let counter, btnAdd, btnMinus, btnReset;
//グローバル変数だから2か所で使っている
let n;

//

function addCount(){
    n++;
    counter.innerHTML = n;
    console.log("The new value is " + n +"!")
}

function minusCount(){
    n--;
    counter.innerHTML = n;
    console.log("The new value is " + n +"!")
}

function resetAll(){
    n=0;
    counter.innerHTML = n;
    console.log("Reset!!!!!")
}


window.addEventListener("load",()=>{
    //起動時の処理（画面をロードしたらリセットされる）
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    btnMinus = document.getElementById("btnMinus");
    btnReset = document.getElementById("btnReset");
    n=0;
    //+を押したらAddCountを呼び出す
    btnAdd.addEventListener("click",addCount);
    btnMinus.addEventListener("click",minusCount);
    btnReset.addEventListener("click",resetAll);

});
