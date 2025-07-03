# Conventional Commits
Este proyecto utiliza la convención de **Conventional Commits** para mantener un historial de commits claro, semántico y automatizable.
## 📐 Formato
Los mensajes de commit deben seguir esta estructura:
## 🔤 Tipos permitidos

| Tipo       | Descripción                                              |
|------------|----------------------------------------------------------|
| feat       | Nueva funcionalidad.                                     |
| fix        | Corrección de errores.                                   |
| docs       | Cambios en la documentación.                             |
| style      | Cambios de formato que no afectan el comportamiento.     |
| refactor   | Refactorización del código sin cambio funcional.         |
| test       | Agregado o modificación de pruebas.                      |

## 🎯 Scope (alcance)

El `scope` indica qué parte del proyecto se ve afectada. manejaremos lo siguiente:

- `backend`
- `frontend`
- `document`

## ✅ Ejemplos de commits válidos
refactor(backend): extract user logic to separate module
refactor(frontend): simplify product component structure
refactor(document): reorganize folder structure for clarity