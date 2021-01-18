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
        const $this = e.target;
        const targetVal = $this.dataset.nav;
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add('is-active');
        console.log('Clicked!', targetVal);
    };
    
    // クリックしたら起こる処理を実行
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    };

})();