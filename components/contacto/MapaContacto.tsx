'use client';

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

// Configurar token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

interface Sede {
  id: string;
  name: string;
  concept: string;
  address: string;
  phone: string;
  hours: string;
  email: string;
  image: string;
  coordinates: [number, number]; // [lng, lat]
}

const SEDES: Sede[] = [
  {
    id: 'san-isidro',
    name: 'OFICINA SAN ISIDRO',
    concept: 'Servicios como mudanzas y servicios logísticos individuales.',
    address: 'Raymundo Morales de la Torre 296, Distrito de San Isidro',
    phone: '01 287 2434 / 99 832 1531',
    hours: 'Lun-Sáb 9 am - 6 pm',
    email: 'mudanzas@inversionesmoy.com.pe',
    image: '/images/services/gestion-logistica/repartidor.png',
    coordinates: [-77.0271, -12.0912]
  },
  {
    id: 'principal',
    name: 'OFICINA PRINCIPAL',
    concept: 'Centro de operaciones y almacenaje sede Sur.',
    address: 'Calle 6, Mz K, Sub lote 1A, Villa El Salvador',
    phone: '01 287 2434 / 99 832 1531',
    hours: 'Lun-Sáb 9 am - 6 pm',
    email: 'mvelasquez@inversionesmoy.com.pe',
    image: '/images/nosotros_0.png',
    coordinates: [-76.924, -12.222]
  },
  {
    id: 'base-norte',
    name: 'BASE NORTE',
    concept: 'Centro de operaciones Lima Norte',
    address: 'Sta. Margarita 256, San Martín de Porres',
    phone: '01 287 2434 / 99 832 1531',
    hours: 'Lun-Sáb 9 am - 6 pm',
    email: 'mvelasquez@inversionesmoy.com.pe',
    image: '/images/servicios_1.jpg',
    coordinates: [-77.0803, -12.0239]
  }
];

