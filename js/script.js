var a = prompt('Podaj wartość liczby a.'),
	b = prompt('Podaj wartość liczby b.'),
	value = (a*a) + (2 * a * b) - (b*b);

console.log(value);

if (value > 0) {
	console.log('Wynik dodatni.');
}
else if (value < 0) {
	console.log('Wynik ujemny.');
}
else {
	console.log('Wynik jest równy 0.');
}