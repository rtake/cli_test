const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv))
    .option('name', { describe: 'CLI名を表示' })
    .option('file', { describe: 'Markdownファイルへのパス' });

if(argv.name) {
    const packageStr = fs.readFileSync(path.resolve(__dirname, 'package.json'), { encoding: 'utf-8'});
    const package = JSON.parse(packageStr);
    
    console.log(package.name);

    process.exit(0);
}

const markdownStr = fs.readFileSync(path.resolve(__dirname, argv.file), { encoding: 'utf-8'});
console.log(markdownStr);