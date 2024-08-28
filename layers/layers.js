var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Hoteles_Google_Otros_2 = new ol.format.GeoJSON();
var features_Hoteles_Google_Otros_2 = format_Hoteles_Google_Otros_2.readFeatures(json_Hoteles_Google_Otros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_Google_Otros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_Google_Otros_2.addFeatures(features_Hoteles_Google_Otros_2);cluster_Hoteles_Google_Otros_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hoteles_Google_Otros_2
});
var lyr_Hoteles_Google_Otros_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteles_Google_Otros_2, 
                style: style_Hoteles_Google_Otros_2,
                popuplayertitle: "Hoteles_Google_Otros",
                interactive: true,
                title: '<img src="styles/legend/Hoteles_Google_Otros_2.png" /> Hoteles_Google_Otros'
            });
var format_Hoteles_Google_3_starhotel_3 = new ol.format.GeoJSON();
var features_Hoteles_Google_3_starhotel_3 = format_Hoteles_Google_3_starhotel_3.readFeatures(json_Hoteles_Google_3_starhotel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_Google_3_starhotel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_Google_3_starhotel_3.addFeatures(features_Hoteles_Google_3_starhotel_3);cluster_Hoteles_Google_3_starhotel_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hoteles_Google_3_starhotel_3
});
var lyr_Hoteles_Google_3_starhotel_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteles_Google_3_starhotel_3, 
                style: style_Hoteles_Google_3_starhotel_3,
                popuplayertitle: "Hoteles_Google_3_star hotel",
                interactive: true,
                title: '<img src="styles/legend/Hoteles_Google_3_starhotel_3.png" /> Hoteles_Google_3_star hotel'
            });
var format_Hoteles_google_4_Starhotel_4 = new ol.format.GeoJSON();
var features_Hoteles_google_4_Starhotel_4 = format_Hoteles_google_4_Starhotel_4.readFeatures(json_Hoteles_google_4_Starhotel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_google_4_Starhotel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_google_4_Starhotel_4.addFeatures(features_Hoteles_google_4_Starhotel_4);cluster_Hoteles_google_4_Starhotel_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hoteles_google_4_Starhotel_4
});
var lyr_Hoteles_google_4_Starhotel_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteles_google_4_Starhotel_4, 
                style: style_Hoteles_google_4_Starhotel_4,
                popuplayertitle: "Hoteles_google_4_Star hotel",
                interactive: true,
                title: '<img src="styles/legend/Hoteles_google_4_Starhotel_4.png" /> Hoteles_google_4_Star hotel'
            });
var format_Hoteles_Google_5_starhotel_5 = new ol.format.GeoJSON();
var features_Hoteles_Google_5_starhotel_5 = format_Hoteles_Google_5_starhotel_5.readFeatures(json_Hoteles_Google_5_starhotel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_Google_5_starhotel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_Google_5_starhotel_5.addFeatures(features_Hoteles_Google_5_starhotel_5);cluster_Hoteles_Google_5_starhotel_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hoteles_Google_5_starhotel_5
});
var lyr_Hoteles_Google_5_starhotel_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteles_Google_5_starhotel_5, 
                style: style_Hoteles_Google_5_starhotel_5,
                popuplayertitle: "Hoteles_Google_5_star hotel",
                interactive: true,
                title: '<img src="styles/legend/Hoteles_Google_5_starhotel_5.png" /> Hoteles_Google_5_star hotel'
            });
var format_Hoteles_Google_6 = new ol.format.GeoJSON();
var features_Hoteles_Google_6 = format_Hoteles_Google_6.readFeatures(json_Hoteles_Google_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_Google_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_Google_6.addFeatures(features_Hoteles_Google_6);cluster_Hoteles_Google_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hoteles_Google_6
});
var lyr_Hoteles_Google_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteles_Google_6, 
                style: style_Hoteles_Google_6,
                popuplayertitle: "Hoteles_Google",
                interactive: true,
                title: '<img src="styles/legend/Hoteles_Google_6.png" /> Hoteles_Google'
            });
var format_0a5personas_7 = new ol.format.GeoJSON();
var features_0a5personas_7 = format_0a5personas_7.readFeatures(json_0a5personas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0a5personas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0a5personas_7.addFeatures(features_0a5personas_7);cluster_0a5personas_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_0a5personas_7
});
var lyr_0a5personas_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_0a5personas_7, 
                style: style_0a5personas_7,
                popuplayertitle: "0 a 5 personas",
                interactive: true,
                title: '<img src="styles/legend/0a5personas_7.png" /> 0 a 5 personas'
            });
