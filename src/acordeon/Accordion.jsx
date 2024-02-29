//single selection 
//multiple selection 

import { useEffect, useState } from "react"
import data from "../utils/data";


function saludar() {
    console.log('Hola')
}

function Accordion() {
    useEffect(() => {
        console.log('me he renderizado ')
        saludar()
    }, [])


    const [select, setSelect] = useState(null)
    const handleSingleSelection = (getCurrentId) => {
        setSelect(
            getCurrentId === select ? null : getCurrentId)
    }
    console.log(select)
    return (<div className='wrapper'>
        <div className='accordian'>
            <h1>Preguntas y Res</h1>
            {
                data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className='item'>
                            <div className="title" onClick={() => handleSingleSelection(item.id)}>
                                <h2>{item.pregunta}</h2>
                                <span className="cursor"> {
                                    select === item.id ?
                                        '-' : '+'

                                } </span>

                            </div>
                            {

                                select === item.id ?
                                    <div className="content">
                                        <p>{item.respuesta}</p>

                                    </div>
                                    : null
                            }
                        </div>
                    ))
                ) : (
                    <h1>No hay datos</h1>
                )
            }
        </div>

    </div>)
}

export default Accordion