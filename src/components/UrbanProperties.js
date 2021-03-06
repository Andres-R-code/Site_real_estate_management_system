import '../App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './owner.css'

function UrbanProperties() {

    const [urbanProperties, setUrbanProperties] = useState(null)
    const [table, setTable] = useState(null)
    const [search, setSearch] = useState("")

    const searchPeticions = async () => {
        await axios.get("https://management-properties.herokuapp.com/urban-properties/")
            .then(response => {
                console.log(response.data)
                setUrbanProperties(response.data);
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
                data.id_cadastral.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.address.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.registration_real_estate.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.tipe.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.department.toString().toLowerCase().includes(enteredSearch.toLowerCase())
            ) {
                return data
            }
        });
        setUrbanProperties(searchResult);
    }

    useEffect(() => {
        searchPeticions()
    }, [])


    return (
        <section className='section'>
            <div className='col-md-12 mb-4 text-center'>
                <h3 className='main-heading'>Buscador de predios urbanos</h3>
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

            <div className='wrapper'>
                <div className='col-md-12 mb-4 text-center vstack gap-3'>
                    {urbanProperties != null ? (

                        urbanProperties.map((urbanProperty => (
                            <div key={urbanProperty.code}>

                                <Link to={`/predio-urbano/${urbanProperty.code}`}>
                                    <p class="bg-light border">Direccion: {urbanProperty.address} {urbanProperty.city}  / C??dula Catastral {urbanProperty.id_cadastral} / Tipo: {urbanProperty.tipe}</p>
                                </Link>
                            </div>
                        )
                        ))) : ('There are no urban properties')
                    }
                </div>
            </div>
        </section>
    )

}

export default UrbanProperties