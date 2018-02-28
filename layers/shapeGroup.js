/** 
 * Process the shapeGroup layer. The shapeGroup will be laid out as a div element.
 * In the future we may have to add support for svg and g elements.
 */
const BaseLayer = require('./layerBase');

module.exports = function (shapeGroup, processLayer, intermediateObject) {
    var that = BaseLayer(shapeGroup, processLayer, intermediateObject);
    that.getType = function () {
        return 'shapeGroup';
    };
    that.getStyle = function () {
        // get the style object from the layer
        var style = shapeGroup.style;
        // get the border if applicable
        if (Array.isArray(style.borders) && style.borders[0] 
            && style.borders[0]._class === 'border' && style.borders[0].isEnabled === true) {
            var color = style.borders[0].color;
            if (color && color._class === 'color') {
                var hexColor = `${Math.round(color.red * 255)}, ${Math.round(color.green * 255)}, ${Math.round(color.blue * 255)}, ${color.alpha}`;
                return {
                    border: `solid ${style.borders[0].thickness}px rgba(${hexColor})`
                };
            }
        }
        // get the background if application
        if (Array.isArray(style.fills) && style.fills[0] 
            && style.fills[0]._class === 'fill' && style.fills[0].isEnabled === true) {
            var color = style.fills[0].color;
            if (color && color._class === 'color') {
                var hexColor = `${Math.round(color.red * 255)}, ${Math.round(color.green * 255)}, ${Math.round(color.blue * 255)}, ${color.alpha}`;
                return {
                    backgroundColor: `rgba(${hexColor})`
                };
            }
        }
    };
    that.render();
};