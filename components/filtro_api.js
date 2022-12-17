import { useState, useEffect } from "react";
import axios from "axios";
import { LectorDatos } from "./lectorDatos";

async function fetcher(setData, value) {
    const [datable, setDatable] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/data/asignaturas.json")
            .then(response => response.json())
            .then(datos => {
                setDatable(datos)
            })
    }, []);



  try {
    const response = await axios.post("/api/ordenCod",{ordenCod: {datable, value: i}});//llamada a la api. El {hello:"world"} es lo 
    //que se le pasa a la api
    //axios.post protocolo para llamar a la api
    //await es para que espere que se llame el axio.post(...)

    setData(response.data);//setea la respuesta de la api
  } catch (err) {
    setData(err.message); //por si hay algun error
  }
}

export function Fitro_api(value) {
  const [data, setData] = useState();


  // Executa esta función cuando el componente se monte
  useEffect(() => {
    fetcher(setData,value);
  }, []);

  return (
    <>
      <input />
      {data === undefined ? (
        <p className="tabla1">Loading...</p>
      ) : (
        <p>
          {LectorDatos(data)}
        </p>
      )}
    </>
  );
}