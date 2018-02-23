// process the rectangle layer. The rectable will be laid out as a div element.

module.exports = function (rectangle, layer) {
    console.log('rectangle, name:' + rectangle.name);
    if (Array.isArray(rectangle.layers) === true) {
        rectangle.layers.forEach(function (_layer) {
            layer(_layer);
        });
    }
};