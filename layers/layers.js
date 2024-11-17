var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_AdministrasiKotaBogor_1 = new ol.format.GeoJSON();
var features_AdministrasiKotaBogor_1 = format_AdministrasiKotaBogor_1.readFeatures(json_AdministrasiKotaBogor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKotaBogor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKotaBogor_1.addFeatures(features_AdministrasiKotaBogor_1);
var lyr_AdministrasiKotaBogor_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiKotaBogor_1, 
                style: style_AdministrasiKotaBogor_1,
                popuplayertitle: "Administrasi Kota Bogor",
                interactive: false,
                title: '<img src="styles/legend/AdministrasiKotaBogor_1.png" /> Administrasi Kota Bogor'
            });
var format_SebaranKemiskinanKota_2 = new ol.format.GeoJSON();
var features_SebaranKemiskinanKota_2 = format_SebaranKemiskinanKota_2.readFeatures(json_SebaranKemiskinanKota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranKemiskinanKota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranKemiskinanKota_2.addFeatures(features_SebaranKemiskinanKota_2);
var lyr_SebaranKemiskinanKota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranKemiskinanKota_2, 
                style: style_SebaranKemiskinanKota_2,
                popuplayertitle: "Sebaran Kemiskinan Kota",
                interactive: false,
    title: 'Sebaran Kemiskinan Kota<br />\
    <img src="styles/legend/SebaranKemiskinanKota_2_0.png" /> 86<br />\
    <img src="styles/legend/SebaranKemiskinanKota_2_1.png" /> 96<br />\
    <img src="styles/legend/SebaranKemiskinanKota_2_2.png" /> 100<br />\
    <img src="styles/legend/SebaranKemiskinanKota_2_3.png" /> 124<br />\
    <img src="styles/legend/SebaranKemiskinanKota_2_4.png" /> 186<br />\
    <img src="styles/legend/SebaranKemiskinanKota_2_5.png" /> 327<br />\
    <img src="styles/legend/SebaranKemiskinanKota_2_6.png" /> <br />'
        });
var format_SebaranKemiskinanKelurahan_3 = new ol.format.GeoJSON();
var features_SebaranKemiskinanKelurahan_3 = format_SebaranKemiskinanKelurahan_3.readFeatures(json_SebaranKemiskinanKelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranKemiskinanKelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranKemiskinanKelurahan_3.addFeatures(features_SebaranKemiskinanKelurahan_3);
var lyr_SebaranKemiskinanKelurahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranKemiskinanKelurahan_3, 
                style: style_SebaranKemiskinanKelurahan_3,
                popuplayertitle: "Sebaran Kemiskinan Kelurahan",
                interactive: false,
    title: 'Sebaran Kemiskinan Kelurahan<br />\
    <img src="styles/legend/SebaranKemiskinanKelurahan_3_0.png" /> <br />\
    <img src="styles/legend/SebaranKemiskinanKelurahan_3_1.png" /> Sangat Rendah<br />\
    <img src="styles/legend/SebaranKemiskinanKelurahan_3_2.png" /> Rendah<br />\
    <img src="styles/legend/SebaranKemiskinanKelurahan_3_3.png" /> Sedang<br />\
    <img src="styles/legend/SebaranKemiskinanKelurahan_3_4.png" /> Tinggi<br />\
    <img src="styles/legend/SebaranKemiskinanKelurahan_3_5.png" /> Sangat Tinggi<br />'
        });
var format_SebaranEHRA_4 = new ol.format.GeoJSON();
var features_SebaranEHRA_4 = format_SebaranEHRA_4.readFeatures(json_SebaranEHRA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranEHRA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranEHRA_4.addFeatures(features_SebaranEHRA_4);
var lyr_SebaranEHRA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranEHRA_4, 
                style: style_SebaranEHRA_4,
                popuplayertitle: "Sebaran EHRA",
                interactive: false,
    title: 'Sebaran EHRA<br />\
    <img src="styles/legend/SebaranEHRA_4_0.png" /> Beresiko Sangat Tinggi<br />\
    <img src="styles/legend/SebaranEHRA_4_1.png" /> Beresiko Sedang<br />\
    <img src="styles/legend/SebaranEHRA_4_2.png" /> Beresiko Tinggi<br />\
    <img src="styles/legend/SebaranEHRA_4_3.png" /> Kurang Beresiko<br />\
    <img src="styles/legend/SebaranEHRA_4_4.png" /> <br />'
        });
