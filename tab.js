(()=>{

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    
    // ページが読み込まれると起こる処理
    const init = () => {
        $content[0].style.display = 'block';
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

        // タブの中身を非表示、is-activeクラスを取り除く
        let index = 0;
        while(index < $nav.length){
            $content[index].style.display = 'none';
            $nav[index].classList.remove('is-active');
            index++;
        };
     
        // 操作された要素を表示しis-activeクラスを追加
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add('is-active');

        console.log('Clicked!', targetVal);
    };
    
    // クリックされたらhandleClickを実行
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    };

})();