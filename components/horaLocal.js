export function HoraLocal(){
    var fechaLocal = new Date().toLocaleString().replace('-','/').split(',')[1].replace('-','/');
    
    var fechaD_M_A = fechaLocal
   
    return fechaD_M_A
}