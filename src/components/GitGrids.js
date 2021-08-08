import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
//import { getGits } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GitGrids = ({ category }) => {

    // const [images, setImages] = useState([])

    // // const [count, setCount] = useState(0);
    // useEffect ( () => {
    //     getGits(category)
    //         .then ( setImages);
    // }, [category])

    
    const {data:images, loading} =  useFetchGifs(category);
    
    
    
    return (
        <>
        <h3 className="animate__animated animate__bounce">  { category } </h3>

        {/* {loading ? 'Cargando...' : 'Data cargando' } */}
        
        {loading && <p>Loading</p>}

        <div className="card-grid">
            
          
                {
                    images.map(img => ( 
                        <GifGridItem 
                        key = {img.id}
                         { ...img }
                        />
                        // <il key={ id }>{ title }</il>
                    ))
                }
            

            {/* <h3>{ count }</h3>
            <button onClick={()=> setCount( count + 1 )}></button>*/}  
        </div> 
        </>
    )
}
