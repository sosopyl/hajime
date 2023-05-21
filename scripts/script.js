$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 1500,
    // nav: false,
    navSpeed:1500,
    autoplayTimeout:5000,
    navText:[
        '<img src="image/free-icon-arrow-left.png" alt="">',
        '<img src="image/free-icon-arrow-right-3599430.png" alt="">'
    ],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5
        }
    }
})



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

let musiccat = document.querySelector('.musiccat')
let cat3 = document.querySelector('.cat3')

musiccat.addEventListener('click', function(){
    scrolling(cat3)
})

