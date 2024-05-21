function printToConsole(constructor:Function){
    console.log(  constructor);
}

const printToConsoleConditional=( print: boolean = false ): Function =>{
   if (print){
    return printToConsole;
   }else{
    return ()=>{}
   }
}


const bloquearPrototipo = function(constructor:Function){
    Object.seal( constructor ) // esta y la siguiente propiedad impide que se le agregue una propiedad nuevaa nuestro objeto
    Object.seal( constructor.prototype ) // si las comentas y corres el codigo que se encuentra en el index te añade la propiedad de customeName Pikashu

}

function CheckValidPokemonId(){
    return function( target:any, proprertyKey:string, descriptor:PropertyDescriptor){
      
        const originalMethod = descriptor.value
        
        descriptor.value=(id:number)=> {
            if(id < 1 || id > 800){
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            }else{
                return originalMethod(id)
            }
        }
        //descriptor.value=()=> console.log('hola mundo');
    }
}
function readonly( isWritable: boolean = true ):Function {
    return function(target: any, propertyKey: string ){
        
        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this )
                return 'Miguel'
            },
            set( this, val ){
                // console.log(this, val )
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        
        return descriptor;
    }
}
/* @printToConsole */
@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon{
  
    @readonly(true)
    public publicApi:string='https://pokeapi.co'
    
    constructor(
        public name:string
    ) { }

    @CheckValidPokemonId()
    savePokemonToDB( id:number){
        console.log(`Pokemon guardado a la base de datos ${id}`);
        
    }
}