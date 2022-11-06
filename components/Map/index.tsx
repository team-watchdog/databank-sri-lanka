import { FunctionComponent, useState, useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// types
import { GeoJSONPoint } from "../../types/geo.types";

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';

// constants
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ? process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN : "";

interface MapProps{
    boundingBox?: [number, number, number, number];
    markers: GeoJSONPoint[];
}

const Map: FunctionComponent<MapProps> = (props) => {
    const { markers, boundingBox } = props;

    const mapContainer = useRef(null);
    const map = useRef<unknown>(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        if (!mapContainer.current) return;

        const tmpMap = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            bounds: boundingBox,
            zoom: zoom
        });

        const marker = new mapboxgl.Marker({
            color: '#F84C4C' // color it red
        });

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });

        tmpMap.addControl(
            new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
            })
        , 'top-left');

        tmpMap.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
                marker: false,
            })
        , 'top-right');


        // Add markers to the map.
        for (const marker of markers) {
            // Add markers to the map.
            new mapboxgl.Marker()
                .setLngLat(marker.geometry.coordinates)
                .addTo(tmpMap);
        }
        
        map.current = tmpMap;
    });

    return (
        <div ref={mapContainer} className="w-full h-full">

        </div>
    )
}

export default Map;