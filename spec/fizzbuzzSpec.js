
describe('FizzBuzz', function() {
    // A test suite begins with a call to the global Jasmine function 'describe' with two parameters: a 'string' and a 'function'.
    beforeEach(function() {
        fibu = new fizzBuzz();
    });
    
    describe(`FizzBuzz from ${Number.MIN_VALUE} to ${Number.MAX_VALUE}`, function() {
        // Specs are defined by calling the global Jasmine function 'it'.
        it('FizzBuzz function should exist.', function() {
            expect(fizzBuzz).toBeDefined();
            // Expectations are built with the function expect which takes a value, called the actual. 
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
        });
        
        it('Test a number that is evenly divisible by both 5 and 3.', function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        
        it('Test a number that is evenly divisible only by 5 and not 3.', function() {
            var result = fizzBuzz(5)
            expect(result).toBe("Buzz");
        });
        
        it('Test a number that is evenly divisible only by 3 and not 5', function() {
            var result = fizzBuzz(3)
            expect(result).toBe("Fizz");
        });
        
        it('--- Expected to get the number 13 in return, as 13 was entered and is neither evenly divisible by either 3 or 5', function() {
            var result = fizzBuzz(13)
            expect(result).toBe(13);
        });
        
        it('--- Expected to get the error message "Error: you did not enter a number!"', function() {
            var result = fizzBuzz("Abc")
            expect(result).toBe("Error: you did not enter a number!");
        });
        
        it('--- Number.MAX_VALUE is not "Fizz", nor "Buzz", nor "FizzBuzz"', function() {
            var result = fizzBuzz(Number.MAX_VALUE)
            expect(result).toBe(Number.MAX_VALUE);
        });
        
        it('--- Number.MIN_VALUE is not "Fizz", nor "Buzz", nor "FizzBuzz"', function() {
            var result = fizzBuzz(Number.MIN_VALUE)
            expect(result).toBe(Number.MIN_VALUE);
        });            
    });        
});

/*
3.5.0Options
finished in 0.038s
8 specs, 0 failures, randomized with seed 12736
FizzBuzz
FizzBuzz from 5e-324 to 1.7976931348623157e+308
Test a number that is evenly divisible only by 5 and not 3.
Test a number that is evenly divisible only by 3 and not 5
--- Number.MIN_VALUE is not "Fizz", nor "Buzz", nor "FizzBuzz"
--- Expected to get the number 13 in return, as 13 was entered and is neither evenly divisible by either 3 or 5
--- Expected to get the error message "Error: you did not enter a number!"
FizzBuzz function should exist.
Test a number that is evenly divisible by both 5 and 3.
--- Number.MAX_VALUE is not "Fizz", nor "Buzz", nor "FizzBuzz"
*/