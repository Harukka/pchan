//グローバル変数（関数の外で定義）
let counter, btnAdd;
//グローバル変数だから2か所で使っている
let n;

//

function addCount(){
    n++;
    counter.innerHTML = n;
}


window.addEventListener("load",()=>{
    //起動時の処理（画面をロードしたらリセットされる）
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    n=0;
    //+を押したらAddCountを呼び出す
    btnAdd.addEventListener("click",addCount);

});
