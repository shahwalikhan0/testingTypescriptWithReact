import React, {useContext, useState} from "react";
import '../App.css';
import {DataContext, DataContextProps} from "./dataContext";

const AddAnimal:React.FC = () => {
    const value = useContext<DataContextProps | null>(DataContext);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number | undefined>(undefined);

    const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(!name || !price)
            return;
        let id:number = Number(value?.data.length);
        value?.setData([...value?.data, {id, name, price}]);
        setName('');
        setPrice(0);
    }

    const handleFormReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setName('');
        setPrice(0);
        value?.setShow('hide');
    }

    return(
        <div className={'add-animal-content ' + value?.show} >
            <h1>Add Animal</h1>
            <form className='add-animal-form'>
                <label>Name:</label>
                <input type='text' required={true}
                       value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Price:</label>
                <input type='number' required={true}
                          value={price ? price : '' } onChange={(e) => setPrice(Number(e.target.value))}/>
                <button className='button add-animal-form-button' type='submit'
                    onClick={(e) => handleFormSubmit(e)}
                >Add</button>
                <button className='button close-animal-form-button' type='reset'
                        onClick={(e) => handleFormReset(e)}
                >Close</button>
            </form>
        </div>
    )
}
export default AddAnimal;