// process the Artboard layer. The artboard will be laid out as a div element.

module.exports = function (artboard, layer) {
    console.log('Artboard, name:' + artboard.name);
    if (Array.isArray(artboard.layers) === true) {
        artboard.layers.forEach(function (_layer) {
            layer(_layer);
        });
    }
};