export default function MapaContacto() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const [selectedSedeId, setSelectedSedeId] = useState<string | null>('san-isidro');

  // Inicialización de mapa y marcadores
  useEffect(() => {
    if (map.current) return; // Inicializa el mapa solo una vez
    
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11', // Estilo claro/gris premium
        center: [-76.924, -12.222],
        zoom: 11
      });

      // Agregar controles de navegación (zoom +/-)
      map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right');

      // Crear bounds para ajustar la vista del mapa e incluir todas las sedes
      const bounds = new mapboxgl.LngLatBounds();

      // Agregar marcadores para cada sede
      SEDES.forEach((sede) => {
        bounds.extend(sede.coordinates);

        // Crear elemento DOM personalizado para el pin del marcador
        const el = document.createElement('div');
        el.id = `marker-${sede.id}`;
        el.className = 'cursor-pointer';
        
        // SVG del marcador (Pin) con color dinámico mediante style
        el.innerHTML = `
          <div class="marker-pin-container transition-all duration-300 transform hover:scale-115 drop-shadow-md">
            <svg width="34" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C7.16 0 0 7.16 0 16C0 28 16 42 16 42C16 42 32 28 32 16C32 7.16 24.84 0 16 0ZM16 22C12.69 22 10 19.31 10 16C10 12.69 12.69 10 16 10C19.31 10 22 12.69 22 16C22 19.31 19.31 22 16 22Z" fill="currentColor"/>
            </svg>
          </div>
        `;

        // Evento de clic en el marcador
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          setSelectedSedeId(sede.id);
          map.current?.flyTo({
            center: sede.coordinates,
            zoom: 14.5,
            duration: 1500,
            essential: true
          });
        });

        // Crear el Marker en Mapbox
        const marker = new mapboxgl.Marker({
          element: el,
          anchor: 'bottom'
        })
          .setLngLat(sede.coordinates)
          .addTo(map.current!);

        // Guardar referencia
        markersRef.current[sede.id] = marker;
      });

      // Ajustar encuadre de la cámara para que queden visibles las 3 sedes
      map.current.fitBounds(bounds, {
        padding: { top: 70, bottom: 70, left: 70, right: 70 },
        maxZoom: 13,
        duration: 1000
      });

      // Cerrar tarjeta al hacer clic en cualquier parte vacía del mapa
      map.current.on('click', () => {
        setSelectedSedeId(null);
        // Volver a encuadrar a todas las sedes
        const newBounds = new mapboxgl.LngLatBounds();
        SEDES.forEach((s) => newBounds.extend(s.coordinates));
        map.current?.fitBounds(newBounds, {
          padding: { top: 70, bottom: 70, left: 70, right: 70 },
          maxZoom: 13,
          duration: 1200
        });
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Efecto para actualizar los colores de los pines en función del marcador seleccionado
  useEffect(() => {
    SEDES.forEach((sede) => {
      const el = document.getElementById(`marker-${sede.id}`);
      if (el) {
        const container = el.querySelector('.marker-pin-container') as HTMLDivElement | null;
        const svg = el.querySelector('svg');
        if (svg) {
          if (sede.id === selectedSedeId) {
            svg.style.color = '#EAB308'; // Amarillo/dorado para el activo
            if (container) {
              container.style.transform = 'scale(1.25)';
              container.classList.remove('hover:scale-115');
            }
            el.style.zIndex = '50';
          } else {
            svg.style.color = '#000000'; // Negro/oscuro para los inactivos (según imagen)
            if (container) {
              container.style.transform = 'scale(1)';
              container.classList.add('hover:scale-115');
            }
            el.style.zIndex = '10';
          }
        }
      }
    });
  }, [selectedSedeId]);

  // Manejar el cierre manual de la tarjeta flotante
  const handleCloseCard = () => {
    setSelectedSedeId(null);
    if (map.current) {
      const bounds = new mapboxgl.LngLatBounds();
      SEDES.forEach((sede) => bounds.extend(sede.coordinates));
      map.current.fitBounds(bounds, {
        padding: { top: 70, bottom: 70, left: 70, right: 70 },
        maxZoom: 13,
        duration: 1200
      });
    }
  };

  const activeSede = SEDES.find((s) => s.id === selectedSedeId);

  return (
    <div className="w-full h-full relative">
      {/* Contenedor del mapa */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Tarjeta flotante interactiva de la sede seleccionada */}
      {activeSede && (
        <div className="absolute md:top-4 md:left-4 md:bottom-auto bottom-4 left-4 right-4 md:right-auto z-[60] w-auto md:w-88 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[85%] md:max-h-[calc(100%-2rem)] transition-all duration-300 animate-fadeIn">
          {/* Foto de la sede */}
          <div className="w-full h-36 md:h-40 relative flex-shrink-0">
            <img 
              src={activeSede.image} 
              alt={activeSede.name} 
              className="w-full h-full object-cover"
            />
            {/* Botón Cerrar (x) */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleCloseCard();
              }}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors duration-200 cursor-pointer text-xl font-bold"
              aria-label="Cerrar detalles de sede"
            >
              &times;
            </button>
          </div>

          {/* Información detallada */}
          <div className="p-5 overflow-y-auto flex-grow space-y-4">
            <div>
              <h4 className="text-lg font-bold text-gray-900 tracking-wide uppercase">{activeSede.name}</h4>
              <div className="w-12 h-1 bg-yellow-400 mt-2 rounded" />
              <p className="text-gray-500 text-xs italic mt-2">{activeSede.concept}</p>
            </div>

            <div className="space-y-3 pt-1 text-sm text-gray-700">
              {/* Dirección */}
              <div className="flex items-start gap-3">
                <div className="text-yellow-500 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-400 text-[10px] uppercase tracking-wider">Dirección</p>
                  <p className="text-gray-700 text-xs mt-0.5 leading-relaxed">{activeSede.address}</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-3">
                <div className="text-yellow-500 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-400 text-[10px] uppercase tracking-wider">Teléfono de Oficina</p>
                  <p className="text-gray-700 text-xs mt-0.5">{activeSede.phone}</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-3">
                <div className="text-yellow-500 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-400 text-[10px] uppercase tracking-wider">Horario de Atención</p>
                  <p className="text-gray-700 text-xs mt-0.5">{activeSede.hours}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="text-yellow-500 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-400 text-[10px] uppercase tracking-wider">Email</p>
                  <p className="text-gray-700 text-xs mt-0.5 break-all">{activeSede.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
