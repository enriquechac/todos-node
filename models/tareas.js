import { Tarea } from "./tarea.js"


export class Tareas {
    
    _listado = {}

    
    constructor() {
        this._listado = {}
    }
    
    get listadoArr() {
        return Object.keys(this._listado).map( key => this._listado[key] )
    }

    cargarTareasFromArray( array = [] ) {
        array.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })        
    }


    crearTarea(desc = '') {
        
        const tarea = new Tarea( desc )

        this._listado[tarea.id] = tarea
    }

    borrarTarea( id = '') {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    } 

    listadoCompleto() {
        this.listadoArr.forEach((tarea, index) => {
            index = `${index + 1 + '.'}`.green
            const estado = (tarea.completadoEn) ?
                'Completada'.green :
                'Pendiente'.red
            
            console.log(`${index} ${tarea.desc} ${'::'.yellow} ${estado} `)
            
        })
    }

    listarPendientesCompletadas( completadas = true ) {
        let index = 0;
        this.listadoArr.forEach((tarea, i) => {
                
            index = `${i + 1 + '.'}`.green
            const estado = (tarea.completadoEn) ?
                'Completada'.green :
                'Pendiente'.red
            
            if (completadas) {
                if (tarea.completadoEn) {
                    console.log(`${index} ${tarea.desc} ${'::'.yellow} ${estado} `)
                }
            } else {
                if (!tarea.completadoEn) {
                    console.log(`${index} ${tarea.desc} ${'::'.yellow} ${estado} `)
                }
            }
            
        })
        
    }

    toggleCompletadas( ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id]
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }

            this.listadoArr.forEach( tarea => {
                if (!ids.includes(tarea.id)) {
                    this._listado[tarea.id].completadoEn = null
                }
            })

        })
    }


}