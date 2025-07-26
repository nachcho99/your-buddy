# ChatGPT Clone

Un clon simple de ChatGPT construido con React, TypeScript y SASS.

## Características

- 🎨 Interfaz moderna y responsive
- 💬 Chat en tiempo real con el backend
- ⚡ Indicador de carga animado
- 🎯 Manejo de errores
- 📱 Diseño mobile-first
- 🎨 Estilos con SASS

## Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **SASS** - Preprocesador CSS
- **Vite** - Build tool

## Instalación

1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## Configuración del Backend

El proyecto espera un backend corriendo en `http://localhost:3000` con el endpoint:

- **POST** `/suggestions`
  - Body: `{ "prompt": "string" }`
  - Response: `{ "success": boolean, "suggestions": Array<Suggestion>, "message"?: string }`

### Estructura de la respuesta esperada:

```typescript
interface Suggestion {
  id: string;
  text: string;
  timestamp: Date;
}

interface ApiResponse {
  suggestions: Suggestion[];
  success: boolean;
  message?: string;
}
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Chat.tsx          # Componente principal del chat
│   └── Chat.scss         # Estilos del chat
├── services/
│   └── api.ts           # Servicio para llamadas a la API
├── types/
│   └── index.ts         # Definiciones de tipos TypeScript
├── App.tsx              # Componente raíz
└── main.tsx             # Punto de entrada
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Clean Code y Best Practices

- ✅ Separación de responsabilidades
- ✅ Componentes reutilizables
- ✅ Tipado fuerte con TypeScript
- ✅ Manejo de errores robusto
- ✅ Estilos modulares con SASS
- ✅ Código limpio y legible
- ✅ Responsive design
- ✅ Accesibilidad básica
