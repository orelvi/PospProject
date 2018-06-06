

function limpiarFormulario(inputs){
    
    inputs.forEach(function(v,i) {
        document.getElementById(v).value="";
    });
}

var estudiantes=[];

function agregarEstudiante(estudiante){

        estudiantes.push(estudiante);

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

    console.log(est);
    agregarEstudiante(est);
}
