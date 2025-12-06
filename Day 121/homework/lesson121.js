document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const p = document.querySelector('p');

    if (firstName === '' || lastName === '' || age === '') {
        p.textContent = 'გთხოვთ, შეავსოთ ყველა ველი.';
        return;
    }
    else {
        p.textContent = '';
    }

    const infoList = document.getElementById('infoList');
    const listItem = document.createElement('li');

    listItem.textContent = `სახელი: ${firstName}, გვარი: ${lastName}, ასაკი: ${age}`;
    infoList.appendChild(listItem);
    this.reset();
});
