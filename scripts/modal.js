
let modalcontent = document.querySelector('.modal-content')

let members = document.querySelectorAll('.member')
for(let member of members){
    member.addEventListener('click', function(){
        modaling(member)
        console.log(member.firstElementChild)
    })
}

function modaling(member){
    let modal = document.getElementById('myModal');
    let modalartist = document.querySelector('.modalartist')
    modalartist.textContent = member.lastElementChild.textContent;
    


    // let artistimg = document.createElement('img');
    // artistimg.src = 'member.firstElementChild.src'
    let modalimg = document.querySelector('.modalimg');
    modalimg.src = member.firstElementChild.src
    // modalimg.appendChild(artistimg)
    // artistimg.innerHTML = member.firstElementChild;
    console.log(modalimg)
    // artistimg.preendChild(modalcontent.firstElementChild)
    
    let span = document.getElementsByClassName("close")[0];
    span.addEventListener('click', function(){
        modal.classList.remove('visible')
    })

    
    modal.classList.add('visible')
}
