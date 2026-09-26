# Proyecto - π Pascal

## Estructura del Sitio

```
π Pascal
│
├─ HOME (/)
│  ├─ Hero Section
│  ├─ Featured Courses (6 cursos)
│  ├─ Features (6 items)
│  ├─ Testimonials (3)
│  ├─ CTA Section
│  └─ FAQ (5 preguntas)
│
├─ CURSOS (/cursos)
│  ├─ Sidebar Filters
│  │  ├─ Search
│  │  ├─ Categoría (7 options)
│  │  └─ Nivel (3 options)
│  └─ Grid de Cursos (6+ cursos)
│
├─ CURSO DETAIL (/cursos/[slug])
│  ├─ Course Header
│  ├─ Course Info (4 fields)
│  ├─ Course Image
│  ├─ Tabs Content
│  │  ├─ Overview
│  │  ├─ Modules
│  │  └─ Reviews
│  ├─ Sidebar
│  │  ├─ Price
│  │  ├─ CTA Buttons
│  │  ├─ Benefits (5)
│  │  └─ Guarantee
│  └─ Related Courses (3)
│
├─ SOBRE NOSOTROS (/sobre-nosotros)
│  ├─ MVV Section (Misión, Visión, Valores)
│  ├─ Our Story
│  ├─ Team Section (4 members)
│  ├─ Why Choose Us (6 reasons)
│  └─ CTA
│
├─ CONTACTO (/contacto)
│  ├─ Contact Info (Email, Phone, Location, Socials)
│  └─ Contact Form
│     ├─ Name
│     ├─ Email
│     ├─ Subject
│     ├─ Message
│     └─ Submit Button
│        └─ FAQ
│
├─ REGISTRO (/registro)
│  ├─ Logo
│  └─ Sign Up Form
│     ├─ Name
│     ├─ Email
│     ├─ Password
│     ├─ Confirm Password
│     ├─ Terms Checkbox
│     ├─ Submit Button
│     └─ Social Signup
│
├─ LOGIN (/login)
│  ├─ Logo
│  └─ Login Form
│     ├─ Email
│     ├─ Password
│     ├─ Remember Me
│     ├─ Submit Button
│     └─ Social Login
│
├─ TÉRMINOS (/terminos)
│  └─ Terms Content (6 sections)
│
└─ PRIVACIDAD (/privacidad)
   └─ Privacy Content (8 sections)
```

## Componentes del Proyecto

```
COMPONENTS
│
├─ layout/
│  ├─ Header.tsx
│  │  ├─ Logo (π Pascal)
│  │  ├─ Navigation Links (4)
│  │  ├─ Auth Buttons (Login, Register)
│  │  └─ Mobile Menu (Hamburger)
│  │
│  └─ Footer.tsx
│     ├─ Brand Info
│     ├─ Course Links
│     ├─ Company Links
│     ├─ Contact Info
│     └─ Social Media (4)
│
└─ ui/
   ├─ Button.tsx
   │  ├─ Variants: primary, secondary, outline
   │  ├─ Sizes: sm, md, lg
   │  ├─ Loading state
   │  └─ asChild prop
   │
   ├─ Card.tsx
   │  ├─ Card (container)
   │  ├─ CardHeader
   │  ├─ CardBody
   │  └─ CardFooter
   │
   ├─ Badge.tsx
   │  └─ Variants: default, success, warning, danger, info
   │
   └─ CourseCard.tsx
      ├─ Image
      ├─ Level Badge
      ├─ Category
      ├─ Title
      ├─ Description
      ├─ Instructor
      ├─ Stats (Duration, Rating, Students)
      └─ Price + Button
```

## 📊 Datos y Constantes

```
CONSTANTS
│
├─ SITE_NAME = "π Pascal"
├─ SITE_DESCRIPTION = "Capacitación profesional..."
├─ NAVIGATION_LINKS (4 links)
├─ MOCK_COURSES (6 cursos)
│  ├─ Python Básico (49.99)
│  ├─ React Avanzado (79.99)
│  ├─ SQL Relacional (59.99)
│  ├─ DevOps Docker/K8s (89.99)
│  ├─ JavaScript Moderno (54.99)
│  └─ C# ASP.NET Core (74.99)
├─ TESTIMONIALS (3)
├─ FEATURES (6)
├─ FAQ (5 questions)
├─ CourseCategories (7)
└─ CourseLevels (3)
```

## Tipos TypeScript

