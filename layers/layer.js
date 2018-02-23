const artboard = require('./artboard');
const shapeGroup = require('./shapeGroup');
const rectangle = require('./rectangle');

function processLayer (layer) {
    if (layer && layer._class) {
        switch (layer._class) {
            case 'artboard':
            case 'symbolMasters':
                artboard(layer, processLayer);
                break;
            case 'markGroup':
                break;
            case 'shapeGroup':
                shapeGroup(layer, processLayer);
                break;
            case 'symbolInstance':
                break;
            case 'text':
                break;
            case 'bitmap':
                break;
            case 'rectangle':
                rectangle(layer, processLayer);
                break;
            case 'oval':
                break;
            case 'shapePath':
                break;
        }
    }
};

module.exports = processLayer;