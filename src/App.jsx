import { useState } from 'react'
import './App.css'

function App() {
  // === ESTADO DEL CONTADOR ===
  const [count, setCount] = useState(0)

  // === ESTADO DE LA LISTA EDITABLE ===
  const [nuevoItem, setNuevoItem] = useState("")
  const [error, setError] = useState("")
  const [lista, setLista] = useState(["Item 1", "Item 2", "Item 3"])

  // === ESTADO DEL FORMULARIO ===
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [enviado, setEnviado] = useState(false)

  // === FUNCIONES DEL CONTADOR ===
  const sumar = () => setCount(count + 1)
  const restar = () => setCount(count - 1)

  // === FUNCIÓN AGREGAR ITEM (con validación de duplicados) ===
  const agregarItem = (e) => {
    e.preventDefault()
    
    if (!nuevoItem.trim()) {
      setError("⚠️ El campo no puede estar vacío")
      return
    }
    
    const existe = lista.some(item => item.toLowerCase() === nuevoItem.trim().toLowerCase())
    if (existe) {
      setError(`⚠️ "${nuevoItem.trim()}" ya existe en la lista`)
      return
    }
    
    setLista([...lista, nuevoItem.trim()])
    setNuevoItem("")
    setError("")
  }

  // === FUNCIÓN ELIMINAR ITEM ===
  const eliminarItem = (index) => {
    setLista(lista.filter((_, i) => i !== index))
  }

  // === FUNCIÓN ENVIAR FORMULARIO ===
  const enviarFormulario = (e) => {
    e.preventDefault()
    if (nombre.trim() && email.trim()) {
      setEnviado(true)
      setNombre("")
      setEmail("")
      setTimeout(() => setEnviado(false), 3000)
    }
  }

  // === RENDERIZADO ===
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Alvearium - Semana 2</h1>

      {/* === COMPONENTE 1: CONTADOR === */}
      <Contador count={count} sumar={sumar} restar={restar} />

      {/* === COMPONENTE 2: LISTA EDITABLE === */}
      <ListaEditable 
        nuevoItem={nuevoItem}
        setNuevoItem={setNuevoItem}
        error={error}
        lista={lista}
        agregarItem={agregarItem}
        eliminarItem={eliminarItem}
      />

      {/* === COMPONENTE 3: FORMULARIO DE CONTACTO === */}
      <FormularioContacto 
        nombre={nombre}
        setNombre={setNombre}
        email={email}
        setEmail={setEmail}
        enviado={enviado}
        enviarFormulario={enviarFormulario}
      />
    </div>
  )
}

// === COMPONENTE 1: Contador ===
function Contador({ count, sumar, restar }) {
  return (
    <section style={{ 
      background: '#f0f0f0', 
      padding: '20px', 
      borderRadius: '8px', 
      marginBottom: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ margin: '0 0 15px 0' }}>📊 Contador</h2>
      <p style={{ fontSize: '24px', margin: '10px 0' }}>Valor: <strong>{count}</strong></p>
      <button onClick={sumar} style={{ 
        padding: '10px 20px', 
        marginRight: '10px', 
        backgroundColor: '#27ae60', 
        color: 'white', 
        border: 'none', 
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Sumar +
      </button>
      <button onClick={restar} style={{ 
        padding: '10px 20px', 
        backgroundColor: '#e74c3c', 
        color: 'white', 
        border: 'none', 
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Restar -
      </button>
    </section>
  )
}

// === COMPONENTE 2: Lista Editable ===
function ListaEditable({ nuevoItem, setNuevoItem, error, lista, agregarItem, eliminarItem }) {
  return (
    <section style={{ 
      background: '#e8f4f8', 
      padding: '20px', 
      borderRadius: '8px', 
      marginBottom: '20px' 
    }}>
      <h2 style={{ textAlign: 'center' }}>La lista editable</h2>
      
      <form onSubmit={agregarItem} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          value={nuevoItem}
          onChange={(e) => { setNuevoItem(e.target.value); setError("") }}
          placeholder="Nuevo item..."
          style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ 
          padding: '10px 20px', 
          backgroundColor: '#3498db', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Guardar
        </button>
      </form>
      
      {error && (
        <p style={{ 
          color: '#e74c3c', 
          background: '#ffe6e6', 
          padding: '10px', 
          borderRadius: '6px',
          marginBottom: '15px'
        }}>
          {error}
        </p>
      )}
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {lista.map((item, index) => (
          <li key={index} style={{ 
            margin: '10px 0', 
            padding: '12px', 
            background: 'white', 
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <span>{item}</span>
            <button onClick={() => eliminarItem(index)} style={{ 
              padding: '6px 12px', 
              backgroundColor: '#e74c3c', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              🗑️ Eliminar
            </button>
          </li>
        ))}
      </ul>
      
      {lista.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999', fontStyle: 'italic' }}>
          La lista está vacía
        </p>
      )}
    </section>
  )
}

// === COMPONENTE 3: Formulario de Contacto ===
function FormularioContacto({ nombre, setNombre, email, setEmail, enviado, enviarFormulario }) {
  return (
    <section style={{ 
      background: '#fff3cd', 
      padding: '20px', 
      borderRadius: '8px', 
      marginBottom: '20px' 
    }}>
      <h2 style={{ textAlign: 'center' }}>📧 Formulario de contacto</h2>
      
      {enviado ? (
        <div style={{ 
          background: '#d4edda', 
          color: '#155724', 
          padding: '15px', 
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>✅ ¡Mensaje enviado con éxito!</p>
        </div>
      ) : (
        <form onSubmit={enviarFormulario}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Nombre:
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ 
            width: '100%', 
            padding: '12px', 
            backgroundColor: '#3498db', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            Enviar
          </button>
        </form>
      )}
    </section>
  )
}

export default App