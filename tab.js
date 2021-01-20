(()=>{

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;
    
    // ページが読み込まれると起こる処理
    const init = () => {
        $content[0].style.display = 'none';
    };
    
    // ページが読み込まれると起こる処理を実行
    init();

    // 操作されたら起こる処理
    const handleClick = (e) => {
        // aタグの処理を無効化
        e.preventDefault();

        // 操作された要素においてデータ属性navのdatasetを定数に
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        if ($nav[targetVal].classList.contains(ACTIVE_CLASS) == true){
            // ACTIVE_CLASSを含む時
            // タブの中身を非表示、ACTIVE_CLASSを取り除く
            $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'none';
            $nav[targetVal].classList.remove(ACTIVE_CLASS);
        } else {
            // ACTIVE_CLASSを含まない時
            // すべてのタブの中身を非表示、ACTIVE_CLASSを取り除く
            let index = 0;
            while(index < navLen){
                $content[index].style.display = 'none';
                $nav[index].classList.remove(ACTIVE_CLASS);
                index++;
            }
         
            // 操作された要素を表示しACTIVE_CLASSを追加
            $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
            $nav[targetVal].classList.add(ACTIVE_CLASS);
        }
        

        console.log('Clicked!', targetVal);
    };
    
    // クリックされたらhandleClickを実行
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();