/**
 * @jest-environment jsdom
 */

// BEFORE TESTING, install Jest with this command: npm install --save-dev jest@26.6.3

const buttonClick = require('../button');

beforeEach(() => {
    // read the entire index.html for mocking
    let fs = require('fs'); // File system handling module built into Node that allos us to open, read and write files.
    let fileContents = fs.readFileSync('index.html', 'utf-8'); // read the contents of the HTML file.
    document.open();
    document.write(fileContents);
    document.close();
});

describe('DOM tests', () => {
    test('expects p content to change', () => {
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual('You Clicked');
    });
    test('h1 should exist', () => {
        expect(document.getElementsByTagName('h1').length).toBe(1);
    });
});