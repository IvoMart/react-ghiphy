import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategories = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handlerChanges =  (e)=>{setInputValue(e.target.value)}
    const handlerSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((categ)=>[inputValue, ...categ,]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handlerSubmit}>
            <h4>Add Categories</h4>
            <input type="text" value={inputValue} onChange={handlerChanges} />
        </form>
    )
}
AddCategories.propTypes={
    setCategories: PropTypes.func.isRequired,
}