var format_SebaranKawasanKumuh_5 = new ol.format.GeoJSON();
var features_SebaranKawasanKumuh_5 = format_SebaranKawasanKumuh_5.readFeatures(json_SebaranKawasanKumuh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranKawasanKumuh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranKawasanKumuh_5.addFeatures(features_SebaranKawasanKumuh_5);
var lyr_SebaranKawasanKumuh_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranKawasanKumuh_5, 
                style: style_SebaranKawasanKumuh_5,
                popuplayertitle: "Sebaran Kawasan Kumuh",
                interactive: false,
                title: '<img src="styles/legend/SebaranKawasanKumuh_5.png" /> Sebaran Kawasan Kumuh'
            });
var format_AdministrasiKelurahanMulyaharja_6 = new ol.format.GeoJSON();
var features_AdministrasiKelurahanMulyaharja_6 = format_AdministrasiKelurahanMulyaharja_6.readFeatures(json_AdministrasiKelurahanMulyaharja_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKelurahanMulyaharja_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKelurahanMulyaharja_6.addFeatures(features_AdministrasiKelurahanMulyaharja_6);
var lyr_AdministrasiKelurahanMulyaharja_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiKelurahanMulyaharja_6, 
                style: style_AdministrasiKelurahanMulyaharja_6,
                popuplayertitle: "Administrasi Kelurahan Mulyaharja",
                interactive: false,
                title: '<img src="styles/legend/AdministrasiKelurahanMulyaharja_6.png" /> Administrasi Kelurahan Mulyaharja'
            });
var format_BangunanKelurahanMulyaharja_7 = new ol.format.GeoJSON();
var features_BangunanKelurahanMulyaharja_7 = format_BangunanKelurahanMulyaharja_7.readFeatures(json_BangunanKelurahanMulyaharja_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanKelurahanMulyaharja_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanKelurahanMulyaharja_7.addFeatures(features_BangunanKelurahanMulyaharja_7);
var lyr_BangunanKelurahanMulyaharja_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanKelurahanMulyaharja_7, 
                style: style_BangunanKelurahanMulyaharja_7,
                popuplayertitle: "Bangunan Kelurahan Mulyaharja",
                interactive: false,
                title: '<img src="styles/legend/BangunanKelurahanMulyaharja_7.png" /> Bangunan Kelurahan Mulyaharja'
            });
var format_BangunanKemiskinanEkstrim_8 = new ol.format.GeoJSON();
var features_BangunanKemiskinanEkstrim_8 = format_BangunanKemiskinanEkstrim_8.readFeatures(json_BangunanKemiskinanEkstrim_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanKemiskinanEkstrim_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanKemiskinanEkstrim_8.addFeatures(features_BangunanKemiskinanEkstrim_8);
var lyr_BangunanKemiskinanEkstrim_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanKemiskinanEkstrim_8, 
                style: style_BangunanKemiskinanEkstrim_8,
                popuplayertitle: "Bangunan Kemiskinan Ekstrim",
                interactive: true,
                title: '<img src="styles/legend/BangunanKemiskinanEkstrim_8.png" /> Bangunan Kemiskinan Ekstrim'
            });
var format_Sungai_9 = new ol.format.GeoJSON();
var features_Sungai_9 = format_Sungai_9.readFeatures(json_Sungai_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_9.addFeatures(features_Sungai_9);
var lyr_Sungai_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_9, 
                style: style_Sungai_9,
                popuplayertitle: "Sungai",
                interactive: false,
                title: '<img src="styles/legend/Sungai_9.png" /> Sungai'
            });
var format_Jalan_10 = new ol.format.GeoJSON();
var features_Jalan_10 = format_Jalan_10.readFeatures(json_Jalan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_10.addFeatures(features_Jalan_10);
var lyr_Jalan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_10, 
                style: style_Jalan_10,
                popuplayertitle: "Jalan",
                interactive: false,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_10_0.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_10_1.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_10_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_10_3.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_10_4.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_10_5.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/Jalan_10_6.png" /> <br />'
        });
