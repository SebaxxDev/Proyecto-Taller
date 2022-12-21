import { useSafeLayoutEffect } from "@chakra-ui/react";
import React,{ useEffect, useState, useMemo} from "react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    
} from '@chakra-ui/react'
import { bodyStreamToNodeStream } from "next/dist/server/body-streams";

/*
export async function hora(){
    var fechaLocal = new Date().toLocaleString().replace('-','/').split(',')[1].replace('-','/');
    
    var fechaD_M_A = fechaLocal
    console.log("fechaActual: ", fechaD_M_A)
    return fechaD_M_A
}*/



export function LectorDatos(){
    /*var fechaActual = fecha()
    var horaActual = hora()*/
    var fechaLocal = new Date().toLocaleString().replace('-','/').split(',')[0].replace('-','/');
    
    var fechaD_M_A = fechaLocal.split('/')

    const [datable, setDatable] = useState([])
    /*
    const btn = document.querySelector("button")
    btn.addEventListener("click", function()){
        
    }*/

    useEffect(()=>{
        fetch("http://localhost:3000/data/asignaturas.json")
            .then(response => response.json())
            .then(datos => {
                setDatable(datos)
            })
    }, []);



    var [value, setValue] = useState()
    if(value == undefined){
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
    }
    useEffect(()=>{     
        if(value==0 || value==undefined){
            datable.sort((a,b)=>{ 
                if(a.fecha[0] < b.fecha[0]){                   
                    return -1;
            }});
            datable.sort((a,b)=>{ 
                if(a.fecha[1] < b.fecha[1]){
                    return -1;
            }});
        }
        if(value == 1){           
            datable.sort((a,b)=>{ 
                if(a.fecha[0] > b.fecha[0]){                 
                    return -1;
                }});
            datable.sort((a,b)=>{ 
                if(a.fecha[1] > b.fecha[1]){
                    return -1;
                    }});
        }
        if(value == 2){
            datable.sort((a,b)=>{ 
                if(a.codigo < b.codigo){
                    return -1;
                }});
        }
        if(value== 3){
            datable.sort((a,b)=>{ 
                if(a.fecha[0] < b.fecha[0]){                    
                    return -1;
                }});
            datable.sort((a,b)=>{ 
                if(a.fecha[1] < b.fecha[1]){
                    return -1;
                    }});
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
        }
    }, [value]);

    return(
        
        <>
        <div className="botonFiltro">
            <Menu>
                <MenuButton as={Button}>
                    Filtro
                </MenuButton>
                <MenuList>
                    <MenuOptionGroup defaultValue='3' title='Orenar por:' type='radio'>
                        <MenuItemOption onClick={() => {setValue(0)}} value='0'>Mas Antiguo</MenuItemOption>
                        <MenuItemOption onClick={() => {setValue(1)}} value='1'>Mas Reciente</MenuItemOption>
                        <MenuItemOption onClick={() => {setValue(2)}} value='2'>Código Asignatura</MenuItemOption>
                        <MenuItemOption onClick={() => {setValue(3)}} value='3'>Fecha mas Próxima</MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </div>
        <div className="tabla1">
        <div className="row">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Asignatura</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Fecha</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {datable.map(item => (
                        <tr key={item.id}>
                            <td><button onClick={() => {botonsito(item.codigo)}}>{item.codigo}</button></td>
                            <td><button onClick={() => {botonsito(item.codigo)}}>{item.asignatura}</button></td>
                            <td>{item.tipo}</td>
                            <td>{item.fecha[0]}/{item.fecha[1]}/{item.fecha[2]}</td>        
                        </tr>
                    ))}
                </tbody> 
                <tfoot>
                
                </tfoot>    
                </table>
        </div>
        </div>
                    
        
        
        </>
    )
}

function botonsito(item) {
   
    console.log("item: ",item)
    
   
    
  }
