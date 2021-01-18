(()=>{

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    
    // ページを読み込むと起こる処理
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    // クリックしたら起こる処理
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Clicked!', e);
    };
    $nav[0].addEventListener('click', (e) => handleClick(e));

})();