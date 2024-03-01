import { PropTypes } from 'prop-types'

export const suma = (resultado) => {
    let numero = 0
    typeof resultado === 'number' &&  resultado > 0  ?  'mayor' : 'menor'
    numero = resultado > 0 ? resultado + 1 : resultado - 1
    console.log(numero)
}


suma.PropTypes = {
    
    resultado: PropTypes.number.isRequired,
}


