import { useState, useEffect } from "react";

export default function CuentaRegresiva({texto}){
   /* var reloj = texto.split(':')
    //console.log("hora:", reloj[0] )
    //console.log("min:", reloj[1])
    //console.log("seg:", reloj[2])
    //var data = DatoProximo()
    var data_hora = 17;
    var data_min = 30;
    var data_seg = 30;
    var data_dia = 28;
   
    var texto = 
    var fecha_final = new Date()
    //const dia_actual = new Date().toLocaleDateString;
    //console.log("dia dato:", dia_actual.getDay())
    //var dia = data_dia - dia_actual;
    var Xmas95 = new Date();
var weekday = Xmas95.getDay();

console.log(weekday); // 1


    //console.log("hora completa dato:", hora,":",min,":",seg)
    //console.log("dias faltantes: ", dia)
    

}

function DatoProximo(){
    const [datable, setDatable] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/data/asignaturas.json")
            .then(response => response.json())
            .then(datos => {
                setDatable(datos)
            })
    }, []);
    
    console.log("datablee: ",datable)
    
    const getTime = dateTo => {
        let now = new Date(),
            time = (new Date(dateTo) - now + 1000) / 1000,
            seconds = ('0' + Math.floor(time % 60)).slice(-2),
            minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
            hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
            days = Math.floor(time / (3600 * 24));
     
            
        
    };
    console.log(
        "seg: ",seconds,
        " ,min: ",minutes,
        " ,horaS: ",hours,
        " ,dias:",days,
        " ,timpo: ",time)*/
}