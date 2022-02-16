import '../App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './owner.css'


function Owners() {

    const [ownerProperties, setOwnerProperties] = useState(null)
    const [table, setTable] = useState(null)
    const [search, setSearch] = useState("")

    const searchPeticions = async () => {
        await axios.get("https://management-properties.herokuapp.com/owners/")
            .then(response => {
                console.log(response.data)
                setOwnerProperties(response.data);
                setTable(response.data);
            }).catch(error => {
                console.log(error)
            })
    }

    const handlechange = hand => {
        setSearch(hand.target.value)
        dataFilter(hand.target.value)
    }

    const dataFilter = (enteredSearch) => {
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
            ) {
                return data
            }
        });
        setOwnerProperties(searchResult);
    }

    useEffect(() => {
        searchPeticions()
    }, [])


    return (
        <div>
            <section className='section'>
            <div className='container'>
                <div className='col-md-12 mb-4 text-center'>
                    <h3 className='main-heading'>Administrador de Propietarios</h3>
                    <div className='underline mx-auto'></div>
                </div>

                <div className="containerInput">
                    <input
                        className="form-control inputBuscar"
                        value={search}
                        placeholder="Ingresa algun dato del predio"
                        onChange={handlechange}
                    />
                </div>
            </div>

            <div className='wrapper'> 
                <div className='col-md-12 mb-4 text-center'>
                        {ownerProperties != null ? (
                        ownerProperties.map((ownerProperty => (
                            <div key={ownerProperty.code}>
                                <a href={`/propietario/${ownerProperty.code}`}>
                                    <p class="bg-light border"> Nombres: {ownerProperty.names} / Identificacíon {ownerProperty.id_owner} /  Tipo: {ownerProperty.tipe_owner}</p>
                                </a>
                            </div>
                        )
                        ))) : ('There are no rural properties')
                        }
                </div>
            </div>
        </section>
        </div>
    )

}

export default Owners