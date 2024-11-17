var size = 0;
var placement = 'point';
function categories_SebaranKemiskinanKelurahan_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(26,150,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sangat Rendah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [7.6,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(138,204,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rendah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [7.6,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(219,240,158,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sedang':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [7.6,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(254,223,154,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tinggi':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [7.6,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(245,144,83,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sangat Tinggi':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [7.6,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SebaranKemiskinanKelurahan_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Kelas");
    var labelText = "";
    size = 0;
    var labelFont = "3.9000000000000004px \'Cambria\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_SebaranKemiskinanKelurahan_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
