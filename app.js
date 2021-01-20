const quiz = [
    {
        question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
        answers: [
            "スーパーファミコン", 
            "プレイステーション2", 
            "ニンテンドースイッチ", 
            "ニンテンドーDS"
        ],
        correct: "ニンテンドーDS"
    }, {
        question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
        answers: [
            "MOTHER2", 
            "スーパーマリオブラザーズ3", 
            "スーパードンキーコング", 
            "星のカービィ"
        ],
        correct: "MOTHER2"
    }, {
        question: "ファイナルファンタジーⅣの主人公の名前は？",
        answers: [
            "フリオニール", 
            "クラウド", 
            "ティーダ", 
            "セシル"
        ],
        correct: "セシル"
    }
];


const $button = document.getElementsByTagName("button");

const buttonLength = $button.length;

const quizLength = quiz.length;

let quizIndex = 0;

let score = 0;


// クイズの問題文、選択肢をHTMLに反映させる関数を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;

    let buttonIndex = 0;

    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];

        buttonIndex++;
    }
}

// setupQuizを実行
setupQuiz();


// ボタンをクリックしたら正誤判定し、問題文と選択肢を次のものに変更する関数を定義
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");

        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！" );
    }
}

// clickHandlerを実行
let handlerIndex = 0;

while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    
    handlerIndex++;
}

