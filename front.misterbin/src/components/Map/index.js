import React, {useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JlYXRlcmRvZ2ZyIiwiYSI6ImNrdzMxaThqNGJ1bDUycHF3ZWl5ejlxcmkifQ.owRyRg_BGO39ft8ETKVT2w';

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(1.4573); //Toulouse_Lng = (1.4573)
    const [lat, setLat] = useState(43.6469); //Toulouse_Lat = (43.6469)
    const [zoom, setZoom] = useState(7.88); //Toulouse_Zoom = (7.88)

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        });
        /*map.current.on('click', (event) => {
            const features = map.current.queryRenderedFeatures(event.point, {
                layers: ['Benne à Verre']
            });
            if (!features.length) {
                return;
            }
            const feature = feature[0];
            const popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML(
                    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                )
                .addTo(map);
        });*/
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="mapcontainer" />
        </div>
    );
};
