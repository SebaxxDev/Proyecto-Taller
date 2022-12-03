
export function RelojAct(){
    setInterval(()=>{
        var hora = new Date();
        var hrs = hora.getHours();
        var min = hora.getMinutes();
        var sgs = hora.getSeconds();
        if(hrs<10){
            hrs="0"+hrs;
        }
        if(min<10){
            min="0"+min;
        }
        if(sgs<10){
            sgs = "0"+sgs;
        }
        var now = hrs +":"+min+":"+sgs;
    
        return now
    })
    

    
    
}












/*const relojActual = () =>{

    return(
        <div className="horaActual">Hora:</div>
    );
    
}
export default relojActual;

*/