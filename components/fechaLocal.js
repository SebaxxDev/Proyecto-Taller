export function FechaLocal(){
    var fechaLocal = new Date().toLocaleString().replace('-','/').split(',')[0].replace('-','/');
    var fechaAct = fechaLocal.split('/') //fecha local actual
    return fechaAct
}