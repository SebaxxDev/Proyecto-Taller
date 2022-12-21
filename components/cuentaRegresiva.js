import { useState, useEffect } from "react";

export default function CuentaRegresiva(){
    
    var fechaAct = fecha()//fecha local actual 
    var horaAct = hora() //hora local actual  
    var primer_ramo = datos(fechaAct) //datos del ramo mas cercano actual
    
    var dias_faltantes = calculaDias(primer_ramo?.fecha,fechaAct) 
    var reloj_faltante = calculaReloj(primer_ramo?.hora, horaAct)
    //console.log(reloj_faltante)
    
    //console.log(dias_faltantes)

   

    return(     
        <div className="tabla2">
            <table>
                <tbody>
                <tr>
                    <td scope="col">{primer_ramo?.codigo}</td>
                    <td scope="col">{primer_ramo?.evaluacion}</td>
                    <td scope="col">Tiempo Restante: {dias_faltantes}; {reloj_faltante}</td>
                    <td scope="col">Queda un TRUCAZO</td>        
                </tr>
                </tbody>          
            </table>
        </div> 
    )

}

export function datos(fechaD_M_A){
    const [datable, setDatable] = useState([])
    
    
    useEffect(()=>{
        fetch("http://localhost:3000/data/asignaturas.json")
            .then(response => response.json())
            .then(datos => {
                setDatable(datos)
            })
    }, []);

    datable.sort((a,b)=>{ 
        if(a.fecha[0] < b.fecha[0]){                    
            return -1;
        }
    });
    datable.sort((a,b)=>{ 
        if(a.fecha[1] < b.fecha[1]){
                return -1;
            }
    });
    var cont=0
    var n=datable.length
    for(var i=0; i<n; i++){
        if(datable[i].fecha[1]>=fechaD_M_A[1]){
            if(datable[i].fecha[0]>=fechaD_M_A[0]){
                cont++
                for(var j=i; j>0;j--){
                    var aux1 = datable[j-1]
                    datable[j-1] = datable[j]
                    datable[j] = aux1
                }  
            }                   
        }               
    }
    for(var k=1; k<cont;k++){
        var aux2 = datable[k]
        var l = k -1
        while(l>=0){
            datable[l+1] = datable[l]
            l--
        }
        datable[l+1] = aux2
    }
    return(datable[0])
}

export function hora(){
    var fechaLocal = new Date().toLocaleString().replace('-','/').split(',')[1].replace('-','/');
    
    var fechaD_M_A = fechaLocal
   
    return fechaD_M_A
}

export function fecha(){
    var fechaLocal = new Date().toLocaleString().replace('-','/').split(',')[0].replace('-','/');
    var fechaAct = fechaLocal.split('/') //fecha local actual
    return fechaAct
}

export function calculaDias(fecha_ramo,fechas){//pulir la funcion para el tema de los meses
    //fecha ramo > fecha local
    var texto = ""
    
    var dias = fecha_ramo?.[0]-fechas[0]
    
    
    if(dias == 1){
        texto = dias + " día" 
    }else{
        texto = dias + " días"
    }

    return(texto)
}

export function calculaReloj(reloj_ramo, reloj){
    //reloj ramo: "17:30:00"
    //reloj: 
    
    var texto = ""
    var reloj_1 = reloj.split(":")
    var reloj_ram = reloj_ramo?.split(":")
    
    var hrs =  reloj_ram?.[0] - reloj_1[0]
    var min = reloj_ram?.[1] - reloj_1[1]
    if(reloj_ram?.[2] == 0){
        var sgd = 60-reloj_1[2]
    }else{
        var sgd = reloj_ram?.[2]-reloj_1[2]
    }
    if(min<0){
        min = 60+min
        hrs = hrs-1
    }
    if(hrs<0){
        hrs = 24+hrs
    }

    if(sgd < 10){
        sgd = "0"+sgd
    }
    if(min < 10){
        min = "0"+min
    }
    if(hrs < 10){
        hrs = "0"+hrs
    }

    texto = hrs+":"+min+":"+sgd
    return texto
    
}