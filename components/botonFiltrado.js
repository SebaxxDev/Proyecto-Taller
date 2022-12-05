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
import React from "react";
import { LectorDatos } from './lectorDatos';



const BotonFiltrado = () => {
    return(
        <Menu>
            <MenuButton as={Button}>
                Filtro
            </MenuButton>
            <MenuList>
            <MenuOptionGroup defaultValue='0' title='Orenar por:' type='radio'>
                <MenuItemOption value='0' onClick={LectorDatos(0)}>Fecha Ascendente</MenuItemOption>
                <MenuItemOption value='1' onClick={LectorDatos(1)}>Fecha Descendente</MenuItemOption>
                <MenuItemOption value='2' onClick={LectorDatos(2)}>Codigo Asignatura</MenuItemOption>
            </MenuOptionGroup>
            </MenuList>
        </Menu>
            
        
    )
};
export default BotonFiltrado;

/*function OrdenFiltro(i, datable){
    
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
    
}*/