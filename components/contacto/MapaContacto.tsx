'use client';

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

export default function MapaContacto() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // Inicializa el mapa solo una vez
    
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-76.924, -12.222], // Villa El Salvador
        zoom: 14
      });

      // Agregar un marcador en la ubicación
      new mapboxgl.Marker({ color: '#01219C' }) // Color azul Moy
        .setLngLat([-76.924, -12.222])
        .addTo(map.current);
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-200 min-h-[450px]">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