```
TYPES
│
├─ Course
│  ├─ id, title, description
│  ├─ instructor, price, image
│  ├─ category, level, duration
│  ├─ students?, rating?
│  └─ modules?: Module[]
│
├─ Module
│  ├─ id, title, description
│  ├─ lessons: Lesson[]
│  └─ order
│
├─ Lesson
│  ├─ id, title, description
│  ├─ duration, videoUrl?, content?
│  └─ order
│
├─ ContactForm
│  ├─ name, email, subject, message
│
├─ User
│  ├─ id, email, name
│  ├─ enrolledCourses?, createdAt?
│
└─ Enrollment
   ├─ id, userId, courseId
   ├─ enrolledAt, progress, completed
```

## Funciones Utilidad

```
UTILS
│
├─ formatPrice(price: number)
├─ cn(...classes)
├─ truncateText(text, maxLength)
├─ slugify(text)
├─ CourseCategories
└─ CourseLevels
```

## Colores y Estilos

### Tailwind Palette
- **Primario**: `blue-600` / `bg-blue-600 text-white`
- **Secundario**: `gray-200` / `bg-gray-200 text-gray-900`
- **Fondo**: `bg-white` / `bg-gray-50`
- **Bordes**: `border-gray-200` / `border-gray-300`
- **Texto**: `text-gray-900` / `text-gray-600` / `text-gray-700`

### Componentes Estilizados
- **Botones**: Border-radius `rounded-lg`, padding `px-6 py-2`, transiciones suaves
- **Tarjetas**: Sombra `shadow-md`, hover `shadow-lg`, border-radius `rounded-lg`
- **Inputs**: Border `border-gray-300`, focus `ring-2 ring-blue-600`
- **Headers**: Gradientes azules `from-blue-600 to-blue-800`

## Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Ejemplos en proyecto:
```
grid md:grid-cols-2 lg:grid-cols-3
hidden md:flex
md:col-span-4
```

## Rutas de Archivo

```
Importaciones con @/ alias:

import { Button } from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import { Course, User } from '@/types';
import { formatPrice, slugify } from '@/lib/utils';
import { MOCK_COURSES } from '@/constants';
```

## Links Internos

```
Navegación con Next.js Link:

<Link href="/">Home</Link>
<Link href="/cursos">Cursos</Link>
<Link href={`/cursos/${slugify(title)}`}>Detalle</Link>
```

## Hooks Utilizados

```
React Hooks Utilizados:

- useState: Para formularios, expandibles, visibilidad
- useMemo: Para filtrado de cursos (optimización)
- useEffect: (preparado para futuras integraciones)
```

## Estructura de Carpetas (Visual)

```
pi-pascal/
│
├── Configuración
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── next.config.ts
│   └── .env.example
│
├── Documentación
│   ├── PROJECT_STRUCTURE.md
│   ├── GETTING_STARTED.md
│   ├── DEPLOYMENT.md
│   ├── RESUMEN_COMPLETADO.md
│   └── VERIFICACION.md
│
├── App (Frontend)
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── globals.css
│       ├── cursos/
│       ├── sobre-nosotros/
│       ├── contacto/
│       ├── registro/
│       ├── login/
│       ├── terminos/
│       └── privacidad/
│
├── Componentes
│   └── src/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.tsx
│       │   │   └── Footer.tsx
│       │   └── ui/
│       │       ├── Button.tsx
│       │       ├── Card.tsx
│       │       ├── Badge.tsx
│       │       └── CourseCard.tsx
│       ├── types/
│       │   └── index.ts
│       ├── constants/
│       │   └── index.ts
│       ├── lib/
│       │   └── utils.ts
│       └── styles/
│
├── Públicos
│   └── public/
│
└── 🔧 Node
    └── node_modules/
```

## Flow del Usuario

```
Usuario Nuevo
│
├─ Entra a / (Home)
│  ├─ Ve cursos destacados
│  ├─ Lee testimonios
│  └─ Clica "Ver cursos"
│
├─ Llega a /cursos
│  ├─ Busca "Python"
│  ├─ Filtra por "Básico"
│  └─ Clica en curso
│
├─ Ve /cursos/python-basico
│  ├─ Lee descripción
│  ├─ Ve precio: $49.99
│  └─ Clica "Comprar"
│
├─ Redirige a /registro
│  ├─ Llena formulario
│  └─ Clica "Crear cuenta"
│
└─ Inicia en /dashboard (futuro)
   ├─ Accede al curso
   └─ Descarga material
```

## Tips Rápidos

1. **Buscar un componente**: Busca en `src/components/`
2. **Cambiar datos**: Edita `src/constants/index.ts`
3. **Agregar página**: Crea carpeta en `app/`
4. **Cambiar colores**: Busca `blue-600` o edita `tailwind.config.ts`
5. **Agregar link header**: Edita `NAVIGATION_LINKS` en constants
