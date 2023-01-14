
function count(){
    //現在の値を取得
//    var thisCount = $("#count").html();
    var thisCount = document.getElementById('count');

    //文字列から数値に変換
        thisCount = Number(thisCount);
        //取得した数値に＋１
        thisCount = thisCount +1;
    //計算した値を上書き
    $("#count").html(thisCount);
}