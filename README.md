# 🎬 Galería de Películas y Series - OMDb

Aplicación web interactiva desarrollada con Next.js 15 que combina **Server-Side Rendering (SSR)** y **Client-Side Rendering (CSR)** para mostrar películas y series utilizando la API de OMDb.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Arquitectura](#-arquitectura)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Autor](#-autor)

---

## 🎯 Descripción

Este proyecto es una **Actividad Integradora** que demuestra el uso correcto de:

- ✅ **SSR (Server-Side Rendering)** para contenido estático y SEO
- ✅ **CSR (Client-Side Rendering)** para interactividad en tiempo real
- ✅ **Hooks de React** (useState, useEffect)
- ✅ **API Integration** con OMDb
- ✅ **UI/UX moderna** inspirada en Netflix

---

## ✨ Características

### 🏠 Página Principal (SSR)
- Muestra películas populares de Marvel y Star Wars
- Top 10 con rankings gigantes estilo Netflix
- Badges de "NUEVO" y "TOP 10"
- Hero banner con gradientes y call-to-action
- Renderizado del servidor para SEO optimizado

### 🔍 Búsqueda Interactiva (CSR)
- Input de búsqueda en tiempo real
- Resultados instantáneos sin recargar la página
- Debounce de 500ms para optimizar requests
- Contador de resultados encontrados
- Loading states con spinner animado

### 🎬 Modal de Detalles
- Se abre al hacer clic en cualquier película
- Información completa: Director, Actores, Género, Rating, Sinopsis
- Cierre con tecla ESC o click fuera del modal
- Animaciones suaves de entrada y salida
- Botones de acción (Reproducir, Agregar a Mi Lista)

### 🎨 Diseño
- **UI moderna** inspirada en Netflix
- **Responsive** para móvil, tablet y desktop
- **Dark theme** profesional
- **Efectos hover** avanzados con zoom y overlays
- **Animaciones CSS** (fadeIn, slideUp)
- **Carrusel horizontal** deslizante para Top 10

---

## 🚀 Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 15.5.6 | Framework React con SSR/CSR |
| **React** | 18+ | Biblioteca de UI |
| **TypeScript** | 5.0+ | Tipado estático |
| **Tailwind CSS** | 4.0+ | Estilos utility-first |
| **Axios** | Latest | Cliente HTTP |
| **OMDb API** | v1 | Datos de películas y series |

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 18.0 o superior
- **npm** (incluido con Node.js) o **yarn**
- **Git** (opcional, para clonar el repositorio)

Verifica las versiones:
```bash
