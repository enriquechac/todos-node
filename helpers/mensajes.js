import 'colors'
import { createInterface } from 'readline'

const mostrarMenu = () => {

    return new Promise((resolve) => {

        console.clear();
        console.log('========================='.yellow);
        console.log('  Seleccione una opción'.green);
        console.log('=========================\n'.yellow);
        
        console.log(`${'1.'.green} ${'Crear una tarea'.red}`);
        console.log(`${'2.'.green} ${'Listar tareas'.red}`);
        console.log(`${'3.'.green} ${'Listar tareas completadas'.red}`);
        console.log(`${'4.'.green} ${'Listar tareas pendientes'.red}`);
        console.log(`${'5.'.green} ${'Completar tarea'.red}`);
        console.log(`${'6.'.green} ${'Borrar una tarea'.red}`);
        console.log(`${'0.'.green} ${'Salir\n'.red}`);
    
        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        })    
        
        readline.question('Seleccione una opción -> '.green, (opt) => {
            readline.close()
            resolve(opt)
        })

    })


}


const pausa = () => {

    return new Promise((resolve) => {
        
        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        })    
        
        readline.question(`Presione ${'Enter'.green}`, (opt) => {
            readline.close()
            resolve(opt)
        })
    })

}

