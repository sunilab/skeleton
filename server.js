// Server entry file. Pass this file to nodejs.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const layer = require('./layers/layer');

//app.use is primarily used for loading middle ware.
app.use(express.static('./static'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    next();
});
/**
 * Web service that parses the sketch file and generates a React component.
 */
app.post('/upload', function (req, res) {
    var fileName = req.body.fileName;
    console.log('fileName = ' + fileName);
    var filePath = path.resolve(__dirname, 'temp', fileName);
    console.log('filePath = ' + filePath);
    var documentFilePath = path.resolve(filePath, 'document.json');
    console.log('documentFilePath = ' + documentFilePath);
    fs.readFile(documentFilePath, function (err, data) {
        var document = JSON.parse(data);
        var pages = document.pages;
        pages.forEach(function (page) {
            var pageRef = page._ref;
            if (pageRef) {
                var pageFilePath = path.resolve(filePath, pageRef + '.json');
                console.log('pageFilePath = ' + pageFilePath);
                // load the page content
                fs.readFile(pageFilePath, function (err, pageContent) {
                    if (err) { throw err };
                    var intermidiateObject = [];
                    var page = JSON.parse(pageContent);
                    var layers = page.layers;
                    layers.forEach(function (_layer) {
                        // process the layer
                        layer(_layer, intermidiateObject);
                    });
                    res.send(intermidiateObject);
                });
            }
        });
    });
});

app.listen(8000, () => { console.log('Running the dashboard on port 8000'); });