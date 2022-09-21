window.addEventListener('load', () => { 

    const title = document.querySelector('#poll__title');
    const answer = document.querySelector('#poll__answers');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.send();

    let object;
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            object = JSON.parse(xhr.response);
            title.insertAdjacentText('beforeEnd', `${object.data.title}`);
            object.data.answers.forEach(item => {
                answer.insertAdjacentHTML('beforeEnd', `
                <button class="poll__answer">
                     ${item}
                </button>
                `);
            })
            const buttons = answer.querySelectorAll('button');
            buttons.forEach(item => item.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!')));            
        };
    });
});