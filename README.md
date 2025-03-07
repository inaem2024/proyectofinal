# Proyecto Final React - Aplicación Bancaria

## Descripción
Aplicación bancaria desarrollada con React que permite consultar tipos de cambio en tiempo real y gestionar operaciones bancarias básicas.

## Tecnologías Utilizadas
- React
- Vite (Bundler)
- TailwindCSS
- React Router
- Axios
- React Hot Toast
- HeadlessUI
- HeroIcons

## Requisitos Cumplidos

### 1. Servicio Externo
- Implementación de llamadas asíncronas a API de tipos de cambio usando Axios
- Gestión de errores con mensajes informativos

### 2. Interfaz de Usuario
- Diseño responsive usando TailwindCSS
- Actualización dinámica con React Hooks (useState, useEffect)
- Navegación con React Router
- Componentes de terceros (HeadlessUI, HeroIcons)

## Despliegue

### Opción 1: GitHub Pages
La aplicación está desplegada en GitHub Pages y se puede acceder en:
https://inaem2024.github.io/proyectofinal/

Para desplegar nuevos cambios:
```bash
npm run deploy
```

### Opción 2: Despliegue Local
1. Clonar el repositorio:
```bash
git clone https://github.com/inaem2024/proyectofinal.git
cd proyectofinal
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar en modo desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

### Opción 3: Usando Docker
También puedes ejecutar la aplicación usando Docker:

1. Construir la imagen:
```bash
docker build -t banco-app .
```

2. Ejecutar el contenedor:
```bash
docker run -p 8080:80 banco-app
```

La aplicación estará disponible en http://localhost:8080
