var hospital = {
    nombre: "Perito Moreno",
    direccion: "España 1234",
    antiguedad: "35 años"
};
var humanos = [{
    doctores: {
        doctor1: {
            nombre: "Carlos",
            apellido: "Gonzales",
            edad: "38 años",
            sexo: "masculino",
            ocupacion: "Cardiologo",
            sueldo: 70000,
            horas_semanales: "72hs"
        },
        doctor2: {
            nombre: "Marcelo",
            apellido: "Perez",
            edad: "37 años",
            sexo: "masculino",
            ocupacion: "Radiologo",
            sueldo: 40000,
            horas_semanales: "48hs"
        },
        doctor3: {
            nombre: "Mariano",
            apellido: "Garcia",
            edad: "38 años",
            sexo: "masculino",
            ocupacion: "Cirujano",
            sueldo: 90000,
            horas_semanales: "72hs"
        }
    }
}, {
    enfermeros: {
        enfermero1: {
            nombre: "Marcela",
            apellido: "Rodrigez",
            edad: "27 años",
            ocupacion: "Enfermera",
            rango_de_enfermeria: "segunda clase",
            estudios: "Licenciatura en enfermeria",
            sueldo: 30000,
        },
        enfermero2: {
            nombre: "Mariana",
            apellido: "Juarez",
            edad: "23 años",
            ocupacion: "Enfermera",
            rango_de_enfermeria: "tercera clase",
            estudios: "4 año de enfermeria",
            sueldo: 23000,
        },
        enfermero3: {
            nombre: "Andres",
            apellido: "Rodriguez",
            edad: "24 años",
            ocupacion: "Enfermero",
            rango_de_enfermeria: "tercera clase",
            estudios: "4 año de enfermeria",
            sueldo: 23000,
        },
        enfermero4: {
            nombre: "Carlos",
            apellido: "Hernandes",
            edad: "27 años",
            ocupacion: "Enfermero",
            rango_de_enfermeria: "primera clase",
            estudios: "Doctorado en enfermeria",
            sueldo: 40000,
        }
    }
}, {
    pacientes: {
        paciente1: {
            nombre: "Hector",
            apellido: "Suarez",
            edad: "53 años",
            ocupacion: "Carpintero",
            sueldo: 29000,
            enfermedad: "cancer de pulmon",
            obraSocial: "O.S.D.E."
        },
        paciente2: {
            nombre: "Roberto",
            apellido: "Ramirez",
            edad: "45 años",
            ocupacion: "Albañil",
            sueldo: 24000,
            enfermedad: "cancer de higado",
            obraSocial: "O.S.D.E."
        },
        paciente3: {
            nombre: "Cintia",
            apellido: "Gomez",
            edad: "25 años",
            ocupacion: "Estudiante",
            sueldo: 12000,
            enfermedad: "Apendicitis",
            obraSocial: "O.S.D.E."
        }
    }
}];
var myJSON = JSON.stringify(humanos);
document.getElementById("prueba").innerHTML = myJSON;