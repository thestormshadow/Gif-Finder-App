import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'
export const Giffinder = () => {
    
    const [categories, setCategory] = useState([]);

    return(
        <>
            <h2>Gif Finder App</h2>
            <hr/>

            <AddCategory setCategory={setCategory} />

            <ol>
                {
                    categories.map((category,i)=> <GifGrid key={category} category={category}/>)
                }
            </ol>

        </>
    )
}
