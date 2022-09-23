window.addEventListener('load', () => {
    
    const reset = document.querySelector('#reset');
    const editor = document.querySelector('#editor');
    let editorValue = localStorage.getItem('editor');
    editor.value = editorValue;
    editor.addEventListener('input', (event) => {
        editorValue = event.target.value;
        localStorage.setItem('editor', `${editorValue}`);        
    });
    reset.addEventListener('click', () => {
        editor.value = '';
        localStorage.removeItem('editor');
    });
});

document.getElementById('clearButton').onclick = function(e) {
    document.getElementById('editor').value = "";
}