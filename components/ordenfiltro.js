import LectorDatos from "./lectorDatos";



export function OrdenFiltro(i, datable){

    console.log("i original: ",i)
    

    
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
        console.log("i: ", 1.1)
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