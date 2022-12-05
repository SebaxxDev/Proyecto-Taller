import { useSafeLayoutEffect } from "@chakra-ui/react";
import React,{ useEffect, useState, useMemo} from "react"

export function LectorDatos(){
    const [datable, setDatable] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/data/asignaturas.json")
            .then(response => response.json())
            .then(datos => {
                setDatable(datos)
            })
    }, []);
    var [i, setI] = useState(0)
   OrdenFiltro(datable,i);



    return(
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
                            <td>{item.fecha[0]}/{item.fecha[1]}/{item.fecha[2]}</td>        
                        </tr>
                    ))}
                </tbody>       
                </table>
        </div>
        
    )
}

function OrdenFiltro(datable,i){
    
    if(i==0){
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
    }else{
        if(i==1){
            datable.sort((a,b)=>{ 
                if(a.codigo < b.codigo){
                    return -1;
                }
            });  
        }else{
            if(i==2){
                datable.sort((a,b)=>{ 
                    if(a.codigo > b.codigo){
                        return -1;
                    }
                });  
            }
        }
    }

    

    
    
}