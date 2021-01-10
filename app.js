const question = "ゲーム市場、最も売れたゲーム機は次の内どれ？";
const answers = [
    "スーパーファミコン", 
    "プレイステーション2", 
    "ニンテンドースイッチ", 
    "ニンテンドーDS"
];
const correct = "ニンテンドーDS";


const $button = document.getElementsByTagName("button");

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();


// ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
    if(correct === e.target.textContent){
        window.alert("正解！");
    } else {
        window.alert("不正解！");
    }
}

let handlerIndex = 0;
let buttonLength = $button.length;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

