let latitude=25.594095,longitude=85.13756;

mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map=new mapboxgl.Map({
       container:'map',
       style:'mapbox://styles/mapbox/streets-v11',
       center:[longitude,latitude],
       zoom:0
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
);

map.addControl(
    new MapboxDirections({
        accesTpken:mapboxgl.accessToken
    }),
    'top-left'
);