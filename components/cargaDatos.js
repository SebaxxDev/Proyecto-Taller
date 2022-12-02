import { Datos2 } from "./tabla";


function CrearTabla(n){
    for(var i=0; i<n;i++){
        CargaDatos(i)
        console.log(i+10)
    }
};
export default CrearTabla;


function CargaDatos(i){
    var datos = Datos2()
    console.log("entroooo")
    return(
        <div>xdd</div>
        )
} 
    
    