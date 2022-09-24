var button = document.getElementById('show');
function clicked() {
    if (button.className == 'no') {
        button.className = 'yes';
        button.innerHTML = '<span class="iconify" data-icon="ic:baseline-visibility"></span>';
        document.getElementById('password').type = 'text';
    }
}
function notclicked() {
    if (button.className == 'yes') {
        document.getElementById('password').type = 'password';
        button.className = 'no';
        button.innerHTML = '<span class="iconify" data-icon="ic:baseline-visibility-off"></span>';
    }
}