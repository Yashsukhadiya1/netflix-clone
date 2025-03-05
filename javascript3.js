document.addEventListener('DOMContentLoaded',function(){
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
     darkModeToggle.addEventListener('click', ()=>{
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode')?'dark':'light';

        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('light-mode');
     })
})