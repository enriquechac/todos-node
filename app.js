import 'colors'
import { guardarData, leerData } from './helpers/guardarArchivo.js';

import { confirm, inquirerMenu, leerInput, listadoTareasBorrar, mostrarListadoChecklist, pausa } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';


const main = async () => {

    let opt = ''
    const tareas = new Tareas()
    const dataTareas = leerData()

    if (dataTareas) {
        tareas.cargarTareasFromArray(dataTareas)
    }


    do {
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción de la tarea')
                tareas.crearTarea(desc)
                break;
            case '2':
                tareas.listadoCompleto()
                break;
            case '3':
                tareas.listarPendientesCompletadas()
                break;
            case '4':
                tareas.listarPendientesCompletadas(false)
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids)
                break;
            case '6':

                const id = await listadoTareasBorrar(tareas.listadoArr)
                const ok = await confirm('Seguro quiere eliminar la tarea')
                if (ok) {
                    tareas.borrarTarea(id)
                }
                break;
            default:
                break;
        }

        guardarData( tareas.listadoArr );

        if(opt !== '7') await pausa()



    } while (opt !== '7');

}


main()