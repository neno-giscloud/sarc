#!/usr/bin/env node

const transforms = [
    String.prototype.toLocaleLowerCase,
    String.prototype.toLocaleUpperCase
];

const sarcify = (str) => {
    return str
        .split('')
        .map((char, i) => transforms[i % 2].apply(char))
        .join('');
};

process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(sarcify(chunk.toString()));
    }
});