document.getElementById('applyColorBtn').addEventListener('click', function() {
    const colorInput = document.getElementById('colorInput').value;
    const message = document.getElementById('message');
    const testDiv = document.createElement('div');
    testDiv.style.color = colorInput;
    if (testDiv.style.color) {
        document.body.style.backgroundColor = colorInput;
        message.textContent = '';
    } else {
        message.textContent = 'Invalid color. Please try again.';
    }
}); 