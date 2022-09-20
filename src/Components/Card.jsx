import { Link } from "react-router-dom";
import s from "./Card.module.css"

export default function Card({max, min, id, name, img, onClose}){
    return(
      <div className={s.contenedor}>
        <button className={s.boton} onClick={onClose}>X</button>
        
        <div className={s.contenedortitulo}>
          <Link className={s.Linktitulo} to={`/ciudad/${id}`}>
            <h5>{name}</h5>
          </Link>
        </div>

        <div className={s.contenedorTxt}>
        <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="not found" />
          <div className={s.contenedorTemperatura}>
            <b>Min</b>
            <p>{min}°</p>
          </div>

          <div className={s.contenedorTemperatura}>
            <b>Max</b>
            <p>{max}°</p>
          </div>

        </div>
      </div>
    );
  };
