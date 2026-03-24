document.addEventListener('DOMContentLoaded', () => {
    let change_btn = document.querySelector('.change-btn');

    change_btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    })
})