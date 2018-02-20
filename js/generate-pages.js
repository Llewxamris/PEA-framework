#!/usr/bin/node
const Markdown = require('markdown').markdown;
const Fs = require('fs');
const Path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const ARGV = require('minimist')(process.argv.slice(2));

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

(() => {
    const masterHtml = Fs.readFileSync('../master.html', {encoding: 'utf-8'});

    ARGV._.forEach(path => {
        const filename = Path.basename(path, '.md');
        const masterDom = new JSDOM(masterHtml).window.document;
        const htmlContent = Fs.readFileSync(path, {encoding: 'utf-8'});
        const masterContent = masterDom.querySelector('#content');
        const masterTitle = masterDom.querySelector('#hTitle');

        // TODO Remove hardcoded information
        switch (filename) {
        case 'teamEnvironment':
            masterDom.title = '2017/2018 PEA - Team Environment';
            masterTitle.innerHTML = 'Team Environment';
            break;
        case 'projectManagement':
            masterDom.title = '2017/2018 PEA - Project Management';
            masterTitle.innerHTML = 'Project Management';
            break;
        default:
            masterTitle.innerHTML = capitalizeWord(filename);
            masterDom.title = `2017/2018 PEA - ${capitalizeWord(filename)}`;
            break;
        }

        masterContent.innerHTML = Markdown.toHTML(htmlContent);
        Fs.writeFileSync(`../${filename}.html`, masterDom.documentElement.outerHTML, 'utf8');
    });
})();
