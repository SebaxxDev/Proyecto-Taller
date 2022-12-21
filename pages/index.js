import React,{ useEffect, useState, useMemo} from "react"
import Head from "next/head"
import Image from "next/image"
import TextoReloj from "../components/textoreloj";

import { LectorDatos } from "../components/lectorDatos";

import CuentaRegresiva from "../components/cuentaRegresiva";

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
                <title>Próximas Evaluaciones</title>
                <link rel="icon" href="/images/Uach_Logotipo.png"/>
            </Head>

            <div className="logo">
            <Image
                src="/images/logo_uach.png"
                height={111}
                width={425}
                alt="Logo"
            />
            </div>

            <h1 className="titulo">Próximas Evaluaciones</h1>

            <div className="reloj">
                <TextoReloj texto={time}/>
            </div>

            <div className="cajaRoja"><CuentaRegresiva/></div>
            
            <div className="cajaFija">
                <div className="textoCodigo">Código</div>
                <div className="textoAsignatura">Asignatura</div>
                <div className="textoTipo">Tipo</div>
                <div className="textoFecha">Fecha</div>
            </div>
            
            <div className="container2"> {LectorDatos()}</div>

            <div className="linkinfoalumnos">
                <a href="https://secure20.uach.cl/webInfoalumnos/login.aspx" target="_blank">
                <Image
                src="/images/infoalumnos.png"
                height={512}
                width={512}
                alt="Logo"
            /></a>
            </div>

            <div className="linksiveduc">
                <a href="https://siveducmd.uach.cl/" target="_blank">
                <Image
                src="/images/infoalumnos.png"
                height={512}
                width={512}
                alt="Logo"
            /></a>
            </div>

        </div>     
    );
};export default Index;