var format_6a10personas_8 = new ol.format.GeoJSON();
var features_6a10personas_8 = format_6a10personas_8.readFeatures(json_6a10personas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6a10personas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6a10personas_8.addFeatures(features_6a10personas_8);cluster_6a10personas_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_6a10personas_8
});
var lyr_6a10personas_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_6a10personas_8, 
                style: style_6a10personas_8,
                popuplayertitle: "6 a 10 personas",
                interactive: true,
                title: '<img src="styles/legend/6a10personas_8.png" /> 6 a 10 personas'
            });
var format_11a30personas_9 = new ol.format.GeoJSON();
var features_11a30personas_9 = format_11a30personas_9.readFeatures(json_11a30personas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11a30personas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11a30personas_9.addFeatures(features_11a30personas_9);cluster_11a30personas_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_11a30personas_9
});
var lyr_11a30personas_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_11a30personas_9, 
                style: style_11a30personas_9,
                popuplayertitle: "11 a 30 personas",
                interactive: true,
                title: '<img src="styles/legend/11a30personas_9.png" /> 11 a 30 personas'
            });
var format_31a50personas_10 = new ol.format.GeoJSON();
var features_31a50personas_10 = format_31a50personas_10.readFeatures(json_31a50personas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31a50personas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31a50personas_10.addFeatures(features_31a50personas_10);cluster_31a50personas_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_31a50personas_10
});
var lyr_31a50personas_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_31a50personas_10, 
                style: style_31a50personas_10,
                popuplayertitle: "31 a 50 personas",
                interactive: true,
                title: '<img src="styles/legend/31a50personas_10.png" /> 31 a 50 personas'
            });
var format_51a100personas_11 = new ol.format.GeoJSON();
var features_51a100personas_11 = format_51a100personas_11.readFeatures(json_51a100personas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51a100personas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51a100personas_11.addFeatures(features_51a100personas_11);cluster_51a100personas_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_51a100personas_11
});
var lyr_51a100personas_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_51a100personas_11, 
                style: style_51a100personas_11,
                popuplayertitle: "51 a 100 personas",
                interactive: true,
                title: '<img src="styles/legend/51a100personas_11.png" /> 51 a 100 personas'
            });
var format_101a250personas_12 = new ol.format.GeoJSON();
var features_101a250personas_12 = format_101a250personas_12.readFeatures(json_101a250personas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101a250personas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101a250personas_12.addFeatures(features_101a250personas_12);cluster_101a250personas_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_101a250personas_12
});
var lyr_101a250personas_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_101a250personas_12, 
                style: style_101a250personas_12,
                popuplayertitle: "101 a 250 personas",
                interactive: true,
                title: '<img src="styles/legend/101a250personas_12.png" /> 101 a 250 personas'
            });
var format_251ymspersonas_13 = new ol.format.GeoJSON();
var features_251ymspersonas_13 = format_251ymspersonas_13.readFeatures(json_251ymspersonas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_251ymspersonas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_251ymspersonas_13.addFeatures(features_251ymspersonas_13);cluster_251ymspersonas_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_251ymspersonas_13
});
var lyr_251ymspersonas_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_251ymspersonas_13, 
                style: style_251ymspersonas_13,
                popuplayertitle: "251 y más personas",
                interactive: true,
                title: '<img src="styles/legend/251ymspersonas_13.png" /> 251 y más personas'
            });
var format_Hoteles_DENUES_14 = new ol.format.GeoJSON();
var features_Hoteles_DENUES_14 = format_Hoteles_DENUES_14.readFeatures(json_Hoteles_DENUES_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_DENUES_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_DENUES_14.addFeatures(features_Hoteles_DENUES_14);cluster_Hoteles_DENUES_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hoteles_DENUES_14
});
var lyr_Hoteles_DENUES_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteles_DENUES_14, 
                style: style_Hoteles_DENUES_14,
                popuplayertitle: "Hoteles_DENUES",
                interactive: true,
                title: '<img src="styles/legend/Hoteles_DENUES_14.png" /> Hoteles_DENUES'
            });
var format_ResidenceManagement_15 = new ol.format.GeoJSON();
var features_ResidenceManagement_15 = format_ResidenceManagement_15.readFeatures(json_ResidenceManagement_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidenceManagement_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidenceManagement_15.addFeatures(features_ResidenceManagement_15);cluster_ResidenceManagement_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ResidenceManagement_15
});
var lyr_ResidenceManagement_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ResidenceManagement_15, 
                style: style_ResidenceManagement_15,
                popuplayertitle: "Residence Management",
                interactive: true,
                title: '<img src="styles/legend/ResidenceManagement_15.png" /> Residence Management'
            });