var format_TitikKemiskinanEkstrim_11 = new ol.format.GeoJSON();
var features_TitikKemiskinanEkstrim_11 = format_TitikKemiskinanEkstrim_11.readFeatures(json_TitikKemiskinanEkstrim_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikKemiskinanEkstrim_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikKemiskinanEkstrim_11.addFeatures(features_TitikKemiskinanEkstrim_11);
var lyr_TitikKemiskinanEkstrim_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikKemiskinanEkstrim_11, 
                style: style_TitikKemiskinanEkstrim_11,
                popuplayertitle: "Titik Kemiskinan Ekstrim",
                interactive: true,
                title: '<img src="styles/legend/TitikKemiskinanEkstrim_11.png" /> Titik Kemiskinan Ekstrim'
            });
var format_PendidikanMulyaharja_12 = new ol.format.GeoJSON();
var features_PendidikanMulyaharja_12 = format_PendidikanMulyaharja_12.readFeatures(json_PendidikanMulyaharja_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PendidikanMulyaharja_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PendidikanMulyaharja_12.addFeatures(features_PendidikanMulyaharja_12);
var lyr_PendidikanMulyaharja_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PendidikanMulyaharja_12, 
                style: style_PendidikanMulyaharja_12,
                popuplayertitle: "Pendidikan Mulyaharja",
                interactive: true,
                title: '<img src="styles/legend/PendidikanMulyaharja_12.png" /> Pendidikan Mulyaharja'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AdministrasiKotaBogor_1.setVisible(true);lyr_SebaranKemiskinanKota_2.setVisible(true);lyr_SebaranKemiskinanKelurahan_3.setVisible(true);lyr_SebaranEHRA_4.setVisible(true);lyr_SebaranKawasanKumuh_5.setVisible(true);lyr_AdministrasiKelurahanMulyaharja_6.setVisible(true);lyr_BangunanKelurahanMulyaharja_7.setVisible(true);lyr_BangunanKemiskinanEkstrim_8.setVisible(true);lyr_Sungai_9.setVisible(true);lyr_Jalan_10.setVisible(true);lyr_TitikKemiskinanEkstrim_11.setVisible(true);lyr_PendidikanMulyaharja_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AdministrasiKotaBogor_1,lyr_SebaranKemiskinanKota_2,lyr_SebaranKemiskinanKelurahan_3,lyr_SebaranEHRA_4,lyr_SebaranKawasanKumuh_5,lyr_AdministrasiKelurahanMulyaharja_6,lyr_BangunanKelurahanMulyaharja_7,lyr_BangunanKemiskinanEkstrim_8,lyr_Sungai_9,lyr_Jalan_10,lyr_TitikKemiskinanEkstrim_11,lyr_PendidikanMulyaharja_12];
