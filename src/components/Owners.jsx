import '../App.css'
import axios from 'axios'
import React,{useEffect, useState} from 'react'


function Owners() {

    const [ ownerProperties, setOwnerProperties] = useState(null)
    const [ table, setTable] = useState(null)
    const [ search, setSearch] = useState("")

    const searchPeticions = async() => {
        await axios.get("http://127.0.0.1:8000/owners/")
        .then(response => {
            console.log(response.data)
            setOwnerProperties(response.data);
            setTable(response.data);
        }).catch( error => {
            console.log(error)
        })
    }

    const handlechange = hand => {
        setSearch(hand.target.value)
        dataFilter(hand.target.value)
    }

    const dataFilter =  (enteredSearch) => {
        let searchResult = table.filter((data) => {
            if ( 
                data.code.toString().toLowerCase().includes(enteredSearch.toLowerCase()) 
                ||
                data.names.toString().toLowerCase().includes(enteredSearch.toLowerCase()) 
                ||
                data.id_owner.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.email.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.tipe_owner.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                // ||
                // data.department.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                )
            {
                return data
            }
        });
        setOwnerProperties(searchResult);
    }

    useEffect(() => {
        searchPeticions()
    }, [])


    return (
        <>
        <h2>Administrador de Propietarios</h2>

            <div> 
                <input 
                    className='prueba'
                    value={search} 
                    placeholder="Ingresa algun dato del propietario"
                    onChange = {handlechange}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombres</th>
                        <th>Identificación</th>
                        <th>Email</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
            </table>

            { ownerProperties != null ? (

                ownerProperties.map((ownerProperty => (
                    <div key={ownerProperty.code}>
                        
                        <a href={`/propietario/${ownerProperty.code}`}>
                            <tbody>
                            <tr>
                                <td>{ownerProperty.code}</td>
                                <td>{ownerProperty.names}</td>
                                <td>{ownerProperty.id_owner}</td>
                                <td>{ownerProperty.email}</td>
                                <td>{ownerProperty.tipe_owner}</td>
                            </tr>
                            </tbody>
                        </a>
                    </div>
                )
                ))) : ('There are no rural properties')
            }
        </>
    )

}

export default Owners