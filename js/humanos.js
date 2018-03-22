var hospital = {
    nombre: "Perito Moreno",
    direccion: "España 1234",
    antiguedad: "35 años"
};
var humanos = [{
        tipoUsuario: "Doctor",
        nombre: "Carlos",
        apellido: "Gonzales",
        edad: "38 años",
        sexo: "Masculino",
        ocupacion: "Cardiologo",
        sueldo: 70000,
        horasSemanales: "72hs"
    },
    {
        tipoUsuario: "Doctor",
        nombre: "Marcelo",
        apellido: "Perez",
        edad: "37 años",
        sexo: "Masculino",
        ocupacion: "Radiologo",
        sueldo: 40000,
        horasSemanales: "48hs"
    },
    {
        tipoUsuario: "Doctor",
        nombre: "Mariano",
        apellido: "Garcia",
        edad: "38 años",
        sexo: "Masculino",
        ocupacion: "Cirujano",
        sueldo: 90000,
        horasSemanales: "72hs"
    },
    {
        tipoUsuario: "Enfermero",
        nombre: "Marcela",
        apellido: "Rodrigez",
        edad: "27 años",
        ocupacion: "Enfermera",
        rangoDeEnfermeria: "Segunda clase",
        sueldo: 30000,
        horasSemanales: "60hs",

    },
    {
        tipoUsuario: "Enfermero",
        nombre: "Mariana",
        apellido: "Juarez",
        edad: "23 años",
        ocupacion: "Enfermera",
        rangoDeEnfermeria: "Tercera clase",
        sueldo: 23000,
        horasSemanales: "40hs",
    },
    {
        tipoUsuario: "Enfermero",
        nombre: "Andres",
        apellido: "Rodriguez",
        edad: "24 años",
        ocupacion: "Enfermero",
        rangoDeEnfermeria: "Tercera clase",
        sueldo: 23000,
        horasSemanales: "40hs",
    },
    {
        tipoUsuario: "Enfermero",
        nombre: "Carlos",
        apellido: "Hernandes",
        edad: "27 años",
        ocupacion: "Enfermero",
        rangoDeEnfermeria: "Primera clase",
        sueldo: 40000,
        horasSemanales: "60hs",
    },
    {
        tipoUsuario: "Paciente",
        nombre: "Hector",
        apellido: "Suarez",
        edad: "53 años",
        ocupacion: "Carpintero",
        sueldo: 29000,
        enfermedad: "Cancer de pulmon",
        obraSocial: "O.S.D.E."
    },
    {
        tipoUsuario: "Paciente",
        nombre: "Roberto",
        apellido: "Ramirez",
        edad: "45 años",
        ocupacion: "Albañil",
        sueldo: 24000,
        enfermedad: "Cancer de higado",
        obraSocial: "O.S.D.E."
    },
    {
        tipoUsuario: "Paciente",
        nombre: "Cintia",
        apellido: "Gomez",
        edad: "25 años",
        ocupacion: "Estudiante",
        sueldo: 12000,
        enfermedad: "Apendicitis",
        obraSocial: "O.S.D.E."
    }

];
function makeHospital(data) {
    var tabla = '<table border=1 style="text-align:center">';
    tabla += `<tr><th>Info</th><th>Hospital</th></tr>`

    tabla += '<tr><td>Nombre</td><td>'+data.nombre+'</td></tr><tr><td>Direccion</td><td>'+data.direccion+'</td></tr><tr><td>Antiguedad</td><td>'+data.antiguedad+'</td></tr>'

    tabla += '</table>'

    return tabla
}
function makeTable(humanos) {
    var resultado = '<table border=1 style="text-align:center">';
    resultado += `
        <th>Perfil</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Ocupacion</th>
        <th>Sueldo</th>
        <th>Horas Trabajadas</th>
        <th>Nivel Enfermeria</th>
        <th>Enfermedad</th>
        <th>Obra Social</th>`

    for (let i = 0; i < humanos.length; i++) {
        resultado += '<tr><td>' + humanos[i].tipoUsuario + '</td>';

        resultado += '<td>' + humanos[i].nombre + '</td>';

        resultado += '<td>' + humanos[i].apellido + '</td>';

        resultado += '<td>' + humanos[i].edad + '</td>';

        resultado += '<td>' + humanos[i].ocupacion + '</td>';

        resultado += '<td>' + "$" + humanos[i].sueldo + '</td>';

        if (humanos[i].horasSemanales) {
            resultado += '<td>' + humanos[i].horasSemanales + '</td>';

        } else {
            resultado += '<td>-</td>'
        }

        if (humanos[i].rangoDeEnfermeria) {
            resultado += '<td>' + humanos[i].rangoDeEnfermeria + '</td>';
        } else {
            resultado += '<td>-</td>'
        }

        if (humanos[i].enfermedad) {
            resultado += '<td>' + humanos[i].enfermedad + '</td>';
        } else {
            resultado += '<td>-</td>'
        }

        if (humanos[i].obraSocial) {
            resultado += '<td>' + humanos[i].obraSocial + '</td>';
        } else {
            resultado += '<td>-</td>'
        }

    }

    resultado += "</tr> </table>";
    return resultado
}
var result = makeTable(humanos);
document.getElementById("prueba").innerHTML = result;
var data = makeHospital(hospital)
document.getElementById("hospital").innerHTML = data;