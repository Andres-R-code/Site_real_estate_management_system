import '../App.css'
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './owner.css'


function RuralProperties() {

    const [ ruralProperties, setRuralProperties] = useState(null)
    const [ table, setTable] = useState(null)
    const [ search, setSearch] = useState("")

    const searchPeticions = async() => {
        await axios.get("https://management-properties.herokuapp.com/rural-properties/")
        .then(response => {
            console.log(response.data)
            setRuralProperties(response.data);
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
                data.id_cadastral.toString().toLowerCase().includes(enteredSearch.toLowerCase()) 
                ||
                data.registration_real_estate.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.tipe.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.name.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                ||
                data.department.toString().toLowerCase().includes(enteredSearch.toLowerCase())
                )
            {
                return data
            }
        });
        setRuralProperties(searchResult);
    }

    useEffect(() => {
        searchPeticions()
    }, [])


    return (
        <section className='section'>
            <div className='col-md-12 mb-4 text-center'>
                <h3 className='main-heading'>Buscador de predios rurales</h3>
                <div className='underline mx-auto'></div>
            </div>

            <div className="containerInput"> 
                <input
                    className="form-control inputBuscar"
                    value={search} 
                    placeholder="Ingresa algun dato del predio"
                    onChange = {handlechange}
                />
            </div>

                
                <div className='wrapper'>
                    <div className='col-md-12 mb-4 text-center vstack gap-3'>
                        {ruralProperties &&
                                ruralProperties.map((ruralProperty => (
                                    <div key={ruralProperty.code}>
                                        <Link to={`/predio-rural/${ruralProperty.code}`}>
                                            <p class="bg-light border">Nombre: {ruralProperty.name} / Cédula Catastral {ruralProperty.id_cadastral} / Tipo: {ruralProperty.tipe}</p>
                                        </Link>
                                    </div>
                            )
                            ))
                            }
                    </div>
                </div>
        </section>
    )

}

export default RuralProperties