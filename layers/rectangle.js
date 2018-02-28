/**
 * Process the rectangle layer. The rectangle will be laid out as a div element.
 */
const BaseLayer = require('./layerBase');

module.exports = function (rectangle, processLayer, intermediateObject) {
    var that = BaseLayer(rectangle, processLayer, intermediateObject);
    that.getType = function () {
        return 'rectangle';
    };
    that.render();
};