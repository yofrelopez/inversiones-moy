'use client';

import React, { useState, useEffect, useActionState } from 'react';
import { sendContactEmail } from '../../src/app/contacto/actions';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    success: false
  });

  // Limpiar formulario cuando el envío es exitoso
  useEffect(() => {
    if (state.success) {
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    }
  }, [state.success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-xl font-semibold text-[#01219C] mb-4">Envíanos un mensaje</h3>
      
      {state.success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
          {state.message || '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'}
        </div>
      )}

      {!state.success && state.message && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-4">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              state.errors?.nombre ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01219C] transition`}
            placeholder="Ej. Juan Pérez"
          />
          {state.errors?.nombre && (
            <p className="text-red-500 text-xs mt-1">{state.errors.nombre[0]}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              state.errors?.email ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01219C] transition`}
            placeholder="juan@empresa.com"
          />
          {state.errors?.email && (
            <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono (Opcional)
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01219C] transition"
            placeholder="999 999 999"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2 border ${
              state.errors?.mensaje ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01219C] transition`}
            placeholder="Cuéntanos en qué podemos ayudarte..."
          />
          {state.errors?.mensaje && (
            <p className="text-red-500 text-xs mt-1">{state.errors.mensaje[0]}</p>
          )}
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          disabled={isPending}
          className={`w-full bg-yellow-400 text-[#01219C] font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition duration-300 ${
            isPending ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          {isPending ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {/* Texto de confianza */}
        <p className="text-center text-xs text-gray-500 mt-3">
          Generalmente respondemos en menos de 24 horas hábiles.
        </p>
      </form>
    </div>
  );
}

