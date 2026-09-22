# ✅ Checklist de Verificación - π Pascal

## 🧪 Prueba Rápida del Proyecto

Después de ejecutar `npm run dev`, verifica que todo funciona:

### 🏠 Home Page (`http://localhost:3000`)
- [ ] Hero section visible con texto y background azul
- [ ] Sección de cursos destacados con 6 tarjetas
- [ ] Cada tarjeta de curso muestra: imagen, título, precio, rating, instructor
- [ ] Botones "Ver curso" funcionan
- [ ] Sección de features con 6 items
- [ ] Sección de testimonios con 3 testimonios
- [ ] CTA "¿Listo para comenzar?" visible
- [ ] FAQ expandible funciona
- [ ] Scroll suave y sin errores

### 🎓 Página de Cursos (`http://localhost:3000/cursos`)
- [ ] Header "Nuestros Cursos" visible
- [ ] Sidebar con filtros aparece en desktop
- [ ] Buscar por texto funciona
- [ ] Filtrar por categoría funciona
- [ ] Filtrar por nivel funciona
- [ ] Grid de cursos se muestra correctamente
- [ ] Botón "Limpiar filtros" funciona
- [ ] Click en curso abre página detallada

### 📖 Detalle de Curso (`http://localhost:3000/cursos/python-basico-para-principiantes`)
- [ ] Información del curso visible (título, descripción, instructor)
- [ ] Imagen del curso aparece
- [ ] Tabs (Descripción, Módulos, Reseñas) funcionan
- [ ] Sidebar con precio y botones "Comprar" funciona
- [ ] Beneficios listados correctamente
- [ ] Garantía de 30 días visible
- [ ] Cursos relacionados aparecen al final
- [ ] Links en cursos relacionados funcionan

### 👥 Sobre Nosotros (`http://localhost:3000/sobre-nosotros`)
- [ ] Sección de Misión, Visión, Valores visible
- [ ] Equipo de 4 personas se muestra
- [ ] "¿Por qué elegir π Pascal?" con 6 razones
- [ ] CTA final funciona correctamente

### 📧 Contacto (`http://localhost:3000/contacto`)
- [ ] Información de contacto (email, teléfono) visible
- [ ] Formulario de contacto se carga
- [ ] Todos los campos se pueden llenar
- [ ] Al enviar, muestra mensaje de éxito
- [ ] Preguntas frecuentes aparecen
- [ ] Links de redes sociales están presentes

### 📝 Registro (`http://localhost:3000/registro`)
- [ ] Logo π Pascal visible
- [ ] Formulario con campos: Nombre, Email, Contraseña, Confirmar
- [ ] Validación de contraseñas coincide
- [ ] Checkbox de términos funciona
- [ ] Botón "Crear cuenta" funciona
- [ ] Links a términos y privacidad funcionan
- [ ] Link a login funciona

### 🔐 Login (`http://localhost:3000/login`)
- [ ] Formulario de login visible
- [ ] Campo "Recuérdame" funciona
- [ ] Link "Olvidé contraseña" funciona
- [ ] Link a registro funciona
- [ ] Botones de social login se ven

### 🔗 Navegación General
- [ ] Header visible en todas las páginas
- [ ] Logo π Pascal en header clicable
- [ ] Menu de navegación (Inicio, Cursos, Sobre nosotros, Contacto)
- [ ] Botones "Iniciar sesión" y "Registrarse" en header
- [ ] Footer aparece en todas las páginas
- [ ] Footer tiene links a todas las páginas
- [ ] Redes sociales en footer hacen clic

### 📱 Responsivo (Mobile)
- [ ] Menú hamburgesa aparece en móvil
- [ ] Contenido se ajusta a pantala pequeña
- [ ] Grid de cursos es 1 columna en móvil
- [ ] Imágenes se adaptan
- [ ] Botones son clickeables en móvil

### ⚙️ Técnico
- [ ] Sin errores en la consola del navegador (F12)
- [ ] Sin warnings CSS no utilizados
- [ ] TypeScript compila sin errores
- [ ] Todas las imágenes cargan

### 🎨 Diseño
- [ ] Colores consistentes (azul primario)
- [ ] Fuentes legibles
- [ ] Espaciados consistentes
- [ ] Sombras suave en tarjetas
- [ ] Transiciones suaves en hover

## 🐛 Si Algo No Funciona

### Error: "Cannot find module"
```bash
# Reinstala dependencias
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Error: Puerto en uso
```bash
# Usa otro puerto
npm run dev -- -p 3001
```

### Cambios no aparecen
```bash
# Limpia caché
rm -rf .next
npm run dev
```

### Errores de TypeScript
```bash
# Verifica que todo está bien tipado
npm run lint
```

## 🎯 Tareas de Personalización

Después de verificar que funciona, personaliza:

1. **Datos de Cursos**
   - Edita `src/constants/index.ts`
   - Cambia nombres, precios, descripción, instructores

2. **Logo y Branding**
   - Reemplaza el símbolo "π" con tu logo
   - En `Header.tsx` y `Footer.tsx`

3. **Colores**
   - Busca "blue-600" en el proyecto
   - Reemplázalo con tu color primario
   - O modifica `tailwind.config.ts`

4. **Información de Contacto**
   - Email: info@pipascal.com → tu-email@tudominio.com
   - Teléfono: +593 1 234 56789 → tu teléfono
   - Ubicación: Quito, Ecuador → tu ubicación

## 📊 Performance

Verifica el rendimiento:

1. Abre DevTools (F12)
2. Pestaña Network
3. Recarga la página
4. Verifica que las imágenes cargen rápido
5. Performance tab → Run lighthouse

## ✅ Cuando Esté Todo Correcto

- [ ] Todas las pruebas pasan
- [ ] Datos personalizados
- [ ] Sin errores en consola
- [ ] Responsive en móvil
- [ ] Lista para desplegar

## 🚀 Siguiente Paso

```bash
# Build para producción
npm run build
npm run start

# O despliega en Vercel
vercel
```

---

**¡Cuando verifiques todo esto, el proyecto estará 100% listo para usar! 🎉**
