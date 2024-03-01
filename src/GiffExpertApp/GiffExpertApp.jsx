import { useState } from 'react'
import { AddCategory, GifGrid } from './index';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    //onAddCategory nos permite agregar una nueva categoria a la lista de categorias.
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }


    //onRemoveCategory nos permite eliminar una categoria de la lista de categorias.
    //Eliminamos la categoria que se pasa como parametro.
    //setCategories nos permite actualizar el estado de las categorias.
    //setCategories(categories.filter(c => c !== category));
    // console.log(categories);
    // categories.forEach(category => console.log('Utilizando el ForEach', category));
    //listado de Gif

    return (

        <div className='container mt-5'>
            <div className="d-flex flex-row mb-3">
                <div className="p-2">Bienvenidos | </div>
                <div className="p-2">Buscar Memes | </div>
                <div className="p-2">Salir</div>
            </div>

            <h1 >GifApp : </h1>
            <hr />
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
                    <>
                        {
                            categories.map((categoria) => (
                                <GifGrid key={categoria}
                                    category={categoria}
                                />
                            ))

                        }
                    </>
        </div>


    )
}