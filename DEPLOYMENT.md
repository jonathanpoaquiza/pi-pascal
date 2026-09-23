# Guía de Despliegue - π Pascal

## 🚀 Despliegue en Vercel (Recomendado para Next.js)

### Opción 1: Despliegue Automático desde GitHub

1. **Pushea el proyecto a GitHub**:
```bash
git remote add origin https://github.com/tu-usuario/pi-pascal.git
git branch -M main
git push -u origin main
```

2. **Conecta Vercel a tu repositorio**:
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

3. **Vercel desplegará automáticamente**:
   - Cada push a `main` disparará un nuevo despliegue
   - Vercel proporciona un dominio automático

### Opción 2: Despliegue Manual

```bash
# Instala Vercel CLI
npm i -g vercel

# Depílega desde el terminal
vercel
```

## 🔧 Configuración Recomendada en Vercel

### Variables de Entorno

En las settings de tu proyecto en Vercel, agrega:

```
GEMINI_API_KEY = tu_api_key_de_google_ai_studio
GEMINI_MODEL = gemini-3-flash-preview
```

Configúralas en el entorno **Production** (y también en Preview si pruebas despliegues de preview). Después de guardarlas, crea un nuevo deployment: Vercel solo inyecta las variables en nuevas ejecuciones.

No subas `.env.local` al repositorio. La ruta `/api/chat` usa `GEMINI_API_KEY` únicamente en el servidor y el navegador nunca recibe esa clave.

### Optimization Settings

- **Framework Preset**: Next.js (detectado automáticamente)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 📦 Construcción de Producción Local

Para probar antes de desplegar:

```bash
npm run build
npm run start
```

Visita `http://localhost:3000` para ver la versión de producción.

## 🔐 Variables de Entorno para Producción

1. **Crea un archivo `.env.production.local`** (no commitear):
```
NEXT_PUBLIC_API_URL=https://tu-api-produccion.com
```

2. **En el dashboard de Vercel**:
   - Settings → Environment Variables
   - Agrega todas las variables necesarias

## 🌍 Dominio Personalizado

En Vercel:
1. Proyecto → Settings → Domains
2. Agrega tu dominio (ej: pi-pascal.com)
3. Configura los DNS records según las instrucciones

## 📊 Monitoreo y Logs

### En Vercel Dashboard:
- **Analytics**: Rendimiento y tráfico
- **Logs**: Errores en tiempo real
- **Deployments**: Historial de despliegues

### Comandos útiles:
```bash
# Ver logs en tiempo real
vercel logs

# Ver builds
vercel builds
```

## 🐛 Troubleshooting

### Error: Build fallido
- Revisa los logs en Vercel: `Deployments > Failed > View Build Log`
- Asegúrate de que `package.json` tiene todas las dependencias
- Verifica que no hay errores de TypeScript

### Error: Variables de entorno
- Confirma que `GEMINI_API_KEY` está configurada en Vercel Settings → Environment Variables
- Comprueba que está marcada para el entorno donde desplegaste: Production, Preview o Development
- Después de cambiarla, ejecuta un nuevo deployment
- No uses `NEXT_PUBLIC_GEMINI_API_KEY`: ese prefijo expondría la clave al navegador

### Rendimiento lento
- Revisa Analytics en Vercel
- Optimiza imágenes con Next.js Image component (ya implementado en CourseCard)
- Considera agregar CDN adicional si es necesario

## 🔗 Integración con Backend

### Cuando tengas tu API Backend lista:

1. **Actualiza .env.local**:
```
NEXT_PUBLIC_API_URL=https://tu-api.com
```

2. **En Vercel, agrega la variable**:
   - Settings → Environment Variables
   - Add variable: `NEXT_PUBLIC_API_URL` = `https://tu-api-produccion.com`

3. **Actualiza las llamadas API** en componentes:
```typescript
const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/cursos`
);
```

## 🏗️ Arquitectura Recomendada para Producción

```
┌─────────────────────────────────────┐
│     Vercel (Next.js Frontend)       │
│     pi-pascal.com                   │
└────────────┬────────────────────────┘
             │ HTTPS/REST API
             │
┌────────────▼────────────────────────┐
│   Azure / AWS (Backend API)         │
│   ASP.NET Core Web API              │
│   https://api.pi-pascal.com        │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│   PostgreSQL Database               │
│   Azure Database / RDS              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   Azure Blob Storage                │
│   (Videos, PDFs, Imágenes)         │
└─────────────────────────────────────┘
```

## ✅ Checklist Pre-Despliegue

- [ ] Todos los links funcionan
- [ ] Las imágenes cargan correctamente
- [ ] Responsive design funciona en mobile
- [ ] SPA Links y rutas funcionan
- [ ] Formularios de contacto/registro están listos
- [ ] SEO meta tags configurados
- [ ] Analytics configurado
- [ ] Variables de entorno configuradas
- [ ] Dominio personalizado configurado (opcional)
- [ ] HTTPS habilitado (Vercel por defecto)

## 📞 Soporte y Recursos

- **Documentación Vercel**: https://vercel.com/docs
- **Documentación Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**¿Problemas?** Contacta a info@pipascal.com
