// Estos imports solo son para ayudar el autocompletado.
// Originalmente estos si son necesarios para usar TypeScript.
import { NextApiRequest, NextApiResponse } from "next";
import { useEffect, useState } from "react";
import { OrdenFiltro } from "../../components/ordenfiltro";

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
    console.log("Json recibido ");
    const [value, setValue] = useState();
    useEffect(()=>{
        setValue(OrdenFiltro(req))
    })

    res.send({
        value
    });
};

function OrdenFiltro(req){
    datable = req.datable;
    i = req.value;


    console.log("i: ",i)
    

    
    if(i==0){
        console.log("i: ", 0.0)
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
    }

    if(i==1){
        console.log("i: ", 0.0)
        datable.sort((a,b)=>{ 
            if(a.fecha[0] > b.fecha[0]){
                
                return -1;
            }
        });
        datable.sort((a,b)=>{ 
            if(a.fecha[1] > b.fecha[1]){
                    return -1;
                }
        });
    }



    if(i==2){
        console.log("i: ",2.2)
        datable.sort((a,b)=>{ 
            if(a.codigo < b.codigo){
                return -1;
            }
        });  
    }
    
}