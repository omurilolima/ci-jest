/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require('jest');
const addition = require('../calc');

describe('Calculator', () => {

    describe('Addition function', () => {
        test('should return 42 for 10 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        });
        test('should return 73 for 42 + 31', () => {
            expect(addition(42, 31)).toBe(73);
        })
    });
    describe('Suctraction function', () => {
        
    });
    describe('Multiply function', () => {
        
    });
    describe('Division function', () => {
        
    });

})