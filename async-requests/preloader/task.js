window.addEventListener('load',() => {

    const items = document.getElementById('items');
    const load = document.getElementById('loader');

    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://netology-slow-rest.herokuapp.com/');
    xhr.send();
    let object;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            load.classList.remove('loader_active');
            
            object = JSON.parse(xhr.responseText);
            
            const rate = object.response.Valute;

            for (let key in rate) {
                items.insertAdjacentHTML('beforeEnd',
                `<div class="item">
                <div class="item__code">
                        ${rate[key]['CharCode']}
                    </div>
                    <div class="item__value">
                        ${rate[key]['Value']}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
              </div>`);
            };
        };

    };

});