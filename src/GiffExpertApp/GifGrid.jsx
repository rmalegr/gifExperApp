import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/UseFetchGifs'

export const GifGrid = ({ category }) => {

    const { images, isLoading  } = useFetchGifs( category )

    console.log({ images , isLoading })

    return (
        <div>
            <h3 className='title'>{category}</h3>
            <div className='card-grid' >
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