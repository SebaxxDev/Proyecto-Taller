import React,{ useEffect, useState, useMemo} from "react"
import Head from "next/head"
import Image from "next/image"
import TextoReloj from "../components/textoreloj";
import BotonFiltrado from "../components/botonFiltrado";
import { LectorDatos } from "../components/lectorDatos";





const Index = ()=>{
   
    const [time, changeTime] = useState(new Date().toLocaleTimeString());

    useEffect(function(){
        setInterval(()=>{
            changeTime(new Date().toLocaleTimeString());
        },1000);
    }, []);

    /*datable.sort((a,b)=>{ 
        if(a.fecha[0] < b.fecha[0]){
            return -1;
        }
    });
    datable.sort((a,b)=>{ 
        if(a.fecha[1] < b.fecha[1]){
                return -1;
            }
    });*/

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

            <div className="tabla1"> {LectorDatos()}</div>
            
            <div className="botonFiltro">{BotonFiltrado()}</div>

            
        
            
    </div>     
    );
};export default Index;

