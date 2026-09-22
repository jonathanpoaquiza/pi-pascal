# π Pascal - Plataforma Educativa en Línea

Plataforma educativa moderna para cursos de programación y tecnología, desarrollada con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ Landing page atractivo con secciones de featured courses, testimonios y FAQ
- ✅ Catálogo de cursos con búsqueda y filtrado por categoría y nivel
- ✅ Página detallada de cursos
- ✅ Página de registro e iniciar sesión
- ✅ Página de contacto con formulario
- ✅ Página Sobre Nosotros con información de la empresa
- ✅ Diseño responsivo y moderno con Tailwind CSS
- ✅ Componentes reutilizables y bien estructurados

## 📁 Estructura del Proyecto

```
pi-pascal/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal con Header y Footer
│   ├── page.tsx                 # Landing page / Home
│   ├── globals.css              # Estilos globales
│   ├── cursos/
│   │   ├── page.tsx            # Catálogo de cursos con filtros
│   │   └── [slug]/
│   │       └── page.tsx        # Detalle de curso individual
│   ├── sobre-nosotros/
│   │   └── page.tsx            # Página about
│   ├── contacto/
│   │   └── page.tsx            # Página de contacto
│   ├── registro/
│   │   └── page.tsx            # Página de registro
│   ├── login/
│   │   └── page.tsx            # Página de login
│   ├── terminos/
│   │   └── page.tsx            # Términos de servicio
│   └── privacidad/
│       └── page.tsx            # Política de privacidad
│
├── src/
│   ├── components/
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Header.tsx      # Header con navegación
│   │   │   └── Footer.tsx      # Footer
│   │   └── ui/                 # Componentes reutilizables UI
│   │       ├── Button.tsx      # Botón personalizado
│   │       ├── Card.tsx        # Componentes de tarjeta
│   │       ├── Badge.tsx       # Badges
│   │       └── CourseCard.tsx  # Tarjeta de curso
│   │
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces y tipos
│   │
│   ├── constants/
│   │   └── index.ts            # Datos constantes (cursos mock, testimonios, etc)
│   │
│   ├── lib/
│   │   └── utils.ts            # Funciones utilidad
│   │
│   └── styles/                 # Estilos adicionales
│
├── public/                      # Archivos estáticos
├── package.json                # Dependencias
├── tsconfig.json              # Configuración TypeScript
├── tailwind.config.ts         # Configuración Tailwind
├── next.config.ts             # Configuración Next.js
└── README.md                  # Este archivo

```

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: Personalizados (sin dependencias externas por el momento)
- **Hosting sugerido**: Vercel (para el frontend)

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ o superior
- npm o yarn

### Pasos de instalación

1. **Navega al directorio del proyecto**:
```bash
cd pi-pascal
```

2. **Instala las dependencias**:
```bash
npm install
# o
yarn install
```

3. **Ejecuta el servidor de desarrollo**:
```bash
npm run dev
# o
yarn dev
```

4. **Abre en tu navegador**:
Visita `http://localhost:3000` para ver la aplicación en acción.

## 🌐 Páginas Disponibles

### Frontend (Público)

- `/` - Landing page con hero section, featured courses, testimonios, features, CTA y FAQ
- `/cursos` - Catálogo de cursos con búsqueda y filtros
- `/cursos/[slug]` - Página detallada del curso
- `/sobre-nosotros` - Información de π Pascal, misión, visión, equipo
- `/contacto` - Formulario de contacto y información de contacto
- `/registro` - Página de registro de nuevos usuarios
- `/login` - Página de iniciar sesión
- `/terminos` - Términos de servicio
- `/privacidad` - Política de privacidad

## 🎨 Estructura de Componentes

### Layout Components
- **Header**: Navegación principal, responsive con menú mobile
- **Footer**: Footer con links, redes sociales, info de contacto

### UI Components
- **Button**: Botón reutilizable con variantes (primary, secondary, outline)
- **Card**: Componentes de tarjeta (Card, CardHeader, CardBody, CardFooter)
- **Badge**: Badges para categorías y niveles
- **CourseCard**: Tarjeta de curso con imagen, info y CTA

## 📊 Datos Mock

Actualmente la plataforma utiliza datos mock en `src/constants/index.ts`:
- 6 cursos de ejemplo
- Testimonios de estudiantes
- Features de la plataforma
- FAQs

## 🔐 Notas sobre Seguridad y Backend

Este es el **frontend solamente**. Para la versión completa, necesitarás:

1. **Backend API** - Sugerido: ASP.NET Core Web API
   - Autenticación con JWT/OAuth
   - Base de datos: PostgreSQL
   - ORM: Entity Framework Core

2. **Funcionalidades que requieren backend**:
   - Autenticación real
   - Procesamiento de pagos (Stripe API)
   - Guardado de datos de usuarios
   - Sistema de inscripciones
   - Progreso de cursos
   - Certificados

## 🚀 Próximos Pasos

### Fase 1 (Actual - MVP Frontend)
- [x] Estructura del proyecto
- [x] Páginas principales
- [x] Componentes reutilizables
- [x] Diseño responsivo
- [ ] Integración con API backend

### Fase 2 (Backend)
- [ ] ASP.NET Core Web API
- [ ] Autenticación
- [ ] Base de datos PostgreSQL
- [ ] Sistema de pagos (Stripe)

### Fase 3 (Plataforma Completa)
- [ ] Dashboard de usuario
- [ ] Sistema de progreso de cursos
- [ ] Videos en streaming
- [ ] Sistema de comentarios
- [ ] Certificados

### Fase 4 (Expansión)
- [ ] Servicio de IA (Python FastAPI)
- [ ] Sistema de recomendaciones
- [ ] Analytics
- [ ] Programa de afiliados

## 📝 Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Estas serán necesarias cuando se integre el backend
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_KEY=tu_stripe_key
```

## 🎯 Rutas del Archivo

### Importaciones
Usa el alias `@/` para importaciones desde `src/`:

```typescript
// En lugar de:
import { Button } from '../../../components/ui/Button'

// Usa:
import { Button } from '@/components/ui/Button'
```

## 🔗 Enlaces Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 Licencia

Este proyecto es propiedad de π Pascal.

## 👥 Contacto

- **Email**: info@pipascal.com
- **Website**: https://pi-pascal.com
- **Ubicación**: Quito, Ecuador

---

**Desarrollado por π Pascal** 🚀
