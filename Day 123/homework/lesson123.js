//შექმენი ფორმა სადაც გექნება სამი input-ი, სახელისთვის, ასაკისთვის და პროფესიისთვის, ასევე submit ღილაკი. შექმენი კონსტრუქტორ ფუნქცია რომელის პარამეტრად მიიღებს სახელს, ასაკს და პროფესიას, შექმენი ფუნქცია კონტრუქტორში რომელიც დააბრუნებს სახელი - პროფესია (ანუ მომხარებლის სახელს და გვერდით მის პროფესიას). dom-ში შექმენი div და მასში ჩაამატე პარაგრამი რომლის მნიშვნელობა იქნება ის რასაც კონსტრუქტორის ფუნქცია დააბრუნებს
function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.getInfo = function() {
        return `${this.name} - ${this.profession}`;
    }
}

document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('personName').value;
    const age = document.getElementById('personAge').value;
    const profession = document.getElementById('personProfession').value;
    const person = new Person(name, age, profession);

    document.getElementById('personOutput').innerText = person.getInfo();
});
