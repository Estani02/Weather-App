import { Route, Routes } from 'react-router-dom';

import './App.css';
import Cards from './Components/Cards';
import Nav from './Components/NavBar';
import MoreInfo from './Components/MoreInfo';
import About from './Components/About';
import { useState } from 'react';


function App() {

  const [cities, setCities]= useState([])

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => id !== c.id))
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  

  return (
    <div className="App">
      
       <Nav onSearch={onSearch}/>  {/* Para que se renderice el nav siempre lo pongo por fuera de las etiquetas "Routes" */}

      <Routes>
        <Route exact path='/' element={<Cards cities={cities} onClose={onClose}/>} />
        <Route exact path='/ciudad/:id' element= { <MoreInfo onFilterArray={(id)=>onFilter(id)}/>} />
        <Route exact path='/about' element={<About />}/>
      </Routes> 
    </div>
  );
}

export default App;
