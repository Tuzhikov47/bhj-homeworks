
const tabList = document.querySelectorAll('.tabs');
let tabs;
let tabsContent;

function SelectTab(event) {
    tabs.forEach(item => item.classList.remove('tab_active'));
    tabsContent.forEach(item => item.classList.remove('tab__content_active'));
    event.target.classList.add('tab_active');
    let tabIndex = tabs.indexOf(event.target);
    tabsContent[tabIndex].classList.add('tab__content_active');
}

tabList.forEach(item => {
    tabs = Array.from(item.querySelectorAll('.tab'));
    tabsContent = Array.from(item.querySelectorAll('.tab__content'));
    tabs.forEach(item => {
        item.addEventListener('click', SelectTab);
    });
}) //