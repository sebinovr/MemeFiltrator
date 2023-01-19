import './App.css'
import Header from './components/Header'
import Tabla from './components/Tabla'
import { useState, useEffect } from 'react'

function App() {

  //Tabla dinamica
  const [tablaDinamica, setDinamica] = useState([])
  //Tabla estatica
  const [tablaEstatica, setEstatica] = useState([])
  //Contenido de entrada
  const [busqueda, setBusqueda] = useState('')

  const handleChange = e => {
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar = terminoBusqueda => {
    var resultadosBusqueda = tablaDinamica.filter(((elemento) => {
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento;
      }
    }));
    setEstatica(resultadosBusqueda);
  }

  //Conexion a API 
  const consultaApi = async () => {
    const url =`https://api.imgflip.com/get_memes`
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    setDinamica(resultado.data.memes)
    setEstatica(resultado.data.memes)
    console.log(resultado.data.memes)
  }

  useEffect(() => {
    consultaApi();
  }, [])

  return (
    <div className='flex flex-col text-white'>

      <Header></Header>

      {/* Barra buscadora */}
      <div className="flex flex-col justify-center items-center">
        <p>Insert your magics words here!</p>
        
        <input
          className="rounded-md w-70 text-black"
          value={busqueda}
          placeholder="...Your magics words here..."
          onChange={handleChange}
        />
      </div>


  
      {/* Tabla */}
      <Tabla
        estatica = {tablaEstatica}
      />


    </div>
  )
}

export default App