lyr_AdministrasiKotaBogor_1.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', });
lyr_SebaranKemiskinanKota_2.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'JML_KK': 'JML_KK', });
lyr_SebaranKemiskinanKelurahan_3.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'SUMBER': 'SUMBER', 'JML_KK': 'JML_KK', 'Kelas': 'Kelas', });
lyr_SebaranEHRA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'K_CEPAT': 'K_CEPAT', 'K_EHRA': 'K_EHRA', 'WP': 'WP', 'L_2014': 'L_2014', 'L_2020': 'L_2020', 'L_SELISIH': 'L_SELISIH', });
lyr_SebaranKawasanKumuh_5.set('fieldAliases', {'NAMA_KAWAS': 'NAMA_KAWAS', 'NAMA_RT': 'NAMA_RT', 'LUAS_HA_OK': 'LUAS_HA_OK', });
lyr_AdministrasiKelurahanMulyaharja_6.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'X': 'X', 'Y': 'Y', 'Luas_Area': 'Luas_Area', });
lyr_BangunanKelurahanMulyaharja_7.set('fieldAliases', {'Id': 'Id', });
lyr_BangunanKemiskinanEkstrim_8.set('fieldAliases', {'NIK': 'NIK', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'RT': 'RT', 'RW': 'RW', 'KEC': 'KECAMATAN', 'KEL': 'KELURAHAN', 'KLMN': 'JENIS KELAMIN', 'TL': 'TANGGAL LAHIR', 'HUB': 'HUBUNGAN', 'KAWIN': 'STATUS PERKAWINAN', 'USIA_24': 'USIA', 'PEK': 'PEKERJAAN', 'PDD': 'PENDIDIKAN', 'INDX': 'INDEX', 'BANTU': 'PROGRAM BANTUAN', 'PHSIL': 'PENGHASILAN', 'PLUAR': 'PENGHASILAN LUAR', 'STA_BGN': 'STATUS BANGUNAN', 'STA_RMH': 'STATUS RUMAH', 'RODA_2': 'KEPEMILIKAN RODA 2', 'TANGGUNG': 'TANGGUNGAN', 'LANTAI': 'JENIS LANTAI', 'JNS_DIND': 'JENIS DINDING', 'KOND_DIN': 'KONDISI DINDING', 'JNS_ATP': 'JENIS ATAP', 'KOND_ATP': 'KONDISI ATAP', 'MINUM': 'AIR MINUM', 'PR_MINUM': 'SUMBER AIR MINUM', 'TERANG': 'SUMBER PENERANGAN', 'DAYA': 'SUMBER DAYA', 'MASAK': 'BAHAN BAKAR MEMASAK', 'FAS_BAB': 'FASILITAS BAB', 'KLOSET': 'JENIS KLOSET', 'TINJA': 'PEMBUANGAN TINJA', 'DISABILITA': 'PENDERITA DISABILITAS', 'SAKIT': 'PENDERITA SAKIT', 'JUM_SKLH': 'JUMLAH KELUARGA BERSEKOLAH', 'BIAYA_SKL': 'BIAYA SEKOLAH', 'JML_PTS': 'JUMLAH KELUARGA PUTUS SEKOLAH', 'USAHA': 'BIDANG USAHA', 'TDK_KRJ': 'JUMLAH KELUARGA TIDAK BEKERJA', 'KLG_TG': 'KLG_TG', 'BLT_STUNT': 'BALITA STUNTING', 'JALAN': 'AKSES JALAN', 'DRAIN': 'DRAINASE', 'X': 'X', 'Y': 'Y', 'KET': 'KET', 'FOTO': 'FOTO', 'USULAN': 'USULAN INTERVENSI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'KETERANGAN': 'KETERANGAN', 'LUAS_HA': 'LUAS_HA', });
lyr_Jalan_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TitikKemiskinanEkstrim_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NIK': 'NIK', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'RT': 'RT', 'RW': 'RW', 'KEC': 'KECAMATAN', 'KEL': 'KELURAHAN', 'KLMN': 'JENIS KELAMIN', 'TL': 'TANGGAL LAHIR', 'HUB': 'HUBUNGAN', 'KAWIN': 'STATUS PERKAWINAN', 'USIA_24': 'USIA', 'PEK': 'PEKERJAAN', 'PDD': 'PENDIDIKAN', 'STAT': 'STAT', 'INDX': 'INDEX', 'BANTU': 'PROGRAM BANTUAN', 'PHSIL': 'PENGHASILAN', 'PLUAR': 'PENGHASILAN LUAR', 'STA_BGN': 'STATUS BANGUNAN', 'STA_RMH': 'STATUS RUMAH', 'RODA_2': 'KEPEMILIKAN RODA 2', 'TANGGUNG': 'TANGGUNGAN', 'LANTAI': 'JENIS LANTAI', 'JNS_DIND': 'JENIS DINDING', 'KOND_DIN': 'KONDISI DINDING', 'JNS_ATP': 'JENIS ATAP', 'KOND_ATP': 'KONDISI ATAP', 'MINUM': 'AIR MINUM', 'PR_MINUM': 'SUMBER AIR MINUM', 'TERANG': 'SUMBER PENERANGAN', 'DAYA': 'SUMBER DAYA', 'MASAK': 'BAHAN BAKAR MASAK', 'FAS_BAB': 'FASILITAS BAB', 'KLOSET': 'JENIS KLOSET', 'TINJA': 'PEMBUANGAN TINJA', 'DISABILITA': 'PENDERITA DISABILITAS', 'SAKIT': 'PENDERITA SAKIT', 'JUM_SKLH': 'JUMLAH ANGGOTA BERSEKOLAH', 'N_SKLH': 'NAMA SEKOLAH', 'MDL_SKL': 'MDL_SKL', 'BIAYA_SKL': 'BIAYA SEKOLAH', 'JML_PTS': 'JUMLAH ANGGOTA PUTUS SEKOLAH', 'USAHA': 'BIDANG USAHA', 'TDK_KRJ': 'JUMLAH ANGGOTA TIDAK BEKERJA', 'KLG_TG': 'KLG_TG', 'BLT_STUNT': 'BALITA STUNTING', 'JALAN': 'AKSES JALAN', 'DRAIN': 'DRAINASE', 'X': 'X', 'Y': 'Y', 'NO_ID': 'NO_ID', 'NO_FORM': 'NO_FORM', 'KET': 'KET', 'SURV': 'SURV', 'FOTO': 'FOTO', 'NO_LEGEN': 'NO_LEGEN', 'USULAN': 'USULAN INTERVENSI', });
lyr_PendidikanMulyaharja_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NIK': 'NIK', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'RT': 'RT', 'RW': 'RW', 'KEC': 'KEC', 'KEL': 'KEL', 'KLMN': 'KLMN', 'TL': 'TL', 'HUB': 'HUB', 'KAWIN': 'KAWIN', 'USIA_24': 'USIA_24', 'PEK': 'PEK', 'PDD': 'PDD', 'STAT': 'STAT', 'INDX': 'INDX', 'BANTU': 'BANTU', 'PHSIL': 'PHSIL', 'PLUAR': 'PLUAR', 'STA_BGN': 'STA_BGN', 'STA_RMH': 'STA_RMH', 'RODA_2': 'RODA_2', 'TANGGUNG': 'TANGGUNG', 'LANTAI': 'LANTAI', 'JNS_DIND': 'JNS_DIND', 'KOND_DIN': 'KOND_DIN', 'JNS_ATP': 'JNS_ATP', 'KOND_ATP': 'KOND_ATP', 'MINUM': 'MINUM', 'PR_MINUM': 'PR_MINUM', 'TERANG': 'TERANG', 'DAYA': 'DAYA', 'MASAK': 'MASAK', 'FAS_BAB': 'FAS_BAB', 'KLOSET': 'KLOSET', 'TINJA': 'TINJA', 'DISABILITA': 'DISABILITA', 'SAKIT': 'SAKIT', 'JUM_SKLH': 'JUM_SKLH', 'N_SKLH': 'N_SKLH', 'MDL_SKL': 'MDL_SKL', 'BIAYA_SKL': 'BIAYA_SKL', 'JML_PTS': 'JML_PTS', 'USAHA': 'USAHA', 'TDK_KRJ': 'TDK_KRJ', 'KLG_TG': 'KLG_TG', 'BLT_STUNT': 'BLT_STUNT', 'JALAN': 'JALAN', 'DRAIN': 'DRAIN', 'X': 'X', 'Y': 'Y', 'NO_ID': 'NO_ID', 'NO_FORM': 'NO_FORM', 'KET': 'KET', 'SURV': 'SURV', 'FOTO': 'FOTO', 'NO_LEGEN': 'NO_LEGEN', 'USULAN': 'USULAN', });
lyr_AdministrasiKotaBogor_1.set('fieldImages', {'KECAMATAN': 'TextEdit', });
lyr_SebaranKemiskinanKota_2.set('fieldImages', {'KECAMATAN': 'TextEdit', 'JML_KK': 'Range', });
lyr_SebaranKemiskinanKelurahan_3.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'SUMBER': 'TextEdit', 'JML_KK': 'Range', 'Kelas': 'TextEdit', });
lyr_SebaranEHRA_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'K_CEPAT': 'TextEdit', 'K_EHRA': 'TextEdit', 'WP': 'TextEdit', 'L_2014': 'TextEdit', 'L_2020': 'TextEdit', 'L_SELISIH': 'TextEdit', });
lyr_SebaranKawasanKumuh_5.set('fieldImages', {'NAMA_KAWAS': 'TextEdit', 'NAMA_RT': 'TextEdit', 'LUAS_HA_OK': 'TextEdit', });
lyr_AdministrasiKelurahanMulyaharja_6.set('fieldImages', {'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Luas_Area': 'TextEdit', });
lyr_BangunanKelurahanMulyaharja_7.set('fieldImages', {'Id': 'Range', });
lyr_BangunanKemiskinanEkstrim_8.set('fieldImages', {'NIK': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'KEC': 'TextEdit', 'KEL': 'TextEdit', 'KLMN': 'TextEdit', 'TL': 'DateTime', 'HUB': 'TextEdit', 'KAWIN': 'TextEdit', 'USIA_24': 'TextEdit', 'PEK': 'TextEdit', 'PDD': 'TextEdit', 'INDX': 'TextEdit', 'BANTU': 'TextEdit', 'PHSIL': 'TextEdit', 'PLUAR': 'TextEdit', 'STA_BGN': 'TextEdit', 'STA_RMH': 'TextEdit', 'RODA_2': 'TextEdit', 'TANGGUNG': 'TextEdit', 'LANTAI': 'TextEdit', 'JNS_DIND': 'TextEdit', 'KOND_DIN': 'TextEdit', 'JNS_ATP': 'TextEdit', 'KOND_ATP': 'TextEdit', 'MINUM': 'TextEdit', 'PR_MINUM': 'TextEdit', 'TERANG': 'TextEdit', 'DAYA': 'TextEdit', 'MASAK': 'TextEdit', 'FAS_BAB': 'TextEdit', 'KLOSET': 'TextEdit', 'TINJA': 'TextEdit', 'DISABILITA': 'TextEdit', 'SAKIT': 'TextEdit', 'JUM_SKLH': 'TextEdit', 'BIAYA_SKL': 'TextEdit', 'JML_PTS': 'TextEdit', 'USAHA': 'TextEdit', 'TDK_KRJ': 'TextEdit', 'KLG_TG': 'TextEdit', 'BLT_STUNT': 'TextEdit', 'JALAN': 'TextEdit', 'DRAIN': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'KET': 'TextEdit', 'FOTO': 'ExternalResource', 'USULAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sungai_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'KETERANGAN': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_Jalan_10.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TitikKemiskinanEkstrim_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NIK': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'KEC': 'TextEdit', 'KEL': 'TextEdit', 'KLMN': 'TextEdit', 'TL': 'DateTime', 'HUB': 'TextEdit', 'KAWIN': 'TextEdit', 'USIA_24': 'TextEdit', 'PEK': 'TextEdit', 'PDD': 'TextEdit', 'STAT': 'TextEdit', 'INDX': 'TextEdit', 'BANTU': 'TextEdit', 'PHSIL': 'TextEdit', 'PLUAR': 'TextEdit', 'STA_BGN': 'TextEdit', 'STA_RMH': 'TextEdit', 'RODA_2': 'TextEdit', 'TANGGUNG': 'TextEdit', 'LANTAI': 'TextEdit', 'JNS_DIND': 'TextEdit', 'KOND_DIN': 'TextEdit', 'JNS_ATP': 'TextEdit', 'KOND_ATP': 'TextEdit', 'MINUM': 'TextEdit', 'PR_MINUM': 'TextEdit', 'TERANG': 'TextEdit', 'DAYA': 'TextEdit', 'MASAK': 'TextEdit', 'FAS_BAB': 'TextEdit', 'KLOSET': 'TextEdit', 'TINJA': 'TextEdit', 'DISABILITA': 'TextEdit', 'SAKIT': 'TextEdit', 'JUM_SKLH': 'TextEdit', 'N_SKLH': 'TextEdit', 'MDL_SKL': 'TextEdit', 'BIAYA_SKL': 'TextEdit', 'JML_PTS': 'TextEdit', 'USAHA': 'TextEdit', 'TDK_KRJ': 'TextEdit', 'KLG_TG': 'TextEdit', 'BLT_STUNT': 'TextEdit', 'JALAN': 'TextEdit', 'DRAIN': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NO_ID': 'TextEdit', 'NO_FORM': 'TextEdit', 'KET': 'TextEdit', 'SURV': 'TextEdit', 'FOTO': 'ExternalResource', 'NO_LEGEN': 'TextEdit', 'USULAN': 'TextEdit', });
lyr_PendidikanMulyaharja_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NIK': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'KEC': 'TextEdit', 'KEL': 'TextEdit', 'KLMN': 'TextEdit', 'TL': 'DateTime', 'HUB': 'TextEdit', 'KAWIN': 'TextEdit', 'USIA_24': 'TextEdit', 'PEK': 'TextEdit', 'PDD': 'TextEdit', 'STAT': 'TextEdit', 'INDX': 'TextEdit', 'BANTU': 'TextEdit', 'PHSIL': 'TextEdit', 'PLUAR': 'TextEdit', 'STA_BGN': 'TextEdit', 'STA_RMH': 'TextEdit', 'RODA_2': 'TextEdit', 'TANGGUNG': 'TextEdit', 'LANTAI': 'TextEdit', 'JNS_DIND': 'TextEdit', 'KOND_DIN': 'TextEdit', 'JNS_ATP': 'TextEdit', 'KOND_ATP': 'TextEdit', 'MINUM': 'TextEdit', 'PR_MINUM': 'TextEdit', 'TERANG': 'TextEdit', 'DAYA': 'TextEdit', 'MASAK': 'TextEdit', 'FAS_BAB': 'TextEdit', 'KLOSET': 'TextEdit', 'TINJA': 'TextEdit', 'DISABILITA': 'TextEdit', 'SAKIT': 'TextEdit', 'JUM_SKLH': 'TextEdit', 'N_SKLH': 'TextEdit', 'MDL_SKL': 'TextEdit', 'BIAYA_SKL': 'TextEdit', 'JML_PTS': 'TextEdit', 'USAHA': 'TextEdit', 'TDK_KRJ': 'TextEdit', 'KLG_TG': 'TextEdit', 'BLT_STUNT': 'TextEdit', 'JALAN': 'TextEdit', 'DRAIN': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NO_ID': 'TextEdit', 'NO_FORM': 'TextEdit', 'KET': 'TextEdit', 'SURV': 'TextEdit', 'FOTO': 'TextEdit', 'NO_LEGEN': 'TextEdit', 'USULAN': 'TextEdit', });
lyr_AdministrasiKotaBogor_1.set('fieldLabels', {'KECAMATAN': 'no label', });
lyr_SebaranKemiskinanKota_2.set('fieldLabels', {'KECAMATAN': 'no label', 'JML_KK': 'no label', });
lyr_SebaranKemiskinanKelurahan_3.set('fieldLabels', {'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'SUMBER': 'no label', 'JML_KK': 'no label', 'Kelas': 'no label', });
lyr_SebaranEHRA_4.set('fieldLabels', {'OBJECTID': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'K_CEPAT': 'no label', 'K_EHRA': 'no label', 'WP': 'no label', 'L_2014': 'no label', 'L_2020': 'no label', 'L_SELISIH': 'no label', });
lyr_SebaranKawasanKumuh_5.set('fieldLabels', {'NAMA_KAWAS': 'no label', 'NAMA_RT': 'no label', 'LUAS_HA_OK': 'no label', });
lyr_AdministrasiKelurahanMulyaharja_6.set('fieldLabels', {'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'X': 'no label', 'Y': 'no label', 'Luas_Area': 'no label', });
lyr_BangunanKelurahanMulyaharja_7.set('fieldLabels', {'Id': 'no label', });
lyr_BangunanKemiskinanEkstrim_8.set('fieldLabels', {'NIK': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'RT': 'inline label - always visible', 'RW': 'inline label - always visible', 'KEC': 'inline label - always visible', 'KEL': 'inline label - always visible', 'KLMN': 'inline label - always visible', 'TL': 'inline label - always visible', 'HUB': 'inline label - always visible', 'KAWIN': 'inline label - always visible', 'USIA_24': 'inline label - always visible', 'PEK': 'inline label - always visible', 'PDD': 'inline label - always visible', 'INDX': 'inline label - always visible', 'BANTU': 'inline label - always visible', 'PHSIL': 'inline label - always visible', 'PLUAR': 'inline label - always visible', 'STA_BGN': 'inline label - always visible', 'STA_RMH': 'inline label - always visible', 'RODA_2': 'inline label - always visible', 'TANGGUNG': 'inline label - always visible', 'LANTAI': 'inline label - always visible', 'JNS_DIND': 'inline label - always visible', 'KOND_DIN': 'inline label - always visible', 'JNS_ATP': 'inline label - always visible', 'KOND_ATP': 'inline label - always visible', 'MINUM': 'inline label - always visible', 'PR_MINUM': 'inline label - always visible', 'TERANG': 'inline label - always visible', 'DAYA': 'inline label - always visible', 'MASAK': 'inline label - always visible', 'FAS_BAB': 'inline label - always visible', 'KLOSET': 'inline label - always visible', 'TINJA': 'inline label - always visible', 'DISABILITA': 'inline label - always visible', 'SAKIT': 'inline label - always visible', 'JUM_SKLH': 'inline label - always visible', 'BIAYA_SKL': 'inline label - always visible', 'JML_PTS': 'inline label - always visible', 'USAHA': 'inline label - always visible', 'TDK_KRJ': 'inline label - always visible', 'KLG_TG': 'inline label - always visible', 'BLT_STUNT': 'inline label - always visible', 'JALAN': 'inline label - always visible', 'DRAIN': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'KET': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'USULAN': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Sungai_9.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'KETERANGAN': 'no label', 'LUAS_HA': 'no label', });
lyr_Jalan_10.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TitikKemiskinanEkstrim_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'NIK': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'RT': 'inline label - always visible', 'RW': 'inline label - always visible', 'KEC': 'inline label - always visible', 'KEL': 'inline label - always visible', 'KLMN': 'inline label - always visible', 'TL': 'inline label - always visible', 'HUB': 'inline label - always visible', 'KAWIN': 'inline label - always visible', 'USIA_24': 'inline label - always visible', 'PEK': 'inline label - always visible', 'PDD': 'inline label - always visible', 'STAT': 'inline label - always visible', 'INDX': 'inline label - always visible', 'BANTU': 'inline label - always visible', 'PHSIL': 'inline label - always visible', 'PLUAR': 'inline label - always visible', 'STA_BGN': 'inline label - always visible', 'STA_RMH': 'inline label - always visible', 'RODA_2': 'inline label - always visible', 'TANGGUNG': 'inline label - always visible', 'LANTAI': 'inline label - always visible', 'JNS_DIND': 'inline label - always visible', 'KOND_DIN': 'inline label - always visible', 'JNS_ATP': 'inline label - always visible', 'KOND_ATP': 'inline label - always visible', 'MINUM': 'inline label - always visible', 'PR_MINUM': 'inline label - always visible', 'TERANG': 'inline label - always visible', 'DAYA': 'inline label - always visible', 'MASAK': 'inline label - always visible', 'FAS_BAB': 'inline label - always visible', 'KLOSET': 'inline label - always visible', 'TINJA': 'inline label - always visible', 'DISABILITA': 'inline label - always visible', 'SAKIT': 'inline label - always visible', 'JUM_SKLH': 'inline label - always visible', 'N_SKLH': 'inline label - always visible', 'MDL_SKL': 'inline label - always visible', 'BIAYA_SKL': 'inline label - always visible', 'JML_PTS': 'inline label - always visible', 'USAHA': 'inline label - always visible', 'TDK_KRJ': 'inline label - always visible', 'KLG_TG': 'inline label - always visible', 'BLT_STUNT': 'inline label - always visible', 'JALAN': 'inline label - always visible', 'DRAIN': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'NO_ID': 'hidden field', 'NO_FORM': 'hidden field', 'KET': 'inline label - always visible', 'SURV': 'hidden field', 'FOTO': 'inline label - always visible', 'NO_LEGEN': 'hidden field', 'USULAN': 'inline label - always visible', });
lyr_PendidikanMulyaharja_12.set('fieldLabels', {'OBJECTID': 'no label', 'NIK': 'no label', 'NAMA': 'no label', 'ALAMAT': 'no label', 'RT': 'no label', 'RW': 'no label', 'KEC': 'no label', 'KEL': 'no label', 'KLMN': 'no label', 'TL': 'no label', 'HUB': 'no label', 'KAWIN': 'no label', 'USIA_24': 'no label', 'PEK': 'no label', 'PDD': 'no label', 'STAT': 'no label', 'INDX': 'no label', 'BANTU': 'no label', 'PHSIL': 'no label', 'PLUAR': 'no label', 'STA_BGN': 'no label', 'STA_RMH': 'no label', 'RODA_2': 'no label', 'TANGGUNG': 'no label', 'LANTAI': 'no label', 'JNS_DIND': 'no label', 'KOND_DIN': 'no label', 'JNS_ATP': 'no label', 'KOND_ATP': 'no label', 'MINUM': 'no label', 'PR_MINUM': 'no label', 'TERANG': 'no label', 'DAYA': 'no label', 'MASAK': 'no label', 'FAS_BAB': 'no label', 'KLOSET': 'no label', 'TINJA': 'no label', 'DISABILITA': 'no label', 'SAKIT': 'no label', 'JUM_SKLH': 'no label', 'N_SKLH': 'no label', 'MDL_SKL': 'no label', 'BIAYA_SKL': 'no label', 'JML_PTS': 'no label', 'USAHA': 'no label', 'TDK_KRJ': 'no label', 'KLG_TG': 'no label', 'BLT_STUNT': 'no label', 'JALAN': 'no label', 'DRAIN': 'no label', 'X': 'no label', 'Y': 'no label', 'NO_ID': 'no label', 'NO_FORM': 'no label', 'KET': 'no label', 'SURV': 'no label', 'FOTO': 'no label', 'NO_LEGEN': 'no label', 'USULAN': 'no label', });
lyr_PendidikanMulyaharja_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});