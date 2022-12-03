import React,{ useEffect, useState} from "react"

const [state, setState] = useState(initialState);

function useDatos(){
    const [datable, setDatable] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/data/asignaturas.json")
            .then(response => response.json())
            .then(datos => {
                setDatable(datos)
            })
    }, [])
    return datable
}
