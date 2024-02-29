import { PropTypes } from 'prop-types'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        if(inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
    return(
        <div className=' '> 
            <form onSubmit={onSubmit}>
                <input 
                    className='form-control form-control-lg '
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />

        </form>

        </div>
      
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
