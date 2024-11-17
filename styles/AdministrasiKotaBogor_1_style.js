var size = 0;
var placement = 'point';

var style_AdministrasiKotaBogor_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
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
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: [19.0,3.8,7.6,3.8,7.6,3.8], lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(255,1,18,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
