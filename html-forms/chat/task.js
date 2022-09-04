const chat = document.querySelector('.chat-widget');
const inputChat = document.querySelector('.chat-widget__input');
const chatMessage =  document.querySelector('.chat-widget__messages');
const answer = [
    "Сообщение 1",
    "Сообщение 2",
    "Сообщение 3",
    "Сообщение 4",
    "Сообщение 5",
];
var presently = new Date();
let hour = presently.getHours();
let minute = presently.getMinutes();
let time = `${hour} : ${minute}`;

function openChat() {
    this.classList.add('chat-widget_active');
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function sendMessage(){
    let message = this.value.trim();
    let randomAnswer = getRandomInt(0,answer.length);
    let robotAnswer = answer[randomAnswer];
    if (message) {
        chatMessage.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">${message}</div>
    </div>
    <div class="message">
     <div class="message__time">${time}</div>
     <div class="message__text">${robotAnswer}</div>
      </div>  
      `; 
    };
    this.value();
};

chat.addEventListener('click', openChat);
inputChat.addEventListener('change', sendMessage);

