function themeSwitch() {
    // Получаем нужные html-элементы в переменные
    
    const html = document.documentElement;
    const themeSwitchBtn = document.querySelector('[data-theme-switch-btn]');
    
    
    //localStorage.clear();
    
    
    // Ф-ция определения темы ОС
    
    function initialColorScheme() {
        let isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (isSystemThemeDark.matches) 
            return "dark";
        else  
            return "light";
    }
    
    
    // Изначально html принимает тему, указанную в локальном хранилище. 
    // Если же сайт запускается впервые (локальное хранилище пусто), 
    // то на выполнение подаётся ф-ция, определяющая тему, 
    // исходя из системных настроек.
    
    html.setAttribute('data-theme', localStorage.getItem('visual-theme') || initialColorScheme());
    
    
    // Сменить тему по клику на кнопку. Выбранная тема заносится 
    // в локальное хранилище и при перезагрузке страницы сохраняется
    // (пока пользователь не почистил кэш браузера).
    
    themeSwitchBtn.addEventListener('click', () => {
    
        if (html.getAttribute('data-theme') === 'dark') { 
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('visual-theme', 'light');
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('visual-theme', 'dark');
        }
    
    });
}

themeSwitch();
