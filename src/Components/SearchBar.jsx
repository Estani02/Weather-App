import { useState } from "react";
import s from './Search.module.css'

export default function SearchBar({onSearch}){

    const [city, setCity]= useState('')

    return(
        <form className={s.contenedor} onSubmit={(e)=>{
            e.preventDefault();//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
            onSearch(city);
            setCity("")
        }}> 
            <input
            className={s.input} 
            type="text" 
            placeholder="Ciudad..."
            value={city}
            onChange={e => setCity(e.target.value)}// "e.target" es el elemento que esta disparando el evento en el input y el ".value" toma lo que esta escrito en el input
            />
            <input className={s.submit} type="submit" value="Agregar" />
        </form>
    )
}
