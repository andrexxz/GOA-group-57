document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    console.log('სახელი:', firstName);
    console.log('გვარი:', lastName);
    console.log('ასაკი:', age);
    console.log('მეილი:', email);
});