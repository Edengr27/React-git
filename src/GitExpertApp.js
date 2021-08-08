import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrids } from './components/GitGrids';

export const GitExpertApp = () => {

    //const categories = ['One Push','Samurai X','Dradon Ball'];
    const [categories, setCategories] = useState(['One Push']);

    // const handleAdd = () =>{
    //     setCategories(['HunterXHunter',...categories]);
    //     setCategories(  cats => [...cats,'HunterXHunter']);
    // }


    return (
        <div>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category =>(

                        <GitGrids 
                        key= {category}
                        category= { category } />

                        //return <li key={category}>{category}</li>
                    ))

                }
            </ol>




        </div>
    )
}
