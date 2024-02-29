import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { getGifs } from '../hepers/getGifs'



export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('useEffect')
        getGifs(category)
    }, [])



    return (
        <div>
            <h3 className='title'>{category}</h3>


            <li>Hola Mundo</li>
            {counter}<br />
            <button onClick={() => setCounter(counter + 1)}>counter + 1</button>


        </div>
    )
}



GifGrid.propTypes = {
    category: PropTypes.array.isRequired
}