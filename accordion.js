(() => {
    // クラスのイニシャルは大文字が慣習
    class Accordion {
        // クラスが呼ばれた直後に実行
        constructor(){
             // js-accordin idがついたhtmlの要素を$elmに代入
            const $elm = document.querySelector('#js-accordion');
            // $elmのaタグの要素を$triggerに代入
            const $trigger = $elm.getElementsByTagName('a');
            
            // $triggerがクリックされたら関数clickHandlerを実行
            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen){
                $trigger[index].addEventListener('click', (e) => clickHandler(e));
                index++;
            }
        }

        clickHandler(e){
            // aタグの働きを防止
            e.preventDefault();

            // クリックされた要素を$targetに代入
            const $target = e.currentTarget;
            // $targetの次の要素を$contentに代入
            const $content = $target.nextElementSibling;
            // $contentを表示、非表示か場合分け
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        };
    }
})();

/*
(() => {
    // js-accordin idがついたhtmlの要素を$elmに代入
    const $elm = document.querySelector('#js-accordion');
    // $elmのaタグの要素を$triggerに代入
    const $trigger = $elm.getElementsByTagName('a');

    // 関数clickHandlerを定義
    const clickHandler = (e) => {
        // aタグの働きを防止
        e.preventDefault();
        
        // クリックされた要素を$targetに代入
        const $target = e.currentTarget;
        // $targetの次の要素を$contentに代入
        const $content = $target.nextElementSibling;
        // $contentを表示、非表示か場合分け
        if($content.style.display === 'block'){
            $content.style.display = 'none';
        } else {
            $content.style.display = 'block';
        }
    };

    // $triggerがクリックされたら関数clickHandlerを実行
    const triggerLen = $trigger.length;
    let index = 0;
    while (index < triggerLen){
        $trigger[index].addEventListener('click', (e) => clickHandler(e));
        index++;
    }
})();
*/