import 'colors'
import inquirer from 'inquirer'


const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '7',
                name: `${'7.'.green} Salir`
            },
        ]

    }
]



export const inquirerMenu = async() => {
    console.clear()
    
    console.log('========================='.yellow);
    console.log('  Seleccione una opción'.green);
    console.log('=========================\n'.yellow);

    const { option } = await inquirer.prompt(questions) 

    return option
}



const pausaQuestions = {
    type: 'input',
    name: 'enter',
    message: `Presione ${'Enter'.green} para continuar...`.bold
}

export const pausa = async () => {
    console.log('\n');
    await inquirer.prompt(pausaQuestions)
}


export const leerInput = async (message) => {
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate( value ) {
            if (value.length === 0) {
                return 'Por favor ingrese un valor'
            }
            return true
        }
    }

    const { desc } = await inquirer.prompt(question) 

    return desc

}

export const listadoTareasBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        return {
            value: tarea.id,
            name: `${((i + 1) + '.') .green } ${tarea.desc}`
        }
    })

    const questions = {
        type: 'list',
        name: 'id',
        message: 'Seleccione la tarea a borrar',
        choices
    }

    const { id } = await inquirer.prompt(questions) 

    return id

}


export const confirm = async (message) => { 
    const questions = {
        type: 'confirm',
        name: 'ok',
        message
    }
    const { ok } = await inquirer.prompt(questions) 

    return ok
}

export const mostrarListadoChecklist = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        return {
            value: tarea.id,
            name: `${((i + 1) + '.').green} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false,
        }
    })

    const questions = {
        type: 'checkbox',
        name: 'id',
        message: 'Selecciones',
        choices
    }

    const { id } = await inquirer.prompt(questions) 

    return id

}