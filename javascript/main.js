// Variables listing
var pricePerKm = 0.21;
var distance = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
var age = parseInt(prompt('Quanti anni ha il passeggero?'));
var basePrice = distance * pricePerKm;
var discountYoung = basePrice * 0.8;
var discountSenior = basePrice * 0.6;

// Conditional statements
if (age >= 65) {
  document.getElementById('discount').innerHTML = 'Prezzo scontato per over 65: <br>' + discountSenior.toFixed(2) + ' €';
}
else if (age < 18) {
  document.getElementById('discount').innerHTML = 'Prezzo scontato per under 18: <br>' + discountYoung.toFixed(2) + ' €';
}
else {
  document.getElementById('no-discount').innerHTML = 'Prezzo del biglietto: <br>' + basePrice.toFixed(2) + ' €';
}

// HTML inclusions 
document.getElementById('distance').innerHTML = distance + ' Km';
document.getElementById('age').innerHTML = age;

