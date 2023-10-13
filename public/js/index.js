// let modal = document.querySelector('#modal-window');


// function openModal(index){
//     modal.classList.toggle('open');
// }


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

// function deleteProduct(id){
//     axios.delete(`/delete/${id}`).then(res => location.reload())
//     console.log(result);
// }



// Добавим слушатель событий при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Слушаем нажатие клавиши Esc
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  });
  
  function openModal(element) {
    var index = element.getAttribute('data-index');
    console.log("Открыть/Закрыть модальное окно для блога с индексом", index);
  
    var modal = document.getElementById('modal-window');
  
    // Если модальное окно уже открыто и связано с текущим блогом, закрываем его
    if (modal.style.display === 'block' && modal.dataset.index === index) {
      closeModal();
    } else {
      // Иначе, открываем модальное окно для текущего блога
      modal.style.display = 'block';
      modal.dataset.index = index; // Запоминаем индекс блога, чтобы знать, связано ли с текущим окном
    }
  
    // Установим позицию модального окна относительно блога
    var blogContent = element.closest('.blog-content');
    var rect = blogContent.getBoundingClientRect();
    modal.style.top = window.scrollY + rect.top + 'px';
    modal.style.left = rect.right + 'px';  // Изменено для отображения справа от блога
  
    // Добавим логику для выполнения соответствующих действий
    // ...
  
    // Пример: закрытие модального окна при нажатии на кнопку "редактировать"
    document.querySelector('.modal-content.modal1').onclick = function() {
      closeModal();
      // Добавьте дополнительную логику по необходимости
    };
  
    // Пример: закрытие модального окна при нажатии на кнопку "удалить"
    document.querySelector('.modal-content.modal2').onclick = function() {
      closeModal();
      // Добавьте дополнительную логику по необходимости
    };
  }
  
  function closeModal() {
    var modal = document.getElementById('modal-window');
    modal.style.display = 'none';
    modal.dataset.index = ''; // Очищаем индекс блога при закрытии
  }