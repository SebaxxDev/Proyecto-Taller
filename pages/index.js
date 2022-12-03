import React,{ useEffect, useState, useMemo} from "react"
import Head from "next/head"
import Image from "next/image"
import { RelojAct } from "../components/relojAct";
import TextoReloj from "../components/textoreloj";





const Index = ()=>{
    const [datable, setDatable] = useState([])
    const [time, changeTime] = useState(new Date().toLocaleTimeString());

    useEffect(function(){
        setInterval(()=>{
            changeTime(new Date().toLocaleTimeString());
        },1000);
    }, []);

    useEffect(()=>{
        fetch("http://localhost:3000/data/asignaturas.json")
            .then(response => response.json())
            .then(datos => {
                setDatable(datos)
            })   
    }, []);


    return(                
        <div className="container">
            <Head>
                <title>Proyecto Taller</title>
                <link rel="icon" href="/Uach_Logotipo.ico"/>
            </Head>
            <div className="logo">
            <Image
                src="/images/UachLogoLargo.png"
                height={111}
                width={425}
                alt="Logo"
            /></div>
            <h1 className="titulo">Próximas Actividades</h1>
            <div className="reloj">
                <TextoReloj texto={time}/>
            </div>
            <div className="tabla1">
                <div className="row">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Codigo</th>
                                <th scope="col">Asignatura</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Fecha</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {datable.map(item => (
                                <tr key={item.id}>
                                    <td>{item.codigo}</td>
                                    <td>{item.asignatura}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.fecha}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        
            
    </div>     
    );
};export default Index;