var format_Property_Management_16 = new ol.format.GeoJSON();
var features_Property_Management_16 = format_Property_Management_16.readFeatures(json_Property_Management_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Property_Management_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Property_Management_16.addFeatures(features_Property_Management_16);cluster_Property_Management_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Property_Management_16
});
var lyr_Property_Management_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Property_Management_16, 
                style: style_Property_Management_16,
                popuplayertitle: "Property_Management",
                interactive: true,
                title: '<img src="styles/legend/Property_Management_16.png" /> Property_Management'
            });
var format_HOA_17 = new ol.format.GeoJSON();
var features_HOA_17 = format_HOA_17.readFeatures(json_HOA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOA_17.addFeatures(features_HOA_17);cluster_HOA_17 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_HOA_17
});
var lyr_HOA_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HOA_17, 
                style: style_HOA_17,
                popuplayertitle: "HOA",
                interactive: true,
                title: '<img src="styles/legend/HOA_17.png" /> HOA'
            });
var format_Viveros_18 = new ol.format.GeoJSON();
var features_Viveros_18 = format_Viveros_18.readFeatures(json_Viveros_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viveros_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viveros_18.addFeatures(features_Viveros_18);cluster_Viveros_18 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Viveros_18
});
var lyr_Viveros_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Viveros_18, 
                style: style_Viveros_18,
                popuplayertitle: "Viveros",
                interactive: true,
                title: '<img src="styles/legend/Viveros_18.png" /> Viveros'
            });
var format_Contratistas_19 = new ol.format.GeoJSON();
var features_Contratistas_19 = format_Contratistas_19.readFeatures(json_Contratistas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contratistas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contratistas_19.addFeatures(features_Contratistas_19);cluster_Contratistas_19 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Contratistas_19
});
var lyr_Contratistas_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Contratistas_19, 
                style: style_Contratistas_19,
                popuplayertitle: "Contratistas",
                interactive: true,
                title: '<img src="styles/legend/Contratistas_19.png" /> Contratistas'
            });
var group_Hoteles = new ol.layer.Group({
                                layers: [lyr_Hoteles_Google_Otros_2,lyr_Hoteles_Google_3_starhotel_3,lyr_Hoteles_google_4_Starhotel_4,lyr_Hoteles_Google_5_starhotel_5,lyr_Hoteles_Google_6,lyr_0a5personas_7,lyr_6a10personas_8,lyr_11a30personas_9,lyr_31a50personas_10,lyr_51a100personas_11,lyr_101a250personas_12,lyr_251ymspersonas_13,lyr_Hoteles_DENUES_14,],
                                fold: "open",
                                title: "Hoteles "});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Hoteles_Google_Otros_2.setVisible(false);lyr_Hoteles_Google_3_starhotel_3.setVisible(false);lyr_Hoteles_google_4_Starhotel_4.setVisible(false);lyr_Hoteles_Google_5_starhotel_5.setVisible(false);lyr_Hoteles_Google_6.setVisible(false);lyr_0a5personas_7.setVisible(false);lyr_6a10personas_8.setVisible(false);lyr_11a30personas_9.setVisible(false);lyr_31a50personas_10.setVisible(false);lyr_51a100personas_11.setVisible(false);lyr_101a250personas_12.setVisible(false);lyr_251ymspersonas_13.setVisible(false);lyr_Hoteles_DENUES_14.setVisible(false);lyr_ResidenceManagement_15.setVisible(false);lyr_Property_Management_16.setVisible(false);lyr_HOA_17.setVisible(false);lyr_Viveros_18.setVisible(false);lyr_Contratistas_19.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,group_Hoteles,lyr_ResidenceManagement_15,lyr_Property_Management_16,lyr_HOA_17,lyr_Viveros_18,lyr_Contratistas_19];
