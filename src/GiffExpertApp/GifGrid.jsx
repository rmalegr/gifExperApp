
import { PropTypes } from 'prop-types'
import { useFetchGifs } from '../hooks/UseFetchGifs'
import { GifItem } from './index'


export const GifGrid = ({ category }) => {

    const { images, isLoading  } = useFetchGifs( category )

    console.log({ images , isLoading })

    return (
        
        <div>
            <h3 className='title'>{category}</h3>
            <div className='card-grid' >
                {
                    isLoading && (<h2>Cargando...</h2>)
                }
                {
                    images.map(( image ) => (
                        <GifItem 
                            key={image.id}
                            {...image}     
                        />
                    ))
                        
                }
            </div>      
        </div>
    )
}



GifGrid.propTypes = {
    category: PropTypes.array.isRequired
}