# Alvearium - Semana 2: Fundamentos de React

## 📋 Descripción del Proyecto

Esta aplicación demuestra los fundamentos de React mediante tres componentes interactivos que manejan estado y eventos del usuario.


## Componentes de la Aplicación

### 1. **Contador**
- Muestra un valor numérico que puede aumentar o disminuir
- Incluye dos botones: "Sumar +" y "Restar -"
- Actualiza el valor en tiempo real

### 2. **Lista Editable**
- Permite agregar nuevos items a una lista
- Valida que no existan duplicados (insensible a mayúsculas/minúsculas)
- Muestra mensaje de error si se intenta agregar un item repetido
- Permite eliminar items individualmente
- Incluye validación de campos vacíos

### 3. **Formulario de Contacto**
- Captura nombre y email del usuario
- Valida que ambos campos estén completos
- Muestra mensaje de confirmación al enviar
- Se limpia automáticamente después del envío

---

## ¿Qué partes cambian al interactuar?

| Componente | Interacción | Cambio Visual |
|------------|-------------|---------------|
| **Contador** | Click en "Sumar" | El número aumenta |
| **Contador** | Click en "Restar" | El número disminuye |
| **Lista** | Agregar item válido | Aparece nuevo elemento en la lista |
| **Lista** | Item duplicado | Muestra mensaje de error en rojo |
| **Lista** | Click en "Eliminar" | El item desaparece de la lista |
| **Formulario** | Enviar datos válidos | Muestra mensaje de éxito verde |
| **Formulario** | Campos vacíos | No permite enviar |


## ¿Qué es el Estado en esta Aplicación?

El estado (`useState`) es la información que cambia mientras el usuario usa la aplicación. Cuando el estado cambia, react actualiza automáticamente la interfaz.
