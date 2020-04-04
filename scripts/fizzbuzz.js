fizzBuzz = function(number) {
    if (typeof (number) == "number" && number <= Number.MAX_VALUE && number >= Number.MIN_VALUE) {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FizzBuzz";
        } else if (number % 5 == 0) {
            return "Buzz";
        } else if (number % 3 == 0) {
            return "Fizz";
        } else {
            return number;
        }

    } else {
        return "Error: you did not enter a number!"
    }
};