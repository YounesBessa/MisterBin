import React, {useRef, useEffect, useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JlYXRlcmRvZ2ZyIiwiYSI6ImNrdzMxaThqNGJ1bDUycHF3ZWl5ejlxcmkifQ.owRyRg_BGO39ft8ETKVT2w';


export default function Map(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(1.0806);
    const [lat, setLat] = useState(49.4448);
    const [zoom, setZoom] = useState(11.02);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
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
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} {/* use this for debug, comment it when done. */}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};