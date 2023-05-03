const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getPackageName } = require('./lib/name');
const { readMarkdownFileSync, writeHtmlFileSync } = require('./lib/file');
const { marked } = require('marked');

const { argv } = yargs(hideBin(process.argv))
    .option('name', { describe: 'CLI名を表示' })
    .option('file', { describe: 'Markdownファイルへのパス' })
    .option('out', {
        describe: '出力するhtmlファイルの名前',
        default: 'article.html'
    });

if(argv.name) {
    const name = getPackageName(); // fs.readFileSync(path.resolve(__dirname, 'package.json'), { encoding: 'utf-8'});
    console.log(name);

    // if --name specified, exit withut other processing
    process.exit(0);
}

// Convert .md -> .html
const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
const html = marked(markdownStr);
writeHtmlFileSync(path.resolve(__dirname, argv.out), html);