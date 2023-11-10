class Persona{
    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad= edad;
    
    }

    presentarse(){
        console,log('Hola ${this.nombre} tengo ${this.edad}');
    }
}
const persona1= new Personal('Sofia, 15')
persona1,presentarse();