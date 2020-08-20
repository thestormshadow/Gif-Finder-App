import React,{ useState } from 'react'
import propTypes from 'prop-types'
    
export const AddCategory = ({setCategory}) => {
    
    const [inputValue,setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory(cats =>[inputValue, ...cats,]);
            setInputValue("");
        }
        
    }

    return (
        <>
            <form className="animate__animated animate__fadeInLeft" onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange}></input>
                <input type="submit" value="Buscar" />
            </form>
        </>
    )
        
}

AddCategory.propTypes = {
    setCategory: propTypes.func.isRequired
}
