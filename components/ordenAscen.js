import LectorDatos from "./lectorDatos";
import { useState, useEffect } from "react";

export default function OrdenAscen(value){
    console.log("value: ",value)
    
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