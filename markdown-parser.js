const { markdown } = require('markdown');

const parseMarkdown = (content) => {
    var htmlResult = markdown.toHTML(content);
    return htmlResult;
}

module.exports = {
    parseMarkdown,
}