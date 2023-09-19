const toggler = document.querySelector('.share')
const share = document.querySelector('.share_widget')

toggler.addEventListener('click', () => {
    share.classList.toggle('hidden')
    toggler.classList.toggle('active')
})