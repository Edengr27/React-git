import { useEffect, useState } from "react"

import { getGits } from '../Helpers/getGifs';

export const useFetchGifs = (category) =>{

    const [state, setState] = useState({

        data:[],
        loading :true
    });

    useEffect( () =>{

        getGits(category)
            .then(imgs => {
               

                    console.log(imgs);
                    setState({

                        data:imgs,
                        loading: false 


                    });


                
                
            })

    }, [category])

    // setTimeout(() => {
        
    //     setState({

    //         data:[1,2,3,4,5,6,7],
    //         loading :false

    //     })


    // },3000);



    return state;

}