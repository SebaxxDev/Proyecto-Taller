import CargaDatos from "./cargaDatos";


export function Datos2(){
    var myArray = {};
    var myArray = [
	    {'codigo':'BAIN100', 'asignatura':'Calculo en varias variables', 'tipo':'Prueba', 'fecha':'11/10/22'},
	    {'codigo':'BAIN023', 'asignatura':'Geometria', 'tipo':'Prueba', 'fecha':'13/10/22'},
	    {'codigo':'BAIN042', 'asignatura':'Algebra lineal', 'tipo':'Prueba', 'fecha':'17/10/22'},
	    {'codigo':'BAIN012', 'asignatura':'Calculo en una variable', 'tipo':'Prueba', 'fecha':'21/10/22'},
	    {'codigo':'BAIN019', 'asignatura':'Metodos para ingenieria', 'tipo':'Prueba', 'fecha':'23/10/22'},
        {'codigo':'BAIN052', 'asignatura':'Estadistica', 'tipo':'Prueba', 'fecha':'12/12/21'},
	    {'codigo':'BAIN072', 'asignatura':'Ecuaciones diferenciales', 'tipo':'Prueba', 'fecha':'05/11/22'},
        {'codigo':'BAIN072', 'asignatura':'Ecuaciones diferenciales', 'tipo':'Prueba', 'fecha':'05/11/22'},
        {'codigo':'BAIN072', 'asignatura':'Ecuaciones diferenciales', 'tipo':'Prueba', 'fecha':'05/11/22'},
	]
    return myArray;
}

//function bucleFor()

function CrearTabla(n){
    for(var i=0; i<n;i++){
        CargaDatos(i)
        console.log(i+10)
    }
};
export default CrearTabla;

/*function CrearTabla(datos,n){
    var data = datos;
    for(var i=0; i<n;i++){
        document.write("<H1"+i)
    }
};
export default CrearTabla;*/






/*export function CrearTabla(data){
		var table = document.getElementById('myTable')

		for (var i = 1; i < data.length; i++){
			var row = `<tr>
			<td>${i}</td>
			<td>${data[i].codigo}</td>
			<td>${data[i].asignatura}</td>
            <td>${data[i].tipo}</td>
            <td>${data[i].fecha}</td>
			</tr>`
			table.innerHTML += row
		}
	}*/



/*myArray=[
        {'codigo':'BAIN085', 
        'asignatura':'Calculo en varias variables',
        'tipo':'Prueba',
        'evaluacion':{'fecha':{'PS1':{'dia':11,'mes':10,'año':22},'hora':{'hrs':17,'min':00,'sgs':00},
                           'PS2':{'dia':17,'mes':10,'año':22},'hora':{'hrs':17,'min':00,'sgs':00},
                           }}
                        },
        {'codigo':'BAIN072', 
        'asignatura':'Ecuaciones diferenciales', 
        'tipo':'Prueba', 
        'evaluacion':{'fecha':{'PS1':{'dia':05,'mes':10,'año':22},'hora':{'hrs':17,'min':00,'sgs':00},
                           'PS2':{'dia':31,'mes':11,'año':22},'hora':{'hrs':17,'min':00,'sgs':00},
                           'PS3':{'dia':30,'mes':12,'año':22},'hora':{'hrs':17,'min':00,'sgs':00}}}
                        }
    ];*/