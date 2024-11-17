var size = 0;
var placement = 'point';
function categories_SebaranKemiskinanKota_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '86':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [19.0,3.8,7.6,3.8,7.6,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(255,245,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '96':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [19.0,3.8,7.6,3.8,7.6,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(253,214,196,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '100':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [19.0,3.8,7.6,3.8,7.6,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(252,164,134,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '124':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [19.0,3.8,7.6,3.8,7.6,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(251,112,80,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '186':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [19.0,3.8,7.6,3.8,7.6,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(234,55,42,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '327':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [19.0,3.8,7.6,3.8,7.6,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(186,20,25,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(103,0,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SebaranKemiskinanKota_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("JML_KK");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Cambria\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("KECAMATAN") !== null) {
        labelText = String(feature.get("KECAMATAN"));
    }
    
var style = categories_SebaranKemiskinanKota_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
