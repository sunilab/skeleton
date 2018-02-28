/**
 * Process the Artboard layer. The artboard will be laid out as a div element.
 */
const BaseLayer = require('./layerBase');

module.exports = function (artboard, processLayer, intermidiateObject) {
    var that = BaseLayer(artboard, processLayer, intermidiateObject);
    that.getType = function () {
        return 'artboard';
    };
    that.render();
};