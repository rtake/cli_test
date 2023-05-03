const { readMarkdownFileSync } = require('./file');

test('readMarkdownFileSync', () => {
    readMarkdownFileSync('test.md')
})