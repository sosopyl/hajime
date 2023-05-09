function scrolling(elem){
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}
let aboutus = document.querySelector('.aboutus')
let aboutusdiv = document.querySelector('.aboutusdiv')

aboutus.addEventListener('click', function(){
    scrolling(aboutusdiv)
})

let memberscat = document.querySelector('.memberscat')
let cat2 = document.querySelector('.cat2')

memberscat.addEventListener('click', function(){
    scrolling(cat2)
})

