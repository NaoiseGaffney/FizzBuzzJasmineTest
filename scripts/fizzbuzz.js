fizzBuzz = function() {
    for (let i = 0; i < 101; i++) {
        if (i%3 == 0 && i%5 == 0) {
            return "FizzBuzz";
        } else if (i % 5 == 0) {
            return "Buzz";
        } else if (i % 5 == 0) {
            return "Fizz";
        }
    }
}

document.getElementById("fizzBuzzOutput").innerHTML = fizzBuzz();