import {RelojAct} from "../components/relojAct"
import { Datos2 } from "../components/tabla";
import Contador from "../components/contador"
import CrearTabla from "../components/cargaDatos";
import React,{ useEffect, useState} from "react"




var reloj = RelojAct();
var data = Datos2();
var n = data.length;






function index(){
    const [datable, setDatable] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/data/asignaturas.json")
            .then(response => response.json())
            .then(datos => {
                setDatable(datos)
            })
    }, [])
    
    return(           
        <body>       
            <div className="container2">
                <div className="reloj">{reloj}</div>
                <div className="titulo">Próximas Actividades</div>
                <div className="tituloTabla">

                        <div className="codTitu">Codigos</div>
                        <div className="asignTitu">Asignaturas</div>
                        <div className="tipoTitu">Tipo</div>
                        <div className="fechaTitu">Fecha</div>
                </div>
                <div className="tabla1">
                    <div className="row">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">codigo</th>
                                    <th scope="col">asignatura</th>
                                    <th scope="col">tipo</th>
                                    <th scope="col">fecha</th>
                                    <th scope="col">hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datable.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.codigo}</td>
                                        <td>{item.asignatura}</td>
                                        <td>{item.tipo}</td>
                                        <td>{item.fecha}</td>
                                        <td>{item.hora}</td>
                                    </tr>
                                ))}
                            </tbody>
                            
                        </table>
                    </div>
                    
                    
                    
                
                
                </div>

            </div>
            
        </body>      
        
    )
    

}
export default index;

/*<div className="codigo2">{data[i].codigo}</div>
<div className="asignatura2">{data[i].asignatura}</div>
<div className="tipo2">{data[i].tipo}</div>
<div className="fecha2">{data[i].fecha}</div>*/
//<div className="horaAct">{reloj()}</div>
//<div className="codigo2">Codigo</div>
//<div className="asignatura2">Asignatura</div>
/*
<div className="codigo2">BAIN053</div>
<div className="asignatura2">Calculo en varias variables</div>
<div className="tipo2">prueba</div>
<div className="fecha2">10/10/22</div>



function CrearTabla(datos,n){
        var data = datos;
        for(var i=0; i<n;i++){
            <div className="container2">
                <div className="codigo2">{data[i].codigo}</div>
                <div className="asignatura2">{data[i].asignatura}</div>
                <div className="tipo2">{data[i].tipo}</div>
                <div className="fecha2">{data[i].fecha}</div>
            </div>
            console.log(data[i].codigo)
            console.log(data[i].asignatura)
            console.log(data[i].tipo)
            console.log(data[i].fecha)
        }
    }








<div className="tituloTabla">

                        <div className="codTitu">Codigos</div>
                        <div className="asignTitu">Asignaturas</div>
                        <div className="tipoTitu">Tipo</div>
                        <div className="fechaTitu">Fecha</div>
                </div>



*/

