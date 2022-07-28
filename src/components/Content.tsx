import React, {useContext} from "react";
import '../App.css';
import {DataContext} from "./dataContext";
import {DataContextProps} from './dataContext'


const Content: React.FC = () => {
    const value = useContext<DataContextProps | null>(DataContext);
    return(
        <div className='dashboard-content'>
            <h1>Animal Details</h1>
            <div className='animal-details'>
            {
                value?.data.map(el => {
                return(
                    <div className="card dashboard-content-card" key={el.id}>
                        <h3>Id: {el.id}</h3>
                        <h3>Name: {el.name}</h3>
                        <h4>Price: {el.price}</h4>
                    </div>
                )
                })
            }
            </div>
        </div>
    )
}
export default Content;