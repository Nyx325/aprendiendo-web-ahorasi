# Aprendiendo web (Ahora si)

Proyecto leve y potencialmente no funcional o util
pero donde tratare de aprender lo que me falte de
web.

## Desplegar

### Prerequisitos

- `bun`: Runtime de JavaScript que estae usando, no
  tengo pensado crear el proyecto de forma que funcione
  con `nodejs` asi sea posible hacerlo. Descargar en
  [pagina oficial de bun](https://bun.sh/)
- `posgresql`: SGBD que estare usando, nuevamente dependera
  de ti irlo a descargar segun como corresponda en tu
  sistema

### Desarrollar y desplegar

1. Clonar y preparar repo

```bash
git clone https://github.com/Nyx325/aprendiendo-web-ahorasi.git
cd aprendiendo-web-ahorasi
bun install
```

2. Desplegar para desarrollo

```bash
bun run dev
```

3. Desplegar para produccion

```bash
bun run build
bun run start
```

### Organizacion proyecto

Esta es la organizacion a seguir, o que al menos voy
a intentar, que lo logre, ya es otra cosa.

```bash
 client                  # Frontend (Vite + React)
├──  public              # Archivos estáticos accesibles directamente (favicon, imágenes públicas, etc.)
├──  src                 # Código fuente principal del frontend
│   ├──  assets          # Imágenes, fuentes, estilos u otros recursos estáticos usados en el frontend
│   ├──  components      # Componentes reutilizables de React (botones, tarjetas, formularios, etc.)
│   ├──  context         # Archivos relacionados con React Context (para manejar estado global)
│   ├──  hooks           # Hooks personalizados (custom hooks) para lógica reutilizable
│   ├──  pages           # Componentes de página (vistas principales que representan rutas)
│   ├──  utils           # Funciones utilitarias/helpers que no pertenecen a un componente específico

 server                  # Backend (Bun con arquitectura en capas, usando Prisma para acceso a datos)
├──  src                 # Código fuente principal del backend
│   ├──  controller      # Lógica que recibe las peticiones HTTP y responde al cliente
│   ├──  routes          # Definición de rutas/routers (asocia rutas HTTP con controladores)
│   └──  service         # Lógica de negocio (procesamiento de datos, validaciones, reglas del sistema)
```
