const { TestScheduler } = require('jest');
const addition = require('../calc');

describe('Calculator', () => {

    describe('Addition function', () => {
        test('should return 42 for 10 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe('Suctraction function', () => {
        
    });
    describe('Multiply function', () => {
        
    });
    describe('Division function', () => {
        
    });

})