'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpiar error al escribir
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones
    let valid = true;
    const newErrors = { nombre: '', email: '', mensaje: '' };

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El formato del correo no es válido';
      valid = false;
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje no puede estar vacío';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setIsSubmitting(true);
      
      // Simulación de envío (aquí se conectaría con un API)
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
        
        // Resetear mensaje de éxito después de 5 segundos
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-xl font-semibold text-[#01219C] mb-4">Envíanos un mensaje</h3>
      
      {isSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01219C] transition`}
            placeholder="Ej. Juan Pérez"
          />
          {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
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
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01219C] transition`}
            placeholder="juan@empresa.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
              errors.mensaje ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01219C] transition`}
            placeholder="Cuéntanos en qué podemos ayudarte..."
          />
          {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>}
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-yellow-400 text-[#01219C] font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition duration-300 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {/* Texto de confianza */}
        <p className="text-center text-xs text-gray-500 mt-3">
          Generalmente respondemos en menos de 24 horas hábiles.
        </p>
      </form>
    </div>
  );
}
