# Prerendering - Notas

El prerendering está pospuesto debido a incompatibilidades con Vite 8 y React 18.

## Problema encontrado

El plugin `vite-plugin-prerender` tiene dependencias obsoletas:
- puppeteer@1.20.0 (muy antiguo, incompatible con versiones recientes de Node)
- glob@7.2.3, inflight@1.0.6, rimraf@2.7.1 (obsoletas)

Este plugin no está mantenido activamente y no es compatible con Vite 8 / React 18.

## Alternativas a considerar

Para implementar prerendering en el futuro, considerar:
1. **vite-plugin-ssr** - Más moderno y mantenido
2. **astro** - Framework completo con prerendering nativo
3. **next.js** - Framework con SSR/SSG

## Estado actual

El sitio funciona como SPA (Single Page Application) con:
- Metatags dinámicos por página (react-helmet-async)
- robots.txt y sitemap.xml estáticos
- SEO básico funcional para crawlers que ejecutan JavaScript

Cuando se tenga un dominio real, se puede reevaluar la implementación de prerendering con una solución más moderna.
