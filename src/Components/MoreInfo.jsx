import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import s from "./MoreInfo.module.css"



export default function MoreInfo(props) {
    let {id} = useParams()
    useEffect(() => {
      console.log('Información del país:', id, props.onFilterArray(id))
      setCity(props.onFilterArray(id))
    }, [])
    const [city, setCity] = useState(null)

  return (
<div className={s.contenedor}>
    <div className={s.titulo}>
    <h2>{city != null ? city.name : "cargando..."}</h2>
    </div>
        <div className={s.contenedorTxt}>
            <div>
              <b>Temperatura:</b> {city != null ? city.temp : "cargando..."} ºC
            </div>
            <div>
            <b>Clima:</b> {city != null ?  city.weather : "cargando..."}
            </div>
            <div>
            <b>Viento:</b> {city != null ?  city.wind : "cargando..."} km/h
            </div>
            <div>
            <b>Cantidad de nubes:</b> {city != null ?  city.clouds : "cargando..."}
            </div>
            <div>
            <b>Latitud:</b> {city != null ?  city.latitud : "cargando..."}º
            </div>
            <div>
            <b>Longitud:</b> {city != null ?  city.longitud : "cargando..."}º
            </div>

        </div>
</div>
  );
};
