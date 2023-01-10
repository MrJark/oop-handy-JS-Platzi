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

