
class Comments {
    constructor({
        content,
        studentName,
        studentRole = "students", //lo único que puede no ser obligatorio ya que, por defecto, serán los estdiantes pero si algún profesor pone un comentario, queremos que sea "distinto"
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0; //podemos crear atributos sin tener que lamarlos en el constructor
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")")
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}


const { name } = require("pug/lib");

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

//Prototypes con la sintaxis de clases

class Student2 {
    constructor ({ //tener lo parámetros en forma de paréntesis es un problema porque nos obliga a acordarnos del orden en que mandar los datos del estudiante pero si creamos un parámetro en forma de objeto, este problema desaparece
        name, 
        age, 
        cursosAprobados = [],//es un array vacio porque si son nuevos, no tienen cursos aprobados y por tanto está a cero
        email,
    }) { //en las clases, si queremos crear prototypes debemos usar la palabra reservada ' constructor ' la cual tiene la misma sintaxis que si fueran los paréntesis dentro de una function
        this.name = name;
        this.age = age; 
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCursos(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso); //this hace referencia a Student2 y le estamos diciendo dentro de este Student2, en el método aprobar cursos, que añada el nuevo curso
    }
}

// const antonia = new Student2 (// esta sería la forma de crear un nuevo estudiante sin tener los argumentos de la clase en forma de objeto, nos tendríamos que acordar del orden de los elementos
//     "Antnia",
//     34,
//     [
//         "Curso de Programación Básica",
//         "Responsive Design",
//         "MObile First",
//     ],
// )
const antonia = new Student2 ( {//forma de tener los nuevo sestudiantes, aunque es un poco mas larga, da igual el orden en que tengamos los atributos o si alguno de ellos no lo completamos, lo dejará como un string vacio
    age: 34,    
    name: "Antnia",
    email: "antonia@antnia.com",
    cursosAprobados: [
        "Curso de Programación Básica",
        "Responsive Design",
        "Mobile First",
    ],
});


//Competición entre objetos literales, prototypes y clases. Ventajas de desventajas

//Con objetos Literales

// const juan = {
//     name: "Juan DC",
//     username: "juandc",
//     points: 100,
//     socialMedia: {
//         twitter: "juanitodc",
//         instagram: "juanitodc",
//         facebook: undefined,
//     },
//     approvedCurses: [
//         "Curso definitivo de CSS Y HTML",
//         "Curso práctico de CSS y HTML",
//     ],
//     learningPaths: [
//         name: " Escuela de desarrollo web"
//         courses: [
//             "Curso definitivo de CSS Y HTML",
//             "Curso práctico de CSS y HTML",
//         ],
//     ],
// }
//el trabajar con objetos literales es muy visual perono tiene una forma escalable ya que si tenemos 1000 estudiantes distintos, tenemos nuevas rutas y modificamos las antiguas, tnemeos que ir modificándolas una a una

//Con clases
//reto -> crear una clase con las LearningPath y una instancia para cada una de las escuelas que vamos a necesitar. Tmabién crear una clase con los cursos y sus parámetros

class Courses {
    constructor ({
        name,
        teacher,
        level,
        hoursTheory,
        hoursPractice,
        classes = [],
        isFree = false, //por defecto, los cursos no son gratis a no ser que lo pongamos nosotros
        lang = "spanish",
    }) {
        this.name = name;
        this.teacher = teacher;
        this.level = level;
        this.hoursTheory = hoursTheory;
        this.hoursPractice = hoursPractice;
        this.classes = classes;
        this.lang = lang;
    }
}

const cursoBásicoDePython = new Courses ({ //ejemplo de una instancia
    name: "Curso Básico de Python",
    teacher: "Diego De Granda",
    level: "Basic",
    hoursTheory: 2,
    hoursPractice: 8, 
    lang: "english", //imaginemos
})

class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaJS = new LearningPath ({ //ejemplo de una instancia
    name: "Escuela de Desarrollo Web",
    courses: [
        "Curso Básico Teórico de JS",
        "Curso Básico Práctico de JS",
        "Curso Medio Práctico de JS",
        "Curso Avanzado Práctico de JS",
    ]
});

class Student3 {
    constructor ({
        name, 
        email,
        userName,
        twitter = undefined,// las redes son undefined porque pueden no tener y solo serán definidas si el estudiante mismo la pone
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [],
    }) { //cuando acabamos una linea que empieza por this. , siempre terminamos con ' ; ' nunca con ' , ' aunque hayan más lineas después
        this.name  = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            // twitter: twitter, = twitter
            twitter,
            facebook,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath  = learningPath;
    }

    postComment(commentContent) {
        const comment = new Comments ( {
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
} 

//creación de los distintos tipos de estudiantes de platzi: free, basic, expert
//el extends lo colocamos para saber de que clase o método queremos heredar los atributos y métodos y en este caso es de Student3

class FreeStudent3 extends Student3 {
    constructor(props){
        super(props);//super() nos permite llamar al constructor de nuestra clase madre
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);//podemos acceder a this.approvedCourses gracias a que estamos extendiendo la clase Student3 ya ya que en esta clase no la tenemos definida pero con el método super podemos acceder 
        } else {
            console.warn("Lo siento, " + this.name + " no es de acceso free.")
        }
    }
}

class BasicStudent3 extends Student3 {
    constructor(props){
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo siento, " + this.name + " no es de acceso a los cursos de inglés.")
        }
    }
}

class ExpertStudent3 extends Student3 {
    constructor(props){
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}
class TeachersStudents extends Student3 {
    constructor(props){
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
    postComment(commentContent) {
        const comment = new Comments ( {
            content: commentContent,
            studentName: this.name,
            studentRole: "Teacher",
        });
        comment.publicar();
    }
}


const marianela = new ExpertStudent3 ({
    name: "Marianela",
    userName: "Mary",
    email: "marianela12@gmail.com",
    instagram: "marianela_5",
    learningPath: [
        escuelaJS,
    ],
    courses: {
        cursoBásicoDePython,
    }
})