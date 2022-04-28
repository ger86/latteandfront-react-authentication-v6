# Sistema de autenticación con React Router v6

En este repositorio encontrarás una aplicación que muestra cómo implementar un flujo de autenticación con **React Router v6**.

Definiremos varias rutas públicas y otras tantas privadas. Estas últimas sólo serán accesibles para usuarios que hayan iniciado sesión.

Emplearemos API Context para implementar toda la lógica referente a la gestión de la autenticación: estado y las funciones de `login` y `logout`.

Además, veremos como la anidación de rutas de React Router nos permite comprobar de forma muy sencilla si el usuario tiene permiso para ver o no una ruta.

Y por supuesto, repasaremos los hooks `useState`, `useEffect`, `useCallback` y `useMemo`.

Si quieres probar este proyecto basta con clonarlo, y ejecutar:

```
yarn install
yarn start
```

💛 ¡Espero que te sirva!
