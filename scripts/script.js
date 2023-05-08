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



let members = document.querySelectorAll('.member')
for(let member of members){
    member.addEventListener('click', function(){
        modaling()
    })
}

function modaling(){
    let modal = document.getElementById('myModal');
    let span = document.getElementsByClassName("close")[0];
    span.addEventListener('click', function(){
        modal.classList.remove('visible')
    })
    modal.classList.add('visible')
    let modalartist = document.querySelector('.modalartist')
    modalartist.innerHTML = this.alt;
}
