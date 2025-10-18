// next.config.js

// ⚠️ Solo desactivar la verificación SSL en entorno de desarrollo
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // Desactiva Turbopack
  },
};

module.exports = nextConfig;
