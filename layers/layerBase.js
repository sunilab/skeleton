const getLayerBaseStyle = require('./utils').getLayerBaseStyle;
const _ = require('lodash');

/**
 * Base function that renders the layer while recursively going through its children.
 * @param {object} layer The layer from the design. E.g. Artboard, ShapeGroup, Rectangle etc. 
 * @param {function} processLayer The function that routes to the appropriate layer processor. This is passed in automatically.
 * @param {object} intermediateObject The object that compiles the intermediate JSON for the component.
 * @function getStyle Override the function that returns an object with additional styles specific to the layer.
 * @function getType Override the function that returns a string indicating the layer type.
 * @function getHTMLElement Override the function that returns a string that indicates the HTML element to render for the layer. Default is 'div'.
 */
function createLayer (layer, processLayer, intermediateObject) {
    var that = {};
    that.getStyle = function () {
        return {};
    };
    that.getType = function () {
        return '';
    };
    that.getHTMLElement = function () {
        return 'div';
    };
    that.render = function () {
        console.log(`shapeGroup, name: ${layer.name}`);
        var obj = {
            element: that.getHTMLElement(),
            type: that.getType(),
            name: layer.name,
            style: _.merge(getLayerBaseStyle(layer), that.getStyle()),
            children: []
        };
        console.log(`intermediateObject obj: ${JSON.stringify(intermediateObject)}`);
        if (Array.isArray(intermediateObject) === true) {
            intermediateObject.push(obj);
        } else {
            intermediateObject = [obj];
        }
        if (Array.isArray(layer.layers) === true) {
            layer.layers.forEach(function (_layer) {
                processLayer(_layer, intermediateObject[intermediateObject.length - 1].children);
            });
        }
    };
    return that;
}

module.exports = createLayer;