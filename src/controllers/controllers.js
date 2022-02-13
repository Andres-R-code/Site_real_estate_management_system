import axios from 'axios'

const getOwners = async (state) => {
    const peticion = await axios.get("http://127.0.0.1:8000/owners/")
    console.log(peticion.data)
    state(peticion.data)
}

const getOwner = async (id, state) => {
    const peticion = await axios.get(`http://127.0.0.1:8000/owners/${id}`)
    console.log(peticion)
    state(peticion.data)
}

const getOwnersPropertyRural = async (id, state) => {
    const peticion = await axios.get(`http://127.0.0.1:8000/rural-properties/?owners=${id}`)
    console.log(peticion)
    state(peticion.data)
}



export {
    getOwners, 
    getOwner, 
    getOwnersPropertyRural
}