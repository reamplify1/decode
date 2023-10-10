let modal = document.querySelector('#modal-window');


function openModal(){
    modal.classList.toggle('open');
}


// function openModalProduct(index){
//     let modalWindows = document.querySelectorAll('.modal-window')
//     console.log(modalWindows);
//     console.log(index);
//     let mdl = [...modalWindows].filter((item , ind) => index === ind)
//     console.log(mdl)
//     mdl[0].classList.toggle('open')
// }


// window.addEventListener('keydown', (e) => {
//     if(e.key === "Escape") {
//         document.getElementById('modal-window').classList.remove('open');
//     }
// });