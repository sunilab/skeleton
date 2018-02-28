const artboard = require('./artboard');
const shapeGroup = require('./shapeGroup');
const rectangle = require('./rectangle');

/**
 * Function that routes the processing of the layers to the appropriate layer handlers.
 * @param {*} layer The layer object from the Sketch file.
 * @param {*} intermediateObject The object containing the intermediate component data. The layers, as they are processed keep adding to this intermediate object.
 */
function processLayer (layer, intermediateObject) {
    console.log(`processLayer: intermediateObject: ${0}`, JSON.stringify(intermediateObject));
    if (layer && layer._class) {
        switch (layer._class) {
            case 'artboard':
            case 'symbolMasters':
                artboard(layer, processLayer, intermediateObject);
                break;
            case 'markGroup':
                break;
            case 'shapeGroup':
                shapeGroup(layer, processLayer, intermediateObject);
                break;
            case 'symbolInstance':
                break;
            case 'text':
                break;
            case 'bitmap':
                break;
            case 'rectangle':
                rectangle(layer, processLayer, intermediateObject);
                break;
            case 'oval':
                break;
            case 'shapePath':
                break;
        }
    }
};

module.exports = processLayer;