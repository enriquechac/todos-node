import fs from 'fs'

const ruta = './db/data.json'

export const guardarData = ( data ) => {
    fs.writeFileSync(ruta, JSON.stringify( data ))
}

export const leerData = () => {

    if (fs.existsSync(ruta)) {
        null
    }

    const data = JSON.parse(fs.readFileSync(ruta, { encoding: 'utf-8' }))

    return data
}