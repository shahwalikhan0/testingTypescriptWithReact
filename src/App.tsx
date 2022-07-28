import React from 'react';
import './App.css';
import {DataProvider} from "./components/dataContext";
import Nav from './components/Nav';
import Content from "./components/Content";
import AddAnimal from "./components/AddAnimal";


function App() {
  return (
    <>
      <DataProvider>
        <div className="App">
            <Nav/>
            <div className="app-body">
                <Content/>
                <AddAnimal/>
            </div>
        </div>
      </DataProvider>
    </>
  );
}
export default App;
