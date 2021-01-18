(()=>{

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    
    // ページを読み込むと起こる処理
    const init = () => {
        $content[0].style.display = 'block';
    };
    
    // ページを読み込むと起こる処理を実行
    init();

    // クリックしたら起こる処理
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Clicked!', e);
    };
    
    // クリックしたら起こる処理を実行
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    };

})();