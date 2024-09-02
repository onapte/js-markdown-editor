const express = require('express');
const { parseMarkdown } = require('./markdown-parser');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        'htmlContent': '',
        'textareaValue': '',
    });
});

app.post('/update-text', (req, res) => {
    const textareaValue = req.body.textarea;
    const htmlContent = parseMarkdown(textareaValue);
    res.json({ htmlContent });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});