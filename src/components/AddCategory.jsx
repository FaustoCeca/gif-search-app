import { useState } from "react"

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) {
           return Swal.fire('Attention', 'Nothing Found!', 'warning');
        };

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (      
    <form  onSubmit={ handleSubmit }>
        <input 
            type="text"
            placeholder="Search Gifs"
            value={ inputValue }
            onChange= { handleInputChange }
        />

    </form>
  )     
}
