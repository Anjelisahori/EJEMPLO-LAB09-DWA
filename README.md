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
- [Scripts Disponibles](#-scripts-disponibles)
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
node --version  # Debe ser v18.0+
npm --version   # Debe ser 9.0+
```

---

## 🔧 Instalación

### Paso 1: Clonar o descargar el proyecto

```bash
# Si usas Git
git clone https://github.com/Anjelisahori/EJEMPLO-LAB09-DWA.git
cd EJEMPLO-LAB09-DWA
cd galeria-omdb

# O descarga el ZIP y extrae los archivos
```

### Paso 2: Instalar dependencias

```bash
npm install
```

Esto instalará:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

### Paso 3: Configurar variables de entorno (Opcional)

Crea un archivo `.env.local` en la raíz:

```bash
NEXT_PUBLIC_OMDB_API_KEY=f1def80d
```

### Paso 4: Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:
- **Local:** http://localhost:3000
- **Network:** http://192.168.x.x:3000

---

## 🎮 Uso

### Navegar por la Página Principal

1. Abre http://localhost:3000
2. Verás el **Top 10** de películas con rankings gigantes
3. Haz scroll para ver secciones de **Marvel** y **Tendencias**
4. **Hover** sobre cualquier tarjeta para ver efectos y detalles rápidos
5. **Click** en una tarjeta para abrir el modal con información completa

### Buscar Películas

1. Haz click en **"Buscar"** en el navbar o en el botón "🔍 Buscar ahora"
2. Escribe el nombre de una película o serie
3. Los resultados aparecerán en **tiempo real** (sin recargar la página)
4. El contador mostrará cuántos resultados se encontraron

### Ver Detalles

1. Click en cualquier película
2. Se abre un **modal** con:
   - Póster de alta calidad
   - Rating de IMDb
   - Director y reparto
   - Sinopsis completa
   - Género, año, duración
3. Cierra con:
   - Click en la **X**
   - Tecla **ESC**
   - Click **fuera del modal**

---

## 📁 Estructura del Proyecto

```
galeria-omdb/
├── app/
│   ├── components/
│   │   ├── MovieCard.tsx        # Tarjeta de película (reutilizable)
│   │   └── MovieModal.tsx       # Modal de detalles (CSR)
│   ├── search/
│   │   └── page.tsx             # Página de búsqueda (CSR)
│   ├── layout.tsx               # Layout global con navbar
│   ├── page.tsx                 # Página principal (SSR)
│   ├── loading.tsx              # Estado de carga
│   ├── error.tsx                # Manejo de errores
│   ├── not-found.tsx            # Página 404
│   └── globals.css              # Estilos globales con Tailwind
├── public/
│   └── (archivos estáticos)
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── README.md                    # Este archivo
└── JUSTIFICACION.md             # Documento de justificación técnica
```

---

## 🏗️ Arquitectura

### SSR (Server-Side Rendering)

**Archivo:** `app/page.tsx`

**Implementación:**
```typescript
// Sin 'use client' = Server Component por defecto
async function fetchPopularMovies(): Promise<Movie[]> {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=marvel`)
  return response.data.Search || []
}

export default async function HomePage() {
  const popularMovies = await fetchPopularMovies() // Fetch en servidor
  return <div>{/* Renderiza películas */}</div>
}
```

**Ventajas:**
- ✅ SEO optimizado
- ✅ Performance inicial rápida
- ✅ Contenido pre-renderizado

---

### CSR (Client-Side Rendering)

**Archivo:** `app/search/page.tsx`

**Implementación:**
```typescript
'use client' // Obligatorio para usar hooks

export default function SearchPage() {
  const [query, setQuery] = useState('spider-man')
  const [movies, setMovies] = useState<Movie[]>([])
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`...&s=${query}`)
      setMovies(response.data.Search || [])
    }
    const timer = setTimeout(fetchMovies, 500) // Debounce
    return () => clearTimeout(timer)
  }, [query])
  
  return <input onChange={e => setQuery(e.target.value)} />
}
```

**Ventajas:**
- ✅ Interactividad en tiempo real
- ✅ Sin recargas de página
- ✅ Experiencia de usuario fluida

---

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con Turbopack

# Producción
npm run build        # Compila la aplicación para producción
npm start            # Ejecuta la aplicación compilada

# Utilidades
npm run lint         # Ejecuta ESLint para verificar código
```

---

## 🚧 Solución de Problemas

### Error: "Cannot find module 'axios'"
```bash
npm install axios
```

### Error: "self-signed certificate"
En redes corporativas, el código ya incluye la solución con `httpsAgent`.

### Tailwind no aplica estilos
```bash
# Limpia caché y reinicia
rm -rf .next
npm run dev
```

---

## 📚 Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [API de OMDb](https://www.omdbapi.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---


