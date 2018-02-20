#!/usr/bin/node
const Markdown = require('markdown').markdown;
const Fs = require('fs');
const Path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const ARGV = require('minimist')(process.argv.slice(2));


(() => {
    const masterHtml = Fs.readFileSync('../master.html', {encoding: 'utf-8'});

    ARGV._.forEach(path => {
        const filename = Path.basename(path, '.md');
        const masterDom = new JSDOM(masterHtml).window.document;
        const htmlContent = Fs.readFileSync(path, {encoding: 'utf-8'});
        const masterContent = masterDom.querySelector('#content');
        masterContent.innerHTML = Markdown.toHTML(htmlContent);
        Fs.writeFileSync(`../${filename}.html`, masterDom.documentElement.outerHTML, 'utf8');
    });
})();
