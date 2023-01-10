//esto es un objeto literal y aunque no tenga nada, JS a los objetos les añade un __proto__
const chema = {
   name: "Chema",
   age: 25,
   cursosAprobados: [
    "Curso de Growth para Startups",
    "Curso de Email Marketing",
   ],
   aprobarCursos (nuevoCurso) { //es un método que se crea a través de una función para que apruebe cursos 
    this.cursosAprobados.push("De cero a tus primeros Usuarios"); //this. hace referencia al propio chema
   },
};

//creación de un prototype

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age; 
    this.cursosAprobados = cursosAprobados;
    //this.aprobarCursos = function (nuevoCurso) { //esto nos crea un método dentro del prototype pero vamos a trabajar ahora de otra manera
    //    this.cursosAprobados.push(nuevoCurso);
    //}
}

//con esto estamos creando un método fuera de la función Student pero al poner la herramienta .prototype me lo acepta
Student.prototype.aprobarCursos = function (nuevoCurso) { 
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student ( //esto es un prototype porque esto se crean con la palabra reservada ' new '
    "Juanita Margarita",
    17,
    [
        "Curso de Growth Marketing",
        "Curso de Responsve Design",
    ],
);//tiene 3 parámetros porque así lo hemos decidido cen la función Student, le damos estos 3 parámetros
