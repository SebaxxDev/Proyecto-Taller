import React,{ useEffect, useState, useMemo} from "react"
import Head from "next/head"
import Image from "next/image"
import TextoReloj from "../components/textoreloj";
import {BotonFiltrado} from "../components/botonFiltrado"
import { LectorDatos } from "../components/lectorDatos";
import {ValueMenu} from "../components/botonFiltrado"
import CuentaRegresiva from "../components/cuentaRegresiva";

import xdd from "../components/xdddd";





const Index = ()=>{
   
    const [time, changeTime] = useState(new Date().toLocaleTimeString());

    useEffect(function(){
        setInterval(()=>{
            changeTime(new Date().toLocaleTimeString());
        },1000);
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
            <div className="cuentaRegresiva">
                <CuentaRegresiva texto={time}/>
            </div>
            
            <div className="container2"> {LectorDatos()}</div>
            
            
            
            
            
            
           

            
        
            
    </div>     
    );
};export default Index;

