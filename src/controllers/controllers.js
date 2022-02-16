import axios from 'axios'


// Controllers of Owners

const getOwners = async (state) => {
    const peticion = await axios.get("http://127.0.0.1:8000/owners/")
    console.log(peticion.data)
    state(peticion.data)
}

const getOwner = async (id, state) => {
    const peticion = await axios.get(`https://management-properties.herokuapp.com/owners/${id}`)
    console.log(peticion)
    state(peticion.data)
}

const getOwnersPropertyRural = async (id, state) => {
    const peticion = await axios.get(`http://127.0.0.1:8000/rural-properties/?owners=${id}`)
    console.log(peticion)
    state(peticion.data)
}

// Controllers rural properties

const getRuralProperties = async (state) => {
    const peticion = await axios.get("http://127.0.0.1:8000/rural-properties/")
    console.log(peticion.data)
    state(peticion.data);
}

const getRuralProperty = async (id, state) => {
    const peticion = await axios.get(`https://management-properties.herokuapp.com/rural-properties/${id}`)
    console.log(peticion)
    state(peticion.data)
}

const propertyOwnersRural = async (id, state) => {
    const peticion = await axios.get(`http://127.0.0.1:8000/rural-properties/?owners=${id}`)
    console.log(peticion)
    state(peticion.data)
}


// Controllers urban properties

const getUrbanProperties = async (state) => {
    const peticion = await axios.get("http://127.0.0.1:8000/urban-properties/")
    console.log(peticion.data)
    state(peticion.data)
}

const getUrbanProperty = async (id, state) => {
    const peticion = await axios.get(`https://management-properties.herokuapp.com/urban-properties/${id}`)
    console.log(peticion)
    state(peticion.data)
}

const propertyOwnersUrban = async (id, state) => {
    const peticion = await axios.get(`http://127.0.0.1:8000/urban-properties/?owners=${id}`)
    console.log(peticion)
    state(peticion.data)
}


export {
    getOwners, 
    getOwner, 
    getOwnersPropertyRural,
    getRuralProperties,
    getRuralProperty,
    propertyOwnersRural,
    getUrbanProperties,
    getUrbanProperty,
    propertyOwnersUrban 
}