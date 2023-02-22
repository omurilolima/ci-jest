/**
 * @jest-environment jsdom
 */

const { game } = require('../game');

beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
})

describe('game object contains correct keys', () => {
    test('score keys exists', () => {
        expect('score' in game).toBe(true);
    });
    test('currentGame keys exists', () => {
        expect('currentGame' in game).toBe(true);
    });
    test('playerMoves keys exists', () => {
        expect('playerMoves' in game).toBe(true);
    });
    test('choices keys exists', () => {
        expect('choices' in game).toBe(true);
    });
});