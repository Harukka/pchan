//グローバル変数（関数の外で定義）
let counterEl, btnAddEl;
//グローバル変数だから2か所で使っている
let n;

function addCount(){
    n++;
    counterEl.innerHTML = n;
}

window.addEventListener("load",()=>{
    //起動時の処理（画面をロードしたらリセットされる）
    counterEl = document.getElementById("counter");
    btnAddEl = document.getElementById("btnAdd");
    n=0;
    //+を押したらAddCountを呼び出す
    btnAddEl.addEventListener("click", addCount);

});