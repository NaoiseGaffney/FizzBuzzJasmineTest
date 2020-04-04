
describe('FizzBuzz', function() {
    beforeEach(function() {
        fibu = new fizzBuzz();
    });
    
    describe('FizzBuzz from 1 to 100', function() {
        
        /* These all test positive */
        it('FizzBuzz function should exist.', function() {
            expect(fizzBuzz).toBeDefined();
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
        
        /* These all test negative */
        
        it('--- Expected to get "undefined" (FAIL): testing FizzBuzz with a number not evenly divisible by both 3 and 5', function() {
            var result = fizzBuzz(13)
            expect(result).toBe(undefined);
        });
    });        
});

/*
3.5.0Options
finished in 0.045s
5 specs, 0 failures, randomized with seed 54456
FizzBuzz
FizzBuzz from 1 to 100
FizzBuzz function should exist.
Test a number that is evenly divisible only by 5 and not 3.
Test a number that is evenly divisible by both 5 and 3.
Test a number that is evenly divisible only by 3 and not 5
--- Expected to get "undefined" (FAIL): testing FizzBuzz with a number not evenly divisible by both 3 and 5
*/