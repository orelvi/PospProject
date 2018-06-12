

function limpiarFormulario(inputs){
    
    inputs.forEach(function(v,i) {
        document.getElementById(v).value="";
    });
}

var estudiantes=[];
var storage = window.localStorage;
 
 window.onload = function(){
    if (typeof(storage) !== "undefined") {
        var localEestudiantes = JSON.parse(storage.getItem("Estudiantes"));
       agregarEstudiante(localEestudiantes);

    } else {
        consol.log("Storage no soportado");
    }
    }  


function agregarEstudiante(estudiante){

    

        var tablaEstudiante= document.getElementById("tabla_estudiante")
        var tdNombre = document.createElement("td");
        var tdMatricula = document.createElement("td");
        var tdIdentificacion = document.createElement("td");

        var tr= document.createElement("tr");
        tdNombre.textContent= estudiante.nombre;
        tdMatricula.textContent= estudiante.matricula;
        tdIdentificacion.textContent= estudiante.identificacion;

        tr.appendChild(tdNombre);
        tr.appendChild(tdMatricula);
        tr.appendChild(tdIdentificacion);

        tablaEstudiante.appendChild(tr);

        //guardaEstudiante(estudiante);


}

//Leer los inputs y agregarlos a la tabla
function leerEstudiante(){
    var nombre =document.getElementById("nombre").value;
    var matricula =document.getElementById("matricula").value;
    var identificacion =document.getElementById("identificacion").value;

    var est = new Estudiante();
    est.nombre=nombre;
    est.matricula=matricula;
    est.identificacion=identificacion;

    limpiarFormulario(["nombre","matricula","identificacion"]);
    estudiantes.push(est);
    console.log(est);
    agregarEstudiante(est);
    guardaEstudiante(est);
   

}

function guardaEstudiante(){
    
    
    storage.setItem("Estudiantes",JSON.stringify(estudiantes));
    
    
}
