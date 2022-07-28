import React, {useContext} from "react";
import '../App.css';
import {DataContext} from "./dataContext";
import {DataContextProps} from './dataContext'

const Nav: React.FC = () => {
    const value = useContext<DataContextProps | null>(DataContext);
    return(
        <div className='nav navbar navbar-dark'>
            <h1>Animal <span> Planet </span></h1>
            <h4> <span>Total Animals we got: </span>{value?.data.length}</h4>
            <button className='button nav-button'
                onClick={() => value?.setShow('show')}
            >Add Animal</button>
        </div>
    )
}
export default Nav;