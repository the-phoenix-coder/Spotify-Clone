const headerIcons = document.getElementById('header-icons')
const headerMenu = document.querySelector('.header--left-menu')

headerIcons.addEventListener('click', () =>
    {
    if (headerIcons.classList.contains('open'))
    {
        headerMenu.style.transform = 'translateX(0)'
        headerIcons.classList.remove('open')
        headerIcons.classList.add('close')
    }
    else if(headerIcons.classList.contains('close'))
    {
        headerMenu.style.transform = 'translateX(100%)'
        headerIcons.classList.remove('close')
        headerIcons.classList.add('open')
    }
})

// ..........................................................
const searchIcon = document.querySelector('.icon-search')
const input = document.querySelector('.header--input input')

searchIcon.addEventListener('click', () =>
{
    if (searchIcon.classList.contains('opened'))
    {
        input.style.width = '0px';
        searchIcon.classList.remove('opened')
    } else if (!searchIcon.classList.contains('opened'))
    {
        input.style.width = '300px';
        searchIcon.classList.add('opened')
    }
})
document.body.addEventListener('click', (e) =>
{
    if (!e.target.closest('.header--input'))
    {
        input.style.width = '0';
        searchIcon.classList.remove('opened')
    }
})

// ..............................................................

const asideIcons = document.querySelector('.aside-icons')
const aside = document.querySelector('aside')
const closeIcon = document.querySelector('aside .x')

asideIcons.addEventListener('click', () =>
    {
    if (asideIcons.classList.contains('open'))
    {
        aside.style.transform = 'translateX(0)'
        asideIcons.classList.remove('open')
        asideIcons.classList.add('close')
    }
})
closeIcon.addEventListener('click', () =>
{
    aside.style.transform = 'translateX(-100%)'
    asideIcons.classList.add('open')
    asideIcons.classList.remove('close')
})