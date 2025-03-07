# Proyecto Final React - Aplicación Bancaria

## Descripción
Aplicación bancaria desarrollada con React que permite consultar tipos de cambio en tiempo real y gestionar operaciones bancarias básicas. El proyecto demuestra la implementación de una aplicación web moderna con componentes reutilizables, gestión de estado y llamadas a APIs externas.

## Tecnologías Utilizadas
- **React**: Framework principal para la construcción de la interfaz de usuario
- **Vite**: Bundler moderno que proporciona un entorno de desarrollo rápido y optimizado
- **TailwindCSS**: Framework CSS utility-first para diseño responsive y personalizado
- **React Router**: Manejo de rutas y navegación en la aplicación
- **Axios**: Cliente HTTP para realizar peticiones a APIs
- **React Hot Toast**: Sistema de notificaciones elegante y personalizable
- **HeadlessUI**: Componentes accesibles y sin estilos predefinidos
- **HeroIcons**: Conjunto de iconos SVG de alta calidad

## Requisitos Cumplidos y su Implementación

### Punto 1: Uso de un Servicio Externo (API de Tipos de Cambio)
- **Implementación del Servicio**: 
  - Desarrollo en `src/services/api.js` usando Axios para llamadas HTTP
  - Sistema de caché para optimizar rendimiento y reducir llamadas
  - Retry automático para manejar fallos de conexión
  - Gestión segura de API keys mediante variables de entorno

- **Sistema de Gestión de Errores**:
  - Manejo centralizado de errores de API
  - Notificaciones amigables con React Hot Toast
  - Pantallas de error personalizadas
  - Sistema de logging para debugging

### Punto 2: Diseño de Interfaz de Usuario Moderna
- **Implementación Responsive**:
  - Diseño fluido con TailwindCSS (Grid/Flexbox)
  - Adaptación a móvil, tablet y escritorio
  - Optimización de assets y rendimiento
  - Interfaz consistente en todos los dispositivos

### Punto 3: Gestión de Estado con React Hooks
- **Implementación de Hooks**:
  - `useState` para estados locales
  - `useEffect` para efectos y llamadas API
  - Custom hooks para lógica común
  - `useContext` para estado global

### Punto 4: Sistema de Navegación
- **Características Implementadas**:
  - Rutas protegidas con autenticación
  - Carga diferida de componentes
  - Sistema de breadcrumbs
  - Gestión del histórico

### Punto 5: Componentes de Terceros
- **Librerías Integradas**:
  - HeadlessUI para componentes base
  - HeroIcons para iconografía
  - React Hot Toast para notificaciones
  - TailwindCSS para estilos

## Estructura del Proyecto

```
proyectofinal/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   ├── services/      # Servicios y llamadas API
│   ├── hooks/         # Custom hooks
│   ├── context/       # Contextos de React
│   ├── utils/         # Utilidades y helpers
│   └── assets/        # Recursos estáticos
├── public/           # Archivos públicos
└── tests/           # Tests unitarios y de integración
```

## Despliegue

### Opción 1: GitHub Pages
La aplicación está desplegada en GitHub Pages y se puede acceder en:
https://inaem2024.github.io/proyectofinal/

Para desplegar nuevos cambios:
```bash
# Asegúrate de tener la última versión
git pull origin main

# Construye la aplicación
npm run build

# Despliega a GitHub Pages
npm run deploy
```

### Opción 2: Despliegue Local
1. Clonar el repositorio:
```bash
git clone https://github.com/inaem2024/proyectofinal.git
cd proyectofinal
```

2. Configurar variables de entorno:
```bash
cp .env.example .env
# Edita .env con tus valores
```

3. Instalar dependencias:
```bash
npm install
```

4. Iniciar en modo desarrollo:
```bash
npm run dev
# La aplicación estará disponible en http://localhost:5173
```

5. Construir para producción:
```bash
npm run build
npm run preview  # Para probar la build
```

### Opción 3: Usando Docker
También puedes ejecutar la aplicación usando Docker:

1. Configurar variables de entorno:
```bash
cp .env.example .env.production
# Edita .env.production con los valores de producción
```

2. Construir la imagen:
```bash
docker build -t banco-app --build-arg NODE_ENV=production .
```

3. Ejecutar el contenedor:
```bash
docker run -p 8080:80 \
  --env-file .env.production \
  -v $(pwd)/logs:/app/logs \
  banco-app
```

La aplicación estará disponible en http://localhost:8080

### Consideraciones de Seguridad
- Todas las variables sensibles están en archivos .env (no versionados)
- Los logs se almacenan en un volumen Docker persistente
- Se utilizan certificados SSL en producción
- Las dependencias se actualizan regularmente con `npm audit fix`

### Monitorización y Mantenimiento
- Logs centralizados en `/logs`
- Métricas de rendimiento con Lighthouse
- Monitorización de errores con Sentry
- CI/CD automatizado con GitHub Actions