lyr_Hoteles_Google_Otros_2.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Estrellas': 'Estrellas', 'lat': 'lat', 'Long': 'Long', });
lyr_Hoteles_Google_3_starhotel_3.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Estrellas': 'Estrellas', 'lat': 'lat', 'Long': 'Long', });
lyr_Hoteles_google_4_Starhotel_4.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Estrellas': 'Estrellas', 'lat': 'lat', 'Long': 'Long', });
lyr_Hoteles_Google_5_starhotel_5.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Estrellas': 'Estrellas', 'lat': 'lat', 'Long': 'Long', });
lyr_Hoteles_Google_6.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Estrellas': 'Estrellas', 'lat': 'lat', 'Long': 'Long', });
lyr_0a5personas_7.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Importanci': 'Importanci', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_6a10personas_8.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Importanci': 'Importanci', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_11a30personas_9.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Importanci': 'Importanci', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_31a50personas_10.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Importanci': 'Importanci', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_51a100personas_11.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Importanci': 'Importanci', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_101a250personas_12.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Importanci': 'Importanci', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_251ymspersonas_13.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Importanci': 'Importanci', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Hoteles_DENUES_14.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Importanci': 'Importanci', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_ResidenceManagement_15.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Lat': 'Lat', 'Lon': 'Lon', });
lyr_Property_Management_16.set('fieldAliases', {'Fuente': 'Fuente', 'Google Map': 'Google Map', 'Ciudad': 'Ciudad', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'telefono': 'telefono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_HOA_17.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Map': 'Google Map', 'Nombre de': 'Nombre de', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Viveros_18.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'GoogleMaps': 'GoogleMaps', 'Nombre de': 'Nombre de', 'Razon Soci': 'Razon Soci', 'Direccion': 'Direccion', 'Direccio_1': 'Direccio_1', 'Telefono': 'Telefono', 'Email': 'Email', 'Pagina WEB': 'Pagina WEB', 'Personal': 'Personal', 'Fecha de A': 'Fecha de A', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_Contratistas_19.set('fieldAliases', {'Datos': 'Datos', 'Municipio': 'Municipio', 'Link_Googl': 'Link_Googl', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Pagina Web': 'Pagina Web', 'Comentario': 'Comentario', 'email': 'email', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Hoteles_Google_Otros_2.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Estrellas': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Hoteles_Google_3_starhotel_3.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Estrellas': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Hoteles_google_4_Starhotel_4.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Estrellas': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Hoteles_Google_5_starhotel_5.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Estrellas': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Hoteles_Google_6.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Estrellas': 'TextEdit', 'lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_0a5personas_7.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Importanci': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_6a10personas_8.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Importanci': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_11a30personas_9.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Importanci': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_31a50personas_10.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Importanci': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_51a100personas_11.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Importanci': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_101a250personas_12.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Importanci': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_251ymspersonas_13.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Importanci': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Hoteles_DENUES_14.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Importanci': 'TextEdit', 'Estrellas': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_ResidenceManagement_15.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', });
lyr_Property_Management_16.set('fieldImages', {'Fuente': 'TextEdit', 'Google Map': 'TextEdit', 'Ciudad': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'telefono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_HOA_17.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Map': 'TextEdit', 'Nombre de': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Viveros_18.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Nombre de': 'TextEdit', 'Razon Soci': 'TextEdit', 'Direccion': 'TextEdit', 'Direccio_1': 'TextEdit', 'Telefono': 'TextEdit', 'Email': 'TextEdit', 'Pagina WEB': 'TextEdit', 'Personal': 'TextEdit', 'Fecha de A': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Contratistas_19.set('fieldImages', {'Datos': 'TextEdit', 'Municipio': 'TextEdit', 'Link_Googl': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Comentario': 'TextEdit', 'email': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Hoteles_Google_Otros_2.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'header label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'Long': 'no label', });
lyr_Hoteles_Google_3_starhotel_3.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'header label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'Long': 'no label', });
lyr_Hoteles_google_4_Starhotel_4.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', });
lyr_Hoteles_Google_5_starhotel_5.set('fieldLabels', {'Fuente': 'header label - always visible', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', });
lyr_Hoteles_Google_6.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', });
lyr_0a5personas_7.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_6a10personas_8.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_11a30personas_9.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_31a50personas_10.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_51a100personas_11.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_101a250personas_12.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_251ymspersonas_13.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_Hoteles_DENUES_14.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_ResidenceManagement_15.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lon': 'inline label - visible with data', });
lyr_Property_Management_16.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'telefono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_HOA_17.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Map': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', });
lyr_Viveros_18.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'GoogleMaps': 'inline label - visible with data', 'Nombre de': 'inline label - visible with data', 'Razon Soci': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Direccio_1': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Pagina WEB': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Fecha de A': 'inline label - visible with data', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_Contratistas_19.set('fieldLabels', {'Datos': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Link_Googl': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Comentario': 'inline label - visible with data', 'email': 'inline label - visible with data', 'Latitud': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Contratistas_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});