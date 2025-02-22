window.addEventListener('load', () => {

    const progress = document.getElementById('progress');
    const form = document.querySelector('form');
    const file = form.querySelector('#file');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let xhr = new XMLHttpRequest();

        const formData = new FormData(form);
        formData.append('file', file.files[0]);

        xhr.upload.onloadstart = function (event) {            
            progress.value = 0;            
        };

        xhr.upload.onprogress = function (event) {          
            progress.value = event.loaded/event.total;            
        };

        xhr.upload.onloadend = function () {
            progress.value = 1;
            setTimeout(()=> {
                alert('Данные полностью загружены на сервер!');
                progress.value = 0;
                form.reset();
                form.querySelector('.input__wrapper-desc').textContent = 'Имя файла...';
            }, 1000);                      
        };

        xhr.upload.onerror = function () {
            alert('Произошла ошибка при загрузке данных на сервер!');
        };

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        xhr.send(formData);
        let obj = {};
    });
});