const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
const colorContainer = document.getElementById('colorContainer');
const textInput = document.getElementById('textInput');

colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.style.width = '100px';
    colorDiv.style.height = '100px';
    colorDiv.style.display = 'inline-block';
    colorDiv.style.margin = '5px';
    colorDiv.style.cursor = 'pointer';


    colorDiv.addEventListener('click', (event) => {
        textInput.style.color = event.target.style.backgroundColor;
    });

    colorContainer.appendChild(colorDiv);
});