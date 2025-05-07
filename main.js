var map = L.map('map').setView([17.401444,-90.087901], 3);
        L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=GR5MlDbYiSqoJ7ml9Opj', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }).addTo(map);
//adds markers with the img URL 
        var marker3 = L.marker([40.787274,14.119263], {
                draggable: false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>The Boot of Italy</h1><p>This is the Boot of Italy</p><img src= "https://community.esri.com/t5/image/serverpage/image-id/106028i5A3DA95D9C08D3CA/image-dimensions/543x201?v=v2" style="width:600px">')

            var marker2 = L.marker([36.217992, -113.101576], {
                draggable: false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Grand Canyon</h1><p>This is the Grand Canyon</p><img src= "https://community.esri.com/t5/image/serverpage/image-id/106031i8D3ABF0F067C89CC/image-dimensions/575x160?v=v2" style="width:600px">')



            var marker1 = L.marker([44.484991,-110.359040], {
                draggable: false,
                title: "Hover Text"

            }).addTo(map).bindPopup('<h1>Yellowstone</h1><p>This is the area of Yellowstone Lake</p><img src= "https://community.esri.com/t5/image/serverpage/image-id/106033iE3D0CAF1B9BB155D/image-dimensions/535x202?v=v2" style="width:600px">')


            var marker4 = L.marker([41.888601,12.479839], {
                draggable: false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Image of Rome at Night</h1><p>This is the area of Rome at Night</p><img src= "https://community.esri.com/t5/image/serverpage/image-id/106035i26145F0B2BFC8846/image-dimensions/2500?v=v2&px=-1" style="width:600px">')

            var marker5 = L.marker([19.630243,-155.557252], {
                draggable: false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Image of the Hawaiian Islands</h1><p>This is the area of the Hawaiian Islands</p><img src="https://community.esri.com/t5/image/serverpage/image-id/106029i7DB59F8E6FEA909E/image-dimensions/2500?v=v2&px=-1" style="width:600px">')

            var marker6 = L.marker([20.757826,-88.962250], {
                draggable:false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Image of the Yucatan, Mexico</h1><p>This is the area of the Yucatan, Mexico</p><img src="https://community.esri.com/t5/image/serverpage/image-id/106032iDC6EC2504E6DAFF2/image-dimensions/2000?v=v2&px=-1" style="width:600px">')

            var marker7 = L.marker([22.366904,31.626949], {
                draggable:false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Image of the Abu Simbel Temple, Egypt</h1><p>This is the area of the Abu Simbel Temple, Egypt</p><img src="https://community.esri.com/t5/image/serverpage/image-id/106034i55E28B30D15C415A/image-dimensions/2000?v=v2&px=-1" style="width:600px">')

            var marker8 = L.marker([29.970996,31.128502], {
                draggable: false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Image of the Pyramids of Egypt, Egypt</h1><p>This is the area of the Pyramids of Egypt, Egypt</p><img src="https://community.esri.com/t5/image/serverpage/image-id/106030iE626A9C41040BBE4/image-dimensions/2000?v=v2&px=-1" style="width:600px">')

            var marker9 = L.marker([28.136586,31.647950], {
                draggable: false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Image of the Nile River, Egypt</p><img src="https://community.esri.com/t5/image/serverpage/image-id/106027iB51747A2903158AF/image-dimensions/2000?v=v2&px=-1" style="width:400px">')
            
            var marker10 = L.marker([44.944713,-110.621567], {
                draggable: false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Somewhere in Yellowstone</h1><p>Some where in Yellowstone</p><img src="https://community.esri.com/t5/image/serverpage/image-id/122679iE53767CC13271F8F/image-dimensions/2000?v=v2&px=-1" style="width:500px">')

            var marker11 = L.marker([41.880127,-87.624436], {
                draggable: false,
                title: "Hover Text"
            }).addTo(map).bindPopup('<h1>Somewhere in Chicago</h1><p>In Chicago</p><img src="https://community.esri.com/t5/image/serverpage/image-id/104590iD76887926C0E74AF/image-size/large/is-moderation-mode/true?v=v2&px=999" style="width:200px">')


         

            
//adding javacript geojson into the map.
            L.geoJSON(countries3).addTo(map);
           

//function to returen colors that fall within the range of population
            function getColor(d) {
                return d > 100000000 ? '#800026' :
                d > 50000000  ? '#BD0026' :
                d > 20000000  ? '#E31A1C' :
                d > 10000000  ? '#FC4E2A' :
                d > 5000000   ? '#FD8D3C' :
                d > 2000000   ? '#FEB24C' :
                d > 1000000   ? '#FED976' :
                '#FFEDA0';
            }

            function style(feature) {
                return {
                    fillColor: getColor(feature.properties.POP_EST),//geojson feature properties POP_EST style.
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                };
            }
//adding style to the geoJson
L.geoJson(countries3, {style: style}).addTo(map);



function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
}

info.update(layer.feature.properties);
    
}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

var geojson;
// ... our listeners
geojson = L.geoJson(countries3);


function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(countries3, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);


var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>World Countries Population Density</h4>' +  (props ?
        '<b>' + props.ADMIN + '</b><br />' + props.POP_EST + ' people '
        : 'Hover over a country');
};

info.addTo(map);

//positions the legend
var legend = L.control({position:'bottomright'});

legend.onAdd = function (map) {
    
    var div = L.DomUtil.create('div', 'info legend'),
        grades = ["<h1>Population<h1>",0, "1,000,000", "2,000,000", "5,000,000","10,000,000", "20,000,000", "50,000,000", "100,000,000"],
        labels = [];

    //loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

