// process the shapeGroup layer. The shapeGroup will be laid out as a div element.
// In the future we may have to add support for svg and g elements.

module.exports = function (shapeGroup, layer) {
    console.log('shapeGroup, name:' + shapeGroup.name);
    if (Array.isArray(shapeGroup.layers) === true) {
        shapeGroup.layers.forEach(function (_layer) {
            layer(_layer);
        });
    }
};