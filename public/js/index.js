
// Получаем ссылку на div modal-window
var modal = document.getElementById('modal-window');
var currentIndex; // Хранит индекс текущего блога

function toggleModal(index) {
    currentIndex = index; // Сохраняем текущий индекс

    // Меняем стиль отображения в зависимости от текущего состояния
    if (modal.style.display === 'block') {
        closeModal();
    } else {
        openModal();
    }
}

function openModal() {
    modal.style.display = 'block';
    document.addEventListener('keydown', closeModalOnEsc);
}

function closeModal() {
    modal.style.display = 'none';
    document.removeEventListener('keydown', closeModalOnEsc);
}

function closeModalOnEsc(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

window.addEventListener('click', function (event) {
    // Закрываем модальное окно, если кликнуто вне его и не по иконке "Еще"
    if (event.target === modal && !event.target.closest('.edit-content')) {
        closeModal();
    }
});

// Пример работы с индексом текущего блога
function editBlog() {
    // При редактировании блога, можешь использовать currentIndex
    console.log('Редактирование блога с индексом', currentIndex);
}

function deleteBlog() {
    // При удалении блога, можешь использовать currentIndex
    console.log('Удаление блога с индексом', currentIndex);
}