import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapLocation({ latitude, longitude }) {
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        // Initialize the map and set the view to the provided latitude and longitude
        const map = L.map(mapRef.current).setView([latitude, longitude], 13);

        // Add the OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);

        // Define a custom icon for the marker
        const icon = L.icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            shadowSize: [41, 41],
        });

        // Add a marker at the specified location with the custom icon
        const marker = L.marker([latitude, longitude], { icon }).addTo(map);
        // L.marker([latitude + 2, longitude + 2], { icon }).addTo(map);
        // You need to rite a code such that it centered the main marker but also shows the other markers by afjusting zoom level
        markerRef.current = marker;


        // Return a cleanup function that removes the marker and map
        return () => {
            map.remove();
            marker.remove();
        };
    }, [latitude, longitude]);

    // Set the map container size using CSS

    return (
        <div ref={mapRef} className='Map'></div>
    );
}

export default MapLocation;
