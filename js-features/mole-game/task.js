let allHoles = document.querySelectorAll('.hole');
let dead = document.getElementById('dead').textContent;
let lost = document.getElementById('lost').textContent;
const startGame = function(){
    alert ('Правила: 10 попаданий - победа, 5 промахов - проигрыш!');
    document.getElementById('dead').textContent = 0;
    document.getElementById('lost').textContent = 0;
    dead =0;
    lost = 0;
}
startGame ();
for (let i = 0; i < allHoles.length; i++) {
    let hole = allHoles[i];
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')){
            dead += 1;
            document.getElementById('dead').textContent = dead;
            if (dead === 10) {
                alert ('Ты выиграл!');
                alert ('Начать сначала?');
                startGame();
            }
        } else {
            lost += 1;
            document.getElementById('lost').textContent = lost;
            if (lost === 5) {
                alert ('Ты проиграл!');
                alert ('Начать сначала?');
                startGame();
            }
        }
    }
}
