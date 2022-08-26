var randomLocation = Math.floor(Math.random() * 5);
var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSink = false;

while ( isSink == false) {
    guess = prompt('Внимание... приготовились... пли! (введите номер от 1 до 6)');
    if (guess < 0 || guess > 6) {
        alert('Пожалуйста, введите правильный номер поля!');
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            if (hits == 3) {
                isSink = true;
                alert('Вы потопили мой корабль!')
            } else {
                alert('Ранили!')
            }
        } else {
            alert('Мимо!')
        }
    }
}
var stats = 'Вы использовали ' + guesses + ' попытки, что бы потопить мой корабль. Твоя точность ' + (300 / guesses) + '%!';
alert(stats);