const checkbox = document.querySelectorAll('.interest__check');

checkbox.forEach(item => item.onchange = function(){
    let subCheckbox = this.closest('.interest').querySelectorAll('.interests_active input');
    if (this.checked) {
        subCheckbox.forEach(item => item.checked = true);
    } else {
        subCheckbox.forEach(item => item.checked = false);
    };
})