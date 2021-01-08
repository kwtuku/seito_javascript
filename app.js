const question = "ゲーム市場、最も売れたゲーム機は次の内どれ？";
const answers = [
    "スーパーファミコン", 
    "プレイステーション2", 
    "ニンテンドースイッチ", 
    "ニンテンドーDS"
];
const correct = "ニンテンドーDS";


// 定数の文字列をHTMLに反映させる
document.getElementById("js-question").textContent = question;

const $buttun = document.getElementsByTagName("button");
$buttun[0].textContent = answers[0];
$buttun[1].textContent = answers[1];
$buttun[2].textContent = answers[2];
$buttun[3].textContent = answers[3];


// ボタンをクリックしたら正誤判定
$buttun[0].addEventListener("click", () => {
    if(correct === $buttun[0].textContent){
        window.alert("正解！");
    } else {
        window.alert("不正解！");
    }
});

$buttun[1].addEventListener("click", () => {
    if(correct === $buttun[1].textContent){
        window.alert("正解！");
    } else {
        window.alert("不正解！");
    }
});

$buttun[2].addEventListener("click", () => {
    if(correct === $buttun[2].textContent){
        window.alert("正解！");
    } else {
        window.alert("不正解！");
    }
});

$buttun[3].addEventListener("click", () => {
    if(correct === $buttun[3].textContent){
        window.alert("正解！");
    } else {
        window.alert("不正解！");
    }
});