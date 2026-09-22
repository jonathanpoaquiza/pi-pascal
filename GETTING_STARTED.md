# Guía Rápida de Inicio - π Pascal

## 🚀 Comienza en 5 minutos

### 1️⃣ Instalación

```bash
# Navega al directorio
cd pi-pascal

# Instala dependencias
npm install

# Inicia el servidor (http://localhost:3000)
npm run dev
```

### 2️⃣ Estructura Básica

El proyecto usa el **App Router de Next.js**. Las páginas están en la carpeta `app/`:

```
app/
├── page.tsx           ← Página principal (/)
├── layout.tsx         ← Layout global con Header y Footer
└── cursos/
    └── page.tsx       ← Lista de cursos (/cursos)
```

### 3️⃣ Componentes Reutilizables

Usa componentes de `src/components/ui/`:

```tsx
import { Button, Card, Badge, CourseCard } from '@/components/ui';

// Botón
<Button variant="primary" size="lg">Click me</Button>

// Tarjeta
<Card>
  <CardHeader>Titulo</CardHeader>
  <CardBody>Contenido</CardBody>
</Card>

// Badge
<Badge variant="success">Active</Badge>
```

### 4️⃣ Agregar una Nueva Página

1. Crea una carpeta en `app/` con el mismo nombre de la ruta:
   ```
   app/nuevapagina/
   ```

2. Crea `page.tsx` dentro:
   ```tsx
   export default function NewPage() {
     return <h1>Nueva Página</h1>;
   }
   ```

3. ¡Accede a `http://localhost:3000/nuevapagina`!

### 5️⃣ Datos Mock

Los cursos, testimonios, etc. están en `src/constants/index.ts`:

```tsx
import { MOCK_COURSES } from '@/constants';

// Úsalos en tus componentes
MOCK_COURSES.map(course => ...)
```

## 📝 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Inicia servidor de producción
npm start

# Linting
npm run lint

# Formatea código
npm run format
```

## 🎨 Tailwind CSS Cheatsheet

```tsx
// Colores
<div className="bg-blue-600 text-white">

// Responsive
<div className="grid md:grid-cols-2 lg:grid-cols-3">

// Espaciado
<div className="p-4 m-2 space-y-4">

// Bordes y sombras
<div className="border border-gray-200 rounded-lg shadow-md">

// Hover y transiciones
<div className="hover:bg-blue-700 transition-colors">
```

## 🔗 Importaciones Útiles

```tsx
// Componentes
import { Button, Card, CourseCard } from '@/components/ui';
import { Header, Footer } from '@/components/layout';

// Tipos
import { Course, User } from '@/types';

// Utilidades
import { formatPrice, slugify } from '@/lib/utils';

// Constantes
import { MOCK_COURSES, NAVIGATION_LINKS } from '@/constants';
```

## 🌍 Trabajar con Rutas

### Link interno:
```tsx
import Link from 'next/link';

<Link href="/cursos">Ver cursos</Link>
```

### Link dinámico:
```tsx
import { slugify } from '@/lib/utils';

<Link href={`/cursos/${slugify(course.title)}`}>
  {course.title}
</Link>
```

### Rutas con parámetros:
```tsx
// En app/cursos/[slug]/page.tsx
export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = MOCK_COURSES.find(c => slugify(c.title) === params.slug);
  // ...
}
```

## 🎯 Próximos Pasos

1. **Personaliza los datos**:
   - Edita `src/constants/index.ts`
   - Cambia nombres, precios, descripciones, etc.

2. **Cambia los colores**:
   - Edita `tailwind.config.ts` si quieres colores personalizados
   - Los colores azules están hardcodeados en varios lugares, busca `blue-600`

3. **Agrega más páginas**:
   - Sigue el patrón de las páginas existentes
   - Usa los componentes reutilizables

4. **Integra tu Backend**:
   - Configura `NEXT_PUBLIC_API_URL` en `.env.local`
   - Reemplaza los datos mock con llamadas reales a la API

## 🚨 Errores Comunes

### "Cannot find module..."
```bash
# Asegúrate de que la importación usa @ alias correctamente:
import Button from '@/components/ui/Button'  ✅
import Button from '../../../components/ui/Button'  ❌
```

### Variables no definidas
- Verifica que estén importadas desde `@/constants`
- Asegúrate de que el nombre es exacto (mayúsculas/minúsculas)

### Página en blanco
- Abre la consola del navegador (F12) para ver errores
- Verifica que `page.tsx` exporta una función por defecto

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Docs](https://react.dev)

## 💡 Tips

1. **Usa `prettier` para formato automático**:
   ```bash
   npm run format
   ```

2. **Componentes siempre con 'use client'** en el app router si usan hooks

3. **Las imágenes usan Next.js Image** para optimización automática

4. **Los estilos están en Tailwind**, evita CSS en archivos separados

## 🆘 Necesitas Ayuda?

- Revisa `PROJECT_STRUCTURE.md` para detalles de la estructura
- Revisa `DEPLOYMENT.md` para desplegar
- Contacta: info@pipascal.com

---

**¡Feliz desarrollo! 🚀**
