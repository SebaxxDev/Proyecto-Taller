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
import { useState, useEffect } from "react";
import { LectorDatos } from './lectorDatos';
import { OrdenFiltro } from './ordenfiltro';
import Filtro_api from './filtro_api'
import OrdenAscen from './ordenAscen';
import OrdenCodigo from './ordenCodigo';


function BotonFiltrado(){
    
    
    
    return(
        
        <Menu>
            <MenuButton as={Button}>
                Filtro
            </MenuButton>
            <MenuList>
            <MenuOptionGroup defaultValue='0' title='Orenar por:' type='radio'>
                <MenuItemOption onClick={() => {OrdenAscen(0)}} value='0'>Fecha Ascendente</MenuItemOption>
                <MenuItemOption onClick={() => {OrdenAscen(1)}} value='1'>Fecha Descendente</MenuItemOption>
                <MenuItemOption onClick={() => {OrdenAscen(2)}} value='2'>Codigo Asignatura</MenuItemOption>
            </MenuOptionGroup>
            </MenuList>
        </Menu>
            
       
    )
};



export function ValueMenu(){
    return(
        <div>
            {BotonFiltrado()}
        </div>
    )
}


/*
(function(){
    var boton = document.getElementById('boton')
    var menu = document.getElementById('menu')

    boton.addEventListener('click', function(){
        if(menu.value == 0){
            datable.sort((a,b)=>{ 
                if(a.fecha[0] < b.fecha[0]){
                    return -1;
                }
            });
        }
        
    });
})

*/

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