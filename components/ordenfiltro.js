


export function OrdenFiltro(i, datable){
    
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
    }

    if(i==1){
        datable.sort((a,b)=>{ 
            if(a.codigo < b.codigo){
                return -1;
            }
        });  
    }

    if(i==2){
        datable.sort((a,b)=>{ 
            if(a.codigo > b.codigo){
                return -1;
            }
        });  
    }
    
}