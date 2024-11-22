const stringUtils = require('../index');

describe('String Utils', () => {
    describe('capitalizeWords', () => {
        test('capitalizes first letter of each word', () => {
            expect(stringUtils.capitalizeWords('hello world')).toBe('Hello World');
        });

        test('handles empty string', () => {
            expect(stringUtils.capitalizeWords('')).toBe('');
        });
    });

    describe('reverse', () => {
        test('reverses a string', () => {
            expect(stringUtils.reverse('hello')).toBe('olleh');
        });

        test('handles empty string', () => {
            expect(stringUtils.reverse('')).toBe('');
        });
    });

    describe('removeExtraSpaces', () => {
        test('removes extra spaces', () => {
            expect(stringUtils.removeExtraSpaces('hello   world')).toBe('hello world');
        });

        test('handles empty string', () => {
            expect(stringUtils.removeExtraSpaces('')).toBe('');
        });
    });
});