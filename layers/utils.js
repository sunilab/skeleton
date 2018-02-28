/**
 * Function that extracts the common styles from the layer files and creates a style object out of them.
 * The function is called by the base layer processor and appended with the layer specific styles.
 * @param {oject} layer The layer object from the Sketch file.
 */
function getLayerBaseStyle (layer) {
    var frame = layer.frame;
    return {
        height: frame.height,
        position: 'absolute',
        width: frame.width,
        left: frame.x,
        top: frame.y
    };
};

module.exports = { getLayerBaseStyle